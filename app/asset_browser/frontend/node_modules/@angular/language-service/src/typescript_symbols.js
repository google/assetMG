/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/language-service/src/typescript_symbols", ["require", "exports", "tslib", "path", "typescript", "@angular/language-service/src/symbols"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var path = require("path");
    var ts = require("typescript");
    var symbols_1 = require("@angular/language-service/src/symbols");
    // In TypeScript 2.1 these flags moved
    // These helpers work for both 2.0 and 2.1.
    var isPrivate = ts.ModifierFlags ?
        (function (node) {
            return !!(ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Private);
        }) :
        (function (node) { return !!(node.flags & ts.NodeFlags.Private); });
    var isReferenceType = ts.ObjectFlags ?
        (function (type) {
            return !!(type.flags & ts.TypeFlags.Object &&
                type.objectFlags & ts.ObjectFlags.Reference);
        }) :
        (function (type) { return !!(type.flags & ts.TypeFlags.Reference); });
    function getSymbolQuery(program, checker, source, fetchPipes) {
        return new TypeScriptSymbolQuery(program, checker, source, fetchPipes);
    }
    exports.getSymbolQuery = getSymbolQuery;
    function getClassMembers(program, checker, staticSymbol) {
        var declaration = getClassFromStaticSymbol(program, staticSymbol);
        if (declaration) {
            var type = checker.getTypeAtLocation(declaration);
            var node = program.getSourceFile(staticSymbol.filePath);
            if (node) {
                return new TypeWrapper(type, { node: node, program: program, checker: checker }).members();
            }
        }
    }
    exports.getClassMembers = getClassMembers;
    function getClassMembersFromDeclaration(program, checker, source, declaration) {
        var type = checker.getTypeAtLocation(declaration);
        return new TypeWrapper(type, { node: source, program: program, checker: checker }).members();
    }
    exports.getClassMembersFromDeclaration = getClassMembersFromDeclaration;
    function getPipesTable(source, program, checker, pipes) {
        return new PipesTable(pipes, { program: program, checker: checker, node: source });
    }
    exports.getPipesTable = getPipesTable;
    function getClassFromStaticSymbol(program, type) {
        var source = program.getSourceFile(type.filePath);
        if (source) {
            return ts.forEachChild(source, function (child) {
                if (child.kind === ts.SyntaxKind.ClassDeclaration) {
                    var classDeclaration = child;
                    if (classDeclaration.name != null && classDeclaration.name.text === type.name) {
                        return classDeclaration;
                    }
                }
            });
        }
        return undefined;
    }
    var TypeScriptSymbolQuery = /** @class */ (function () {
        function TypeScriptSymbolQuery(program, checker, source, fetchPipes) {
            this.program = program;
            this.checker = checker;
            this.source = source;
            this.fetchPipes = fetchPipes;
            this.typeCache = new Map();
        }
        TypeScriptSymbolQuery.prototype.getTypeKind = function (symbol) {
            var type = symbol instanceof TypeWrapper ? symbol.tsType : undefined;
            return typeKindOf(type);
        };
        TypeScriptSymbolQuery.prototype.getBuiltinType = function (kind) {
            var result = this.typeCache.get(kind);
            if (!result) {
                var type = getTsTypeFromBuiltinType(kind, {
                    checker: this.checker,
                    node: this.source,
                    program: this.program,
                });
                result =
                    new TypeWrapper(type, { program: this.program, checker: this.checker, node: this.source });
                this.typeCache.set(kind, result);
            }
            return result;
        };
        TypeScriptSymbolQuery.prototype.getTypeUnion = function () {
            var types = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                types[_i] = arguments[_i];
            }
            // No API exists so return any if the types are not all the same type.
            var result = undefined;
            if (types.length) {
                result = types[0];
                for (var i = 1; i < types.length; i++) {
                    if (types[i] != result) {
                        result = undefined;
                        break;
                    }
                }
            }
            return result || this.getBuiltinType(symbols_1.BuiltinType.Any);
        };
        TypeScriptSymbolQuery.prototype.getArrayType = function (_type) {
            return this.getBuiltinType(symbols_1.BuiltinType.Any);
        };
        TypeScriptSymbolQuery.prototype.getElementType = function (type) {
            if (type instanceof TypeWrapper) {
                var ty = type.tsType;
                var tyArgs = type.typeArguments();
                // TODO(ayazhafiz): Track https://github.com/microsoft/TypeScript/issues/37711 to expose
                // `isArrayLikeType` as a public method.
                if (!this.checker.isArrayLikeType(ty) || (tyArgs === null || tyArgs === void 0 ? void 0 : tyArgs.length) !== 1)
                    return;
                return tyArgs[0];
            }
        };
        TypeScriptSymbolQuery.prototype.getNonNullableType = function (symbol) {
            if (symbol instanceof TypeWrapper && (typeof this.checker.getNonNullableType == 'function')) {
                var tsType = symbol.tsType;
                var nonNullableType = this.checker.getNonNullableType(tsType);
                if (nonNullableType != tsType) {
                    return new TypeWrapper(nonNullableType, symbol.context);
                }
                else if (nonNullableType == tsType) {
                    return symbol;
                }
            }
            return this.getBuiltinType(symbols_1.BuiltinType.Any);
        };
        TypeScriptSymbolQuery.prototype.getPipes = function () {
            var result = this.pipesCache;
            if (!result) {
                result = this.pipesCache = this.fetchPipes();
            }
            return result;
        };
        TypeScriptSymbolQuery.prototype.getTemplateContext = function (type) {
            var context = { node: this.source, program: this.program, checker: this.checker };
            var typeSymbol = findClassSymbolInContext(type, context);
            if (typeSymbol) {
                var contextType = this.getTemplateRefContextType(typeSymbol, context);
                if (contextType)
                    return contextType.members();
            }
        };
        TypeScriptSymbolQuery.prototype.getTypeSymbol = function (type) {
            var context = { node: this.source, program: this.program, checker: this.checker };
            var typeSymbol = findClassSymbolInContext(type, context);
            return typeSymbol && new SymbolWrapper(typeSymbol, context);
        };
        TypeScriptSymbolQuery.prototype.createSymbolTable = function (symbols) {
            var result = new MapSymbolTable();
            result.addAll(symbols.map(function (s) { return new DeclaredSymbol(s); }));
            return result;
        };
        TypeScriptSymbolQuery.prototype.mergeSymbolTable = function (symbolTables) {
            var e_1, _a;
            var result = new MapSymbolTable();
            try {
                for (var symbolTables_1 = tslib_1.__values(symbolTables), symbolTables_1_1 = symbolTables_1.next(); !symbolTables_1_1.done; symbolTables_1_1 = symbolTables_1.next()) {
                    var symbolTable = symbolTables_1_1.value;
                    result.addAll(symbolTable.values());
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (symbolTables_1_1 && !symbolTables_1_1.done && (_a = symbolTables_1.return)) _a.call(symbolTables_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return result;
        };
        TypeScriptSymbolQuery.prototype.getSpanAt = function (line, column) {
            return spanAt(this.source, line, column);
        };
        TypeScriptSymbolQuery.prototype.getTemplateRefContextType = function (typeSymbol, context) {
            var e_2, _a;
            var type = this.checker.getTypeOfSymbolAtLocation(typeSymbol, this.source);
            var constructor = type.symbol && type.symbol.members &&
                getFromSymbolTable(type.symbol.members, '__constructor');
            if (constructor) {
                var constructorDeclaration = constructor.declarations[0];
                try {
                    for (var _b = tslib_1.__values(constructorDeclaration.parameters), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var parameter = _c.value;
                        var type_1 = this.checker.getTypeAtLocation(parameter.type);
                        if (type_1.symbol.name == 'TemplateRef' && isReferenceType(type_1)) {
                            var typeWrapper = new TypeWrapper(type_1, context);
                            var typeArguments = typeWrapper.typeArguments();
                            if (typeArguments && typeArguments.length === 1) {
                                return typeArguments[0];
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        };
        return TypeScriptSymbolQuery;
    }());
    function typeCallable(type) {
        var signatures = type.getCallSignatures();
        return signatures && signatures.length != 0;
    }
    function signaturesOf(type, context) {
        return type.getCallSignatures().map(function (s) { return new SignatureWrapper(s, context); });
    }
    function selectSignature(type, context, _types) {
        // TODO: Do a better job of selecting the right signature. TypeScript does not currently support a
        // Type Relationship API (see https://github.com/angular/vscode-ng-language-service/issues/143).
        // Consider creating a TypeCheckBlock host in the language service that may also act as a
        // scratchpad for type comparisons.
        var signatures = type.getCallSignatures();
        return signatures.length ? new SignatureWrapper(signatures[0], context) : undefined;
    }
    var TypeWrapper = /** @class */ (function () {
        function TypeWrapper(tsType, context) {
            this.tsType = tsType;
            this.context = context;
            this.kind = 'type';
            this.language = 'typescript';
            this.type = undefined;
            this.container = undefined;
            this.public = true;
            if (!tsType) {
                throw Error('Internal: null type');
            }
        }
        Object.defineProperty(TypeWrapper.prototype, "name", {
            get: function () {
                return this.context.checker.typeToString(this.tsType);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeWrapper.prototype, "callable", {
            get: function () {
                return typeCallable(this.tsType);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeWrapper.prototype, "nullable", {
            get: function () {
                return this.context.checker.getNonNullableType(this.tsType) != this.tsType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeWrapper.prototype, "documentation", {
            get: function () {
                var symbol = this.tsType.getSymbol();
                if (!symbol) {
                    return [];
                }
                return symbol.getDocumentationComment(this.context.checker);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TypeWrapper.prototype, "definition", {
            get: function () {
                var symbol = this.tsType.getSymbol();
                return symbol ? definitionFromTsSymbol(symbol) : undefined;
            },
            enumerable: true,
            configurable: true
        });
        TypeWrapper.prototype.members = function () {
            // Should call getApparentProperties() instead of getProperties() because
            // the former includes properties on the base class whereas the latter does
            // not. This provides properties like .bind(), .call(), .apply(), etc for
            // functions.
            return new SymbolTableWrapper(this.tsType.getApparentProperties(), this.context, this.tsType);
        };
        TypeWrapper.prototype.signatures = function () {
            return signaturesOf(this.tsType, this.context);
        };
        TypeWrapper.prototype.selectSignature = function (types) {
            return selectSignature(this.tsType, this.context, types);
        };
        TypeWrapper.prototype.indexed = function (type, value) {
            if (!(type instanceof TypeWrapper))
                return;
            var typeKind = typeKindOf(type.tsType);
            switch (typeKind) {
                case symbols_1.BuiltinType.Number:
                    var nType = this.tsType.getNumberIndexType();
                    if (nType) {
                        // get the right tuple type by value, like 'var t: [number, string];'
                        if (nType.isUnion()) {
                            // return undefined if array index out of bound.
                            return nType.types[value] && new TypeWrapper(nType.types[value], this.context);
                        }
                        return new TypeWrapper(nType, this.context);
                    }
                    return undefined;
                case symbols_1.BuiltinType.String:
                    var sType = this.tsType.getStringIndexType();
                    return sType && new TypeWrapper(sType, this.context);
            }
        };
        TypeWrapper.prototype.typeArguments = function () {
            var _this = this;
            if (!isReferenceType(this.tsType))
                return;
            var typeReference = this.tsType;
            var typeArguments;
            typeArguments = this.context.checker.getTypeArguments(typeReference);
            if (!typeArguments)
                return undefined;
            return typeArguments.map(function (ta) { return new TypeWrapper(ta, _this.context); });
        };
        return TypeWrapper;
    }());
    // If stringIndexType a primitive type(e.g. 'string'), the Symbol is undefined;
    // and in AstType.resolvePropertyRead method, the Symbol.type should get the right type.
    var StringIndexTypeWrapper = /** @class */ (function (_super) {
        tslib_1.__extends(StringIndexTypeWrapper, _super);
        function StringIndexTypeWrapper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = new TypeWrapper(_this.tsType, _this.context);
            return _this;
        }
        return StringIndexTypeWrapper;
    }(TypeWrapper));
    var SymbolWrapper = /** @class */ (function () {
        function SymbolWrapper(symbol, 
        /** TypeScript type context of the symbol. */
        context, 
        /**
         * Type of the TypeScript symbol, if known. If not provided, the type of the symbol
         * will be determined dynamically; see `SymbolWrapper#tsType`.
         */
        _tsType) {
            this.context = context;
            this._tsType = _tsType;
            this.nullable = false;
            this.language = 'typescript';
            this.symbol = symbol && context && (symbol.flags & ts.SymbolFlags.Alias) ?
                context.checker.getAliasedSymbol(symbol) :
                symbol;
        }
        Object.defineProperty(SymbolWrapper.prototype, "name", {
            get: function () {
                return this.symbol.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "kind", {
            get: function () {
                return this.callable ? 'method' : 'property';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "type", {
            get: function () {
                return new TypeWrapper(this.tsType, this.context);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "container", {
            get: function () {
                return getContainerOf(this.symbol, this.context);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "public", {
            get: function () {
                // Symbols that are not explicitly made private are public.
                return !isSymbolPrivate(this.symbol);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "callable", {
            get: function () {
                return typeCallable(this.tsType);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "definition", {
            get: function () {
                return definitionFromTsSymbol(this.symbol);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SymbolWrapper.prototype, "documentation", {
            get: function () {
                return this.symbol.getDocumentationComment(this.context.checker);
            },
            enumerable: true,
            configurable: true
        });
        SymbolWrapper.prototype.members = function () {
            if (!this._members) {
                if ((this.symbol.flags & (ts.SymbolFlags.Class | ts.SymbolFlags.Interface)) != 0) {
                    var declaredType = this.context.checker.getDeclaredTypeOfSymbol(this.symbol);
                    var typeWrapper = new TypeWrapper(declaredType, this.context);
                    this._members = typeWrapper.members();
                }
                else {
                    this._members = new SymbolTableWrapper(this.symbol.members, this.context, this.tsType);
                }
            }
            return this._members;
        };
        SymbolWrapper.prototype.signatures = function () {
            return signaturesOf(this.tsType, this.context);
        };
        SymbolWrapper.prototype.selectSignature = function (types) {
            return selectSignature(this.tsType, this.context, types);
        };
        SymbolWrapper.prototype.indexed = function (_argument) {
            return undefined;
        };
        SymbolWrapper.prototype.typeArguments = function () {
            return this.type.typeArguments();
        };
        Object.defineProperty(SymbolWrapper.prototype, "tsType", {
            get: function () {
                var type = this._tsType;
                if (!type) {
                    type = this._tsType =
                        this.context.checker.getTypeOfSymbolAtLocation(this.symbol, this.context.node);
                }
                return type;
            },
            enumerable: true,
            configurable: true
        });
        return SymbolWrapper;
    }());
    var DeclaredSymbol = /** @class */ (function () {
        function DeclaredSymbol(declaration) {
            this.declaration = declaration;
            this.language = 'ng-template';
            this.nullable = false;
            this.public = true;
        }
        Object.defineProperty(DeclaredSymbol.prototype, "name", {
            get: function () {
                return this.declaration.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "kind", {
            get: function () {
                return this.declaration.kind;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "container", {
            get: function () {
                return undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "type", {
            get: function () {
                return this.declaration.type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "callable", {
            get: function () {
                return this.type.callable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "definition", {
            get: function () {
                return this.declaration.definition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DeclaredSymbol.prototype, "documentation", {
            get: function () {
                return this.declaration.type.documentation;
            },
            enumerable: true,
            configurable: true
        });
        DeclaredSymbol.prototype.members = function () {
            return this.type.members();
        };
        DeclaredSymbol.prototype.signatures = function () {
            return this.type.signatures();
        };
        DeclaredSymbol.prototype.selectSignature = function (types) {
            return this.type.selectSignature(types);
        };
        DeclaredSymbol.prototype.typeArguments = function () {
            return this.type.typeArguments();
        };
        DeclaredSymbol.prototype.indexed = function (_argument) {
            return undefined;
        };
        return DeclaredSymbol;
    }());
    var SignatureWrapper = /** @class */ (function () {
        function SignatureWrapper(signature, context) {
            this.signature = signature;
            this.context = context;
        }
        Object.defineProperty(SignatureWrapper.prototype, "arguments", {
            get: function () {
                return new SymbolTableWrapper(this.signature.getParameters(), this.context);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureWrapper.prototype, "result", {
            get: function () {
                return new TypeWrapper(this.signature.getReturnType(), this.context);
            },
            enumerable: true,
            configurable: true
        });
        return SignatureWrapper;
    }());
    var SignatureResultOverride = /** @class */ (function () {
        function SignatureResultOverride(signature, resultType) {
            this.signature = signature;
            this.resultType = resultType;
        }
        Object.defineProperty(SignatureResultOverride.prototype, "arguments", {
            get: function () {
                return this.signature.arguments;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignatureResultOverride.prototype, "result", {
            get: function () {
                return this.resultType;
            },
            enumerable: true,
            configurable: true
        });
        return SignatureResultOverride;
    }());
    function toSymbolTableFactory(symbols) {
        var e_3, _a;
        // ∀ Typescript version >= 2.2, `SymbolTable` is implemented as an ES6 `Map`
        var result = new Map();
        try {
            for (var symbols_2 = tslib_1.__values(symbols), symbols_2_1 = symbols_2.next(); !symbols_2_1.done; symbols_2_1 = symbols_2.next()) {
                var symbol = symbols_2_1.value;
                result.set(symbol.name, symbol);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (symbols_2_1 && !symbols_2_1.done && (_a = symbols_2.return)) _a.call(symbols_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    }
    function toSymbols(symbolTable) {
        if (!symbolTable)
            return [];
        var table = symbolTable;
        if (typeof table.values === 'function') {
            return Array.from(table.values());
        }
        var result = [];
        var own = typeof table.hasOwnProperty === 'function' ?
            function (name) { return table.hasOwnProperty(name); } :
            function (name) { return !!table[name]; };
        for (var name_1 in table) {
            if (own(name_1)) {
                result.push(table[name_1]);
            }
        }
        return result;
    }
    var SymbolTableWrapper = /** @class */ (function () {
        /**
         * Creates a queryable table of symbols belonging to a TypeScript entity.
         * @param symbols symbols to query belonging to the entity
         * @param context program context
         * @param type original TypeScript type of entity owning the symbols, if known
         */
        function SymbolTableWrapper(symbols, context, type) {
            this.context = context;
            symbols = symbols || [];
            if (Array.isArray(symbols)) {
                this.symbols = symbols;
                this.symbolTable = toSymbolTableFactory(symbols);
            }
            else {
                this.symbols = toSymbols(symbols);
                this.symbolTable = symbols;
            }
            if (type) {
                this.stringIndexType = type.getStringIndexType();
            }
        }
        Object.defineProperty(SymbolTableWrapper.prototype, "size", {
            get: function () {
                return this.symbols.length;
            },
            enumerable: true,
            configurable: true
        });
        SymbolTableWrapper.prototype.get = function (key) {
            var symbol = getFromSymbolTable(this.symbolTable, key);
            if (symbol) {
                return new SymbolWrapper(symbol, this.context);
            }
            if (this.stringIndexType) {
                // If the key does not exist as an explicit symbol on the type, it may be accessing a string
                // index signature using dot notation:
                //
                //   const obj<T>: { [key: string]: T };
                //   obj.stringIndex // equivalent to obj['stringIndex'];
                //
                // In this case, return the type indexed by an arbitrary string key.
                return new StringIndexTypeWrapper(this.stringIndexType, this.context);
            }
            return undefined;
        };
        SymbolTableWrapper.prototype.has = function (key) {
            var table = this.symbolTable;
            return ((typeof table.has === 'function') ? table.has(key) : table[key] != null) ||
                this.stringIndexType !== undefined;
        };
        SymbolTableWrapper.prototype.values = function () {
            var _this = this;
            return this.symbols.map(function (s) { return new SymbolWrapper(s, _this.context); });
        };
        return SymbolTableWrapper;
    }());
    var MapSymbolTable = /** @class */ (function () {
        function MapSymbolTable() {
            this.map = new Map();
            this._values = [];
        }
        Object.defineProperty(MapSymbolTable.prototype, "size", {
            get: function () {
                return this.map.size;
            },
            enumerable: true,
            configurable: true
        });
        MapSymbolTable.prototype.get = function (key) {
            return this.map.get(key);
        };
        MapSymbolTable.prototype.add = function (symbol) {
            if (this.map.has(symbol.name)) {
                var previous = this.map.get(symbol.name);
                this._values[this._values.indexOf(previous)] = symbol;
            }
            this.map.set(symbol.name, symbol);
            this._values.push(symbol);
        };
        MapSymbolTable.prototype.addAll = function (symbols) {
            var e_4, _a;
            try {
                for (var symbols_3 = tslib_1.__values(symbols), symbols_3_1 = symbols_3.next(); !symbols_3_1.done; symbols_3_1 = symbols_3.next()) {
                    var symbol = symbols_3_1.value;
                    this.add(symbol);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (symbols_3_1 && !symbols_3_1.done && (_a = symbols_3.return)) _a.call(symbols_3);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        MapSymbolTable.prototype.has = function (key) {
            return this.map.has(key);
        };
        MapSymbolTable.prototype.values = function () {
            // Switch to this.map.values once iterables are supported by the target language.
            return this._values;
        };
        return MapSymbolTable;
    }());
    var PipesTable = /** @class */ (function () {
        function PipesTable(pipes, context) {
            this.pipes = pipes;
            this.context = context;
        }
        Object.defineProperty(PipesTable.prototype, "size", {
            get: function () {
                return this.pipes.length;
            },
            enumerable: true,
            configurable: true
        });
        PipesTable.prototype.get = function (key) {
            var pipe = this.pipes.find(function (pipe) { return pipe.name == key; });
            if (pipe) {
                return new PipeSymbol(pipe, this.context);
            }
        };
        PipesTable.prototype.has = function (key) {
            return this.pipes.find(function (pipe) { return pipe.name == key; }) != null;
        };
        PipesTable.prototype.values = function () {
            var _this = this;
            return this.pipes.map(function (pipe) { return new PipeSymbol(pipe, _this.context); });
        };
        return PipesTable;
    }());
    // This matches .d.ts files that look like ".../<package-name>/<package-name>.d.ts",
    var INDEX_PATTERN = /[\\/]([^\\/]+)[\\/]\1\.d\.ts$/;
    var PipeSymbol = /** @class */ (function () {
        function PipeSymbol(pipe, context) {
            this.pipe = pipe;
            this.context = context;
            this.kind = 'pipe';
            this.language = 'typescript';
            this.container = undefined;
            this.callable = true;
            this.nullable = false;
            this.public = true;
        }
        Object.defineProperty(PipeSymbol.prototype, "name", {
            get: function () {
                return this.pipe.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PipeSymbol.prototype, "type", {
            get: function () {
                return new TypeWrapper(this.tsType, this.context);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PipeSymbol.prototype, "definition", {
            get: function () {
                var symbol = this.tsType.getSymbol();
                return symbol ? definitionFromTsSymbol(symbol) : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PipeSymbol.prototype, "documentation", {
            get: function () {
                var symbol = this.tsType.getSymbol();
                if (!symbol) {
                    return [];
                }
                return symbol.getDocumentationComment(this.context.checker);
            },
            enumerable: true,
            configurable: true
        });
        PipeSymbol.prototype.members = function () {
            return EmptyTable.instance;
        };
        PipeSymbol.prototype.signatures = function () {
            return signaturesOf(this.tsType, this.context);
        };
        PipeSymbol.prototype.selectSignature = function (types) {
            var signature = selectSignature(this.tsType, this.context, types);
            if (types.length > 0) {
                var parameterType = types[0];
                var resultType = undefined;
                switch (this.name) {
                    case 'async':
                        // Get type argument of 'Observable', 'Promise', or 'EventEmitter'.
                        var tArgs = parameterType.typeArguments();
                        if (tArgs && tArgs.length === 1) {
                            resultType = tArgs[0];
                        }
                        break;
                    case 'slice':
                        resultType = parameterType;
                        break;
                }
                if (resultType) {
                    signature = new SignatureResultOverride(signature, resultType);
                }
            }
            return signature;
        };
        PipeSymbol.prototype.indexed = function (_argument) {
            return undefined;
        };
        PipeSymbol.prototype.typeArguments = function () {
            return this.type.typeArguments();
        };
        Object.defineProperty(PipeSymbol.prototype, "tsType", {
            get: function () {
                var type = this._tsType;
                if (!type) {
                    var classSymbol = this.findClassSymbol(this.pipe.type.reference);
                    if (classSymbol) {
                        type = this._tsType = this.findTransformMethodType(classSymbol);
                    }
                    if (!type) {
                        type = this._tsType = getTsTypeFromBuiltinType(symbols_1.BuiltinType.Any, this.context);
                    }
                }
                return type;
            },
            enumerable: true,
            configurable: true
        });
        PipeSymbol.prototype.findClassSymbol = function (type) {
            return findClassSymbolInContext(type, this.context);
        };
        PipeSymbol.prototype.findTransformMethodType = function (classSymbol) {
            var classType = this.context.checker.getDeclaredTypeOfSymbol(classSymbol);
            if (classType) {
                var transform = classType.getProperty('transform');
                if (transform) {
                    return this.context.checker.getTypeOfSymbolAtLocation(transform, this.context.node);
                }
            }
        };
        return PipeSymbol;
    }());
    function findClassSymbolInContext(type, context) {
        var sourceFile = context.program.getSourceFile(type.filePath);
        if (!sourceFile) {
            // This handles a case where an <packageName>/index.d.ts and a <packageName>/<packageName>.d.ts
            // are in the same directory. If we are looking for <packageName>/<packageName> and didn't
            // find it, look for <packageName>/index.d.ts as the program might have found that instead.
            var p = type.filePath;
            var m = p.match(INDEX_PATTERN);
            if (m) {
                var indexVersion = path.join(path.dirname(p), 'index.d.ts');
                sourceFile = context.program.getSourceFile(indexVersion);
            }
        }
        if (sourceFile) {
            var moduleSymbol = sourceFile.module || sourceFile.symbol;
            var exports_1 = context.checker.getExportsOfModule(moduleSymbol);
            return (exports_1 || []).find(function (symbol) { return symbol.name == type.name; });
        }
    }
    var EmptyTable = /** @class */ (function () {
        function EmptyTable() {
            this.size = 0;
        }
        EmptyTable.prototype.get = function (_key) {
            return undefined;
        };
        EmptyTable.prototype.has = function (_key) {
            return false;
        };
        EmptyTable.prototype.values = function () {
            return [];
        };
        EmptyTable.instance = new EmptyTable();
        return EmptyTable;
    }());
    function isSymbolPrivate(s) {
        return !!s.valueDeclaration && isPrivate(s.valueDeclaration);
    }
    function getTsTypeFromBuiltinType(builtinType, ctx) {
        var syntaxKind;
        switch (builtinType) {
            case symbols_1.BuiltinType.Any:
                syntaxKind = ts.SyntaxKind.AnyKeyword;
                break;
            case symbols_1.BuiltinType.Boolean:
                syntaxKind = ts.SyntaxKind.BooleanKeyword;
                break;
            case symbols_1.BuiltinType.Null:
                syntaxKind = ts.SyntaxKind.NullKeyword;
                break;
            case symbols_1.BuiltinType.Number:
                syntaxKind = ts.SyntaxKind.NumberKeyword;
                break;
            case symbols_1.BuiltinType.String:
                syntaxKind = ts.SyntaxKind.StringKeyword;
                break;
            case symbols_1.BuiltinType.Undefined:
                syntaxKind = ts.SyntaxKind.UndefinedKeyword;
                break;
            default:
                throw new Error("Internal error, unhandled literal kind " + builtinType + ":" + symbols_1.BuiltinType[builtinType]);
        }
        var node = ts.createNode(syntaxKind);
        node.parent = ctx.node;
        return ctx.checker.getTypeAtLocation(node);
    }
    function spanAt(sourceFile, line, column) {
        if (line != null && column != null) {
            var position_1 = ts.getPositionOfLineAndCharacter(sourceFile, line, column);
            var findChild = function findChild(node) {
                if (node.kind > ts.SyntaxKind.LastToken && node.pos <= position_1 && node.end > position_1) {
                    var betterNode = ts.forEachChild(node, findChild);
                    return betterNode || node;
                }
            };
            var node = ts.forEachChild(sourceFile, findChild);
            if (node) {
                return { start: node.getStart(), end: node.getEnd() };
            }
        }
    }
    function definitionFromTsSymbol(symbol) {
        var declarations = symbol.declarations;
        if (declarations) {
            return declarations.map(function (declaration) {
                var sourceFile = declaration.getSourceFile();
                return {
                    fileName: sourceFile.fileName,
                    span: { start: declaration.getStart(), end: declaration.getEnd() }
                };
            });
        }
    }
    function parentDeclarationOf(node) {
        while (node) {
            switch (node.kind) {
                case ts.SyntaxKind.ClassDeclaration:
                case ts.SyntaxKind.InterfaceDeclaration:
                    return node;
                case ts.SyntaxKind.SourceFile:
                    return undefined;
            }
            node = node.parent;
        }
    }
    function getContainerOf(symbol, context) {
        var e_5, _a;
        if (symbol.getFlags() & ts.SymbolFlags.ClassMember && symbol.declarations) {
            try {
                for (var _b = tslib_1.__values(symbol.declarations), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var declaration = _c.value;
                    var parent_1 = parentDeclarationOf(declaration);
                    if (parent_1) {
                        var type = context.checker.getTypeAtLocation(parent_1);
                        if (type) {
                            return new TypeWrapper(type, context);
                        }
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
    }
    function typeKindOf(type) {
        var e_6, _a;
        if (type) {
            if (type.flags & ts.TypeFlags.Any) {
                return symbols_1.BuiltinType.Any;
            }
            else if (type.flags & (ts.TypeFlags.String | ts.TypeFlags.StringLike | ts.TypeFlags.StringLiteral)) {
                return symbols_1.BuiltinType.String;
            }
            else if (type.flags & (ts.TypeFlags.Number | ts.TypeFlags.NumberLike)) {
                return symbols_1.BuiltinType.Number;
            }
            else if (type.flags & (ts.TypeFlags.Undefined)) {
                return symbols_1.BuiltinType.Undefined;
            }
            else if (type.flags & (ts.TypeFlags.Null)) {
                return symbols_1.BuiltinType.Null;
            }
            else if (type.flags & ts.TypeFlags.Union) {
                // If all the constituent types of a union are the same kind, it is also that kind.
                var candidate = null;
                var unionType = type;
                if (unionType.types.length > 0) {
                    candidate = typeKindOf(unionType.types[0]);
                    try {
                        for (var _b = tslib_1.__values(unionType.types), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var subType = _c.value;
                            if (candidate != typeKindOf(subType)) {
                                return symbols_1.BuiltinType.Other;
                            }
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                }
                if (candidate != null) {
                    return candidate;
                }
            }
            else if (type.flags & ts.TypeFlags.TypeParameter) {
                return symbols_1.BuiltinType.Unbound;
            }
        }
        return symbols_1.BuiltinType.Other;
    }
    function getFromSymbolTable(symbolTable, key) {
        var table = symbolTable;
        var symbol;
        if (typeof table.get === 'function') {
            // TS 2.2 uses a Map
            symbol = table.get(key);
        }
        else {
            // TS pre-2.2 uses an object
            symbol = table[key];
        }
        return symbol;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdF9zeW1ib2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbGFuZ3VhZ2Utc2VydmljZS9zcmMvdHlwZXNjcmlwdF9zeW1ib2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUdILDJCQUE2QjtJQUM3QiwrQkFBaUM7SUFFakMsaUVBQXlJO0lBRXpJLHNDQUFzQztJQUN0QywyQ0FBMkM7SUFDM0MsSUFBTSxTQUFTLEdBQUksRUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsVUFBQyxJQUFhO1lBQ1YsT0FBQSxDQUFDLENBQUMsQ0FBRSxFQUFVLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEdBQUksRUFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFBbEYsQ0FBa0YsQ0FBQyxDQUFDLENBQUM7UUFDMUYsQ0FBQyxVQUFDLElBQWEsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUksRUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO0lBRXhFLElBQU0sZUFBZSxHQUFJLEVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxDQUFDLFVBQUMsSUFBYTtZQUNWLE9BQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBSSxFQUFVLENBQUMsU0FBUyxDQUFDLE1BQU07Z0JBQ3hDLElBQVksQ0FBQyxXQUFXLEdBQUksRUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFEakUsQ0FDaUUsQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxVQUFDLElBQWEsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUksRUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFD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LHFCQUFXLENBQUMsS0FBSyxDQUFDOzZCQUMxQjt5QkFDRjs7Ozs7Ozs7O2lCQUNGO2dCQUNELElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtvQkFDckIsT0FBTyxTQUFTLENBQUM7aUJBQ2xCO2FBQ0Y7aUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFO2dCQUNsRCxPQUFPLHFCQUFXLENBQUMsT0FBTyxDQUFDO2FBQzVCO1NBQ0Y7UUFDRCxPQUFPLHFCQUFXLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCxTQUFTLGtCQUFrQixDQUFDLFdBQTJCLEVBQUUsR0FBVztRQUNsRSxJQUFNLEtBQUssR0FBRyxXQUFrQixDQUFDO1FBQ2pDLElBQUksTUFBMkIsQ0FBQztRQUVoQyxJQUFJLE9BQU8sS0FBSyxDQUFDLEdBQUcsS0FBSyxVQUFVLEVBQUU7WUFDbkMsb0JBQW9CO1lBQ3BCLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCw0QkFBNEI7WUFDNUIsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZVBpcGVTdW1tYXJ5LCBTdGF0aWNTeW1ib2x9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtCdWlsdGluVHlwZSwgRGVjbGFyYXRpb25LaW5kLCBEZWZpbml0aW9uLCBTaWduYXR1cmUsIFNwYW4sIFN5bWJvbCwgU3ltYm9sRGVjbGFyYXRpb24sIFN5bWJvbFF1ZXJ5LCBTeW1ib2xUYWJsZX0gZnJvbSAnLi9zeW1ib2xzJztcblxuLy8gSW4gVHlwZVNjcmlwdCAyLjEgdGhlc2UgZmxhZ3MgbW92ZWRcbi8vIFRoZXNlIGhlbHBlcnMgd29yayBmb3IgYm90aCAyLjAgYW5kIDIuMS5cbmNvbnN0IGlzUHJpdmF0ZSA9ICh0cyBhcyBhbnkpLk1vZGlmaWVyRmxhZ3MgP1xuICAgICgobm9kZTogdHMuTm9kZSkgPT5cbiAgICAgICAgICEhKCh0cyBhcyBhbnkpLmdldENvbWJpbmVkTW9kaWZpZXJGbGFncyhub2RlKSAmICh0cyBhcyBhbnkpLk1vZGlmaWVyRmxhZ3MuUHJpdmF0ZSkpIDpcbiAgICAoKG5vZGU6IHRzLk5vZGUpID0+ICEhKG5vZGUuZmxhZ3MgJiAodHMgYXMgYW55KS5Ob2RlRmxhZ3MuUHJpdmF0ZSkpO1xuXG5jb25zdCBpc1JlZmVyZW5jZVR5cGUgPSAodHMgYXMgYW55KS5PYmplY3RGbGFncyA/XG4gICAgKCh0eXBlOiB0cy5UeXBlKSA9PlxuICAgICAgICAgISEodHlwZS5mbGFncyAmICh0cyBhcyBhbnkpLlR5cGVGbGFncy5PYmplY3QgJiZcbiAgICAgICAgICAgICh0eXBlIGFzIGFueSkub2JqZWN0RmxhZ3MgJiAodHMgYXMgYW55KS5PYmplY3RGbGFncy5SZWZlcmVuY2UpKSA6XG4gICAgKCh0eXBlOiB0cy5UeXBlKSA9PiAhISh0eXBlLmZsYWdzICYgKHRzIGFzIGFueSkuVHlwZUZsYWdzLlJlZmVyZW5jZSkpO1xuXG5pbnRlcmZhY2UgVHlwZUNvbnRleHQge1xuICBub2RlOiB0cy5Ob2RlO1xuICBwcm9ncmFtOiB0cy5Qcm9ncmFtO1xuICBjaGVja2VyOiB0cy5UeXBlQ2hlY2tlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5bWJvbFF1ZXJ5KFxuICAgIHByb2dyYW06IHRzLlByb2dyYW0sIGNoZWNrZXI6IHRzLlR5cGVDaGVja2VyLCBzb3VyY2U6IHRzLlNvdXJjZUZpbGUsXG4gICAgZmV0Y2hQaXBlczogKCkgPT4gU3ltYm9sVGFibGUpOiBTeW1ib2xRdWVyeSB7XG4gIHJldHVybiBuZXcgVHlwZVNjcmlwdFN5bWJvbFF1ZXJ5KHByb2dyYW0sIGNoZWNrZXIsIHNvdXJjZSwgZmV0Y2hQaXBlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc01lbWJlcnMoXG4gICAgcHJvZ3JhbTogdHMuUHJvZ3JhbSwgY2hlY2tlcjogdHMuVHlwZUNoZWNrZXIsIHN0YXRpY1N5bWJvbDogU3RhdGljU3ltYm9sKTogU3ltYm9sVGFibGV8XG4gICAgdW5kZWZpbmVkIHtcbiAgY29uc3QgZGVjbGFyYXRpb24gPSBnZXRDbGFzc0Zyb21TdGF0aWNTeW1ib2wocHJvZ3JhbSwgc3RhdGljU3ltYm9sKTtcbiAgaWYgKGRlY2xhcmF0aW9uKSB7XG4gICAgY29uc3QgdHlwZSA9IGNoZWNrZXIuZ2V0VHlwZUF0TG9jYXRpb24oZGVjbGFyYXRpb24pO1xuICAgIGNvbnN0IG5vZGUgPSBwcm9ncmFtLmdldFNvdXJjZUZpbGUoc3RhdGljU3ltYm9sLmZpbGVQYXRoKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlV3JhcHBlcih0eXBlLCB7bm9kZSwgcHJvZ3JhbSwgY2hlY2tlcn0pLm1lbWJlcnMoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzTWVtYmVyc0Zyb21EZWNsYXJhdGlvbihcbiAgICBwcm9ncmFtOiB0cy5Qcm9ncmFtLCBjaGVja2VyOiB0cy5UeXBlQ2hlY2tlciwgc291cmNlOiB0cy5Tb3VyY2VGaWxlLFxuICAgIGRlY2xhcmF0aW9uOiB0cy5DbGFzc0RlY2xhcmF0aW9uKSB7XG4gIGNvbnN0IHR5cGUgPSBjaGVja2VyLmdldFR5cGVBdExvY2F0aW9uKGRlY2xhcmF0aW9uKTtcbiAgcmV0dXJuIG5ldyBUeXBlV3JhcHBlcih0eXBlLCB7bm9kZTogc291cmNlLCBwcm9ncmFtLCBjaGVja2VyfSkubWVtYmVycygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGlwZXNUYWJsZShcbiAgICBzb3VyY2U6IHRzLlNvdXJjZUZpbGUsIHByb2dyYW06IHRzLlByb2dyYW0sIGNoZWNrZXI6IHRzLlR5cGVDaGVja2VyLFxuICAgIHBpcGVzOiBDb21waWxlUGlwZVN1bW1hcnlbXSk6IFN5bWJvbFRhYmxlIHtcbiAgcmV0dXJuIG5ldyBQaXBlc1RhYmxlKHBpcGVzLCB7cHJvZ3JhbSwgY2hlY2tlciwgbm9kZTogc291cmNlfSk7XG59XG5cbmZ1bmN0aW9uIGdldENsYXNzRnJvbVN0YXRpY1N5bWJvbChwcm9ncmFtOiB0cy5Qcm9ncmFtLCB0eXBlOiBTdGF0aWNTeW1ib2wpOiB0cy5DbGFzc0RlY2xhcmF0aW9ufFxuICAgIHVuZGVmaW5lZCB7XG4gIGNvbnN0IHNvdXJjZSA9IHByb2dyYW0uZ2V0U291cmNlRmlsZSh0eXBlLmZpbGVQYXRoKTtcbiAgaWYgKHNvdXJjZSkge1xuICAgIHJldHVybiB0cy5mb3JFYWNoQ2hpbGQoc291cmNlLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoY2hpbGQua2luZCA9PT0gdHMuU3ludGF4S2luZC5DbGFzc0RlY2xhcmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzRGVjbGFyYXRpb24gPSBjaGlsZCBhcyB0cy5DbGFzc0RlY2xhcmF0aW9uO1xuICAgICAgICBpZiAoY2xhc3NEZWNsYXJhdGlvbi5uYW1lICE9IG51bGwgJiYgY2xhc3NEZWNsYXJhdGlvbi5uYW1lLnRleHQgPT09IHR5cGUubmFtZSkge1xuICAgICAgICAgIHJldHVybiBjbGFzc0RlY2xhcmF0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgYXMgKHRzLkNsYXNzRGVjbGFyYXRpb24gfCB1bmRlZmluZWQpO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY2xhc3MgVHlwZVNjcmlwdFN5bWJvbFF1ZXJ5IGltcGxlbWVudHMgU3ltYm9sUXVlcnkge1xuICBwcml2YXRlIHR5cGVDYWNoZSA9IG5ldyBNYXA8QnVpbHRpblR5cGUsIFN5bWJvbD4oKTtcbiAgcHJpdmF0ZSBwaXBlc0NhY2hlOiBTeW1ib2xUYWJsZXx1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHByb2dyYW06IHRzLlByb2dyYW0sIHByaXZhdGUgY2hlY2tlcjogdHMuVHlwZUNoZWNrZXIsIHByaXZhdGUgc291cmNlOiB0cy5Tb3VyY2VGaWxlLFxuICAgICAgcHJpdmF0ZSBmZXRjaFBpcGVzOiAoKSA9PiBTeW1ib2xUYWJsZSkge31cblxuICBnZXRUeXBlS2luZChzeW1ib2w6IFN5bWJvbCk6IEJ1aWx0aW5UeXBlIHtcbiAgICBjb25zdCB0eXBlID0gc3ltYm9sIGluc3RhbmNlb2YgVHlwZVdyYXBwZXIgPyBzeW1ib2wudHNUeXBlIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiB0eXBlS2luZE9mKHR5cGUpO1xuICB9XG5cbiAgZ2V0QnVpbHRpblR5cGUoa2luZDogQnVpbHRpblR5cGUpOiBTeW1ib2wge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnR5cGVDYWNoZS5nZXQoa2luZCk7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBnZXRUc1R5cGVGcm9tQnVpbHRpblR5cGUoa2luZCwge1xuICAgICAgICBjaGVja2VyOiB0aGlzLmNoZWNrZXIsXG4gICAgICAgIG5vZGU6IHRoaXMuc291cmNlLFxuICAgICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG4gICAgICB9KTtcbiAgICAgIHJlc3VsdCA9XG4gICAgICAgICAgbmV3IFR5cGVXcmFwcGVyKHR5cGUsIHtwcm9ncmFtOiB0aGlzLnByb2dyYW0sIGNoZWNrZXI6IHRoaXMuY2hlY2tlciwgbm9kZTogdGhpcy5zb3VyY2V9KTtcbiAgICAgIHRoaXMudHlwZUNhY2hlLnNldChraW5kLCByZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0VHlwZVVuaW9uKC4uLnR5cGVzOiBTeW1ib2xbXSk6IFN5bWJvbCB7XG4gICAgLy8gTm8gQVBJIGV4aXN0cyBzbyByZXR1cm4gYW55IGlmIHRoZSB0eXBlcyBhcmUgbm90IGFsbCB0aGUgc2FtZSB0eXBlLlxuICAgIGxldCByZXN1bHQ6IFN5bWJvbHx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGVzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gdHlwZXNbMF07XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlc1tpXSAhPSByZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdCB8fCB0aGlzLmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLkFueSk7XG4gIH1cblxuICBnZXRBcnJheVR5cGUoX3R5cGU6IFN5bWJvbCk6IFN5bWJvbCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuQW55KTtcbiAgfVxuXG4gIGdldEVsZW1lbnRUeXBlKHR5cGU6IFN5bWJvbCk6IFN5bWJvbHx1bmRlZmluZWQge1xuICAgIGlmICh0eXBlIGluc3RhbmNlb2YgVHlwZVdyYXBwZXIpIHtcbiAgICAgIGNvbnN0IHR5ID0gdHlwZS50c1R5cGU7XG4gICAgICBjb25zdCB0eUFyZ3MgPSB0eXBlLnR5cGVBcmd1bWVudHMoKTtcbiAgICAgIC8vIFRPRE8oYXlhemhhZml6KTogVHJhY2sgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8zNzcxMSB0byBleHBvc2VcbiAgICAgIC8vIGBpc0FycmF5TGlrZVR5cGVgIGFzIGEgcHVibGljIG1ldGhvZC5cbiAgICAgIGlmICghKHRoaXMuY2hlY2tlciBhcyBhbnkpLmlzQXJyYXlMaWtlVHlwZSh0eSkgfHwgdHlBcmdzPy5sZW5ndGggIT09IDEpIHJldHVybjtcbiAgICAgIHJldHVybiB0eUFyZ3NbMF07XG4gICAgfVxuICB9XG5cbiAgZ2V0Tm9uTnVsbGFibGVUeXBlKHN5bWJvbDogU3ltYm9sKTogU3ltYm9sIHtcbiAgICBpZiAoc3ltYm9sIGluc3RhbmNlb2YgVHlwZVdyYXBwZXIgJiYgKHR5cGVvZiB0aGlzLmNoZWNrZXIuZ2V0Tm9uTnVsbGFibGVUeXBlID09ICdmdW5jdGlvbicpKSB7XG4gICAgICBjb25zdCB0c1R5cGUgPSBzeW1ib2wudHNUeXBlO1xuICAgICAgY29uc3Qgbm9uTnVsbGFibGVUeXBlID0gdGhpcy5jaGVja2VyLmdldE5vbk51bGxhYmxlVHlwZSh0c1R5cGUpO1xuICAgICAgaWYgKG5vbk51bGxhYmxlVHlwZSAhPSB0c1R5cGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlV3JhcHBlcihub25OdWxsYWJsZVR5cGUsIHN5bWJvbC5jb250ZXh0KTtcbiAgICAgIH0gZWxzZSBpZiAobm9uTnVsbGFibGVUeXBlID09IHRzVHlwZSkge1xuICAgICAgICByZXR1cm4gc3ltYm9sO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRCdWlsdGluVHlwZShCdWlsdGluVHlwZS5BbnkpO1xuICB9XG5cbiAgZ2V0UGlwZXMoKTogU3ltYm9sVGFibGUge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBpcGVzQ2FjaGU7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMucGlwZXNDYWNoZSA9IHRoaXMuZmV0Y2hQaXBlcygpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0VGVtcGxhdGVDb250ZXh0KHR5cGU6IFN0YXRpY1N5bWJvbCk6IFN5bWJvbFRhYmxlfHVuZGVmaW5lZCB7XG4gICAgY29uc3QgY29udGV4dDogVHlwZUNvbnRleHQgPSB7bm9kZTogdGhpcy5zb3VyY2UsIHByb2dyYW06IHRoaXMucHJvZ3JhbSwgY2hlY2tlcjogdGhpcy5jaGVja2VyfTtcbiAgICBjb25zdCB0eXBlU3ltYm9sID0gZmluZENsYXNzU3ltYm9sSW5Db250ZXh0KHR5cGUsIGNvbnRleHQpO1xuICAgIGlmICh0eXBlU3ltYm9sKSB7XG4gICAgICBjb25zdCBjb250ZXh0VHlwZSA9IHRoaXMuZ2V0VGVtcGxhdGVSZWZDb250ZXh0VHlwZSh0eXBlU3ltYm9sLCBjb250ZXh0KTtcbiAgICAgIGlmIChjb250ZXh0VHlwZSkgcmV0dXJuIGNvbnRleHRUeXBlLm1lbWJlcnMoKTtcbiAgICB9XG4gIH1cblxuICBnZXRUeXBlU3ltYm9sKHR5cGU6IFN0YXRpY1N5bWJvbCk6IFN5bWJvbHx1bmRlZmluZWQge1xuICAgIGNvbnN0IGNvbnRleHQ6IFR5cGVDb250ZXh0ID0ge25vZGU6IHRoaXMuc291cmNlLCBwcm9ncmFtOiB0aGlzLnByb2dyYW0sIGNoZWNrZXI6IHRoaXMuY2hlY2tlcn07XG4gICAgY29uc3QgdHlwZVN5bWJvbCA9IGZpbmRDbGFzc1N5bWJvbEluQ29udGV4dCh0eXBlLCBjb250ZXh0KTtcbiAgICByZXR1cm4gdHlwZVN5bWJvbCAmJiBuZXcgU3ltYm9sV3JhcHBlcih0eXBlU3ltYm9sLCBjb250ZXh0KTtcbiAgfVxuXG4gIGNyZWF0ZVN5bWJvbFRhYmxlKHN5bWJvbHM6IFN5bWJvbERlY2xhcmF0aW9uW10pOiBTeW1ib2xUYWJsZSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hcFN5bWJvbFRhYmxlKCk7XG4gICAgcmVzdWx0LmFkZEFsbChzeW1ib2xzLm1hcChzID0+IG5ldyBEZWNsYXJlZFN5bWJvbChzKSkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBtZXJnZVN5bWJvbFRhYmxlKHN5bWJvbFRhYmxlczogU3ltYm9sVGFibGVbXSk6IFN5bWJvbFRhYmxlIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTWFwU3ltYm9sVGFibGUoKTtcbiAgICBmb3IgKGNvbnN0IHN5bWJvbFRhYmxlIG9mIHN5bWJvbFRhYmxlcykge1xuICAgICAgcmVzdWx0LmFkZEFsbChzeW1ib2xUYWJsZS52YWx1ZXMoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRTcGFuQXQobGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IFNwYW58dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gc3BhbkF0KHRoaXMuc291cmNlLCBsaW5lLCBjb2x1bW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUZW1wbGF0ZVJlZkNvbnRleHRUeXBlKHR5cGVTeW1ib2w6IHRzLlN5bWJvbCwgY29udGV4dDogVHlwZUNvbnRleHQpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5jaGVja2VyLmdldFR5cGVPZlN5bWJvbEF0TG9jYXRpb24odHlwZVN5bWJvbCwgdGhpcy5zb3VyY2UpO1xuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdHlwZS5zeW1ib2wgJiYgdHlwZS5zeW1ib2wubWVtYmVycyAmJlxuICAgICAgICBnZXRGcm9tU3ltYm9sVGFibGUodHlwZS5zeW1ib2wubWVtYmVycyEsICdfX2NvbnN0cnVjdG9yJyk7XG5cbiAgICBpZiAoY29uc3RydWN0b3IpIHtcbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBjb25zdHJ1Y3Rvci5kZWNsYXJhdGlvbnMhWzBdIGFzIHRzLkNvbnN0cnVjdG9yVHlwZU5vZGU7XG4gICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlciBvZiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuY2hlY2tlci5nZXRUeXBlQXRMb2NhdGlvbihwYXJhbWV0ZXIudHlwZSEpO1xuICAgICAgICBpZiAodHlwZS5zeW1ib2whLm5hbWUgPT0gJ1RlbXBsYXRlUmVmJyAmJiBpc1JlZmVyZW5jZVR5cGUodHlwZSkpIHtcbiAgICAgICAgICBjb25zdCB0eXBlV3JhcHBlciA9IG5ldyBUeXBlV3JhcHBlcih0eXBlLCBjb250ZXh0KTtcbiAgICAgICAgICBjb25zdCB0eXBlQXJndW1lbnRzID0gdHlwZVdyYXBwZXIudHlwZUFyZ3VtZW50cygpO1xuICAgICAgICAgIGlmICh0eXBlQXJndW1lbnRzICYmIHR5cGVBcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZUFyZ3VtZW50c1swXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHlwZUNhbGxhYmxlKHR5cGU6IHRzLlR5cGUpOiBib29sZWFuIHtcbiAgY29uc3Qgc2lnbmF0dXJlcyA9IHR5cGUuZ2V0Q2FsbFNpZ25hdHVyZXMoKTtcbiAgcmV0dXJuIHNpZ25hdHVyZXMgJiYgc2lnbmF0dXJlcy5sZW5ndGggIT0gMDtcbn1cblxuZnVuY3Rpb24gc2lnbmF0dXJlc09mKHR5cGU6IHRzLlR5cGUsIGNvbnRleHQ6IFR5cGVDb250ZXh0KTogU2lnbmF0dXJlW10ge1xuICByZXR1cm4gdHlwZS5nZXRDYWxsU2lnbmF0dXJlcygpLm1hcChzID0+IG5ldyBTaWduYXR1cmVXcmFwcGVyKHMsIGNvbnRleHQpKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0U2lnbmF0dXJlKHR5cGU6IHRzLlR5cGUsIGNvbnRleHQ6IFR5cGVDb250ZXh0LCBfdHlwZXM6IFN5bWJvbFtdKTogU2lnbmF0dXJlfFxuICAgIHVuZGVmaW5lZCB7XG4gIC8vIFRPRE86IERvIGEgYmV0dGVyIGpvYiBvZiBzZWxlY3RpbmcgdGhlIHJpZ2h0IHNpZ25hdHVyZS4gVHlwZVNjcmlwdCBkb2VzIG5vdCBjdXJyZW50bHkgc3VwcG9ydCBhXG4gIC8vIFR5cGUgUmVsYXRpb25zaGlwIEFQSSAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3ZzY29kZS1uZy1sYW5ndWFnZS1zZXJ2aWNlL2lzc3Vlcy8xNDMpLlxuICAvLyBDb25zaWRlciBjcmVhdGluZyBhIFR5cGVDaGVja0Jsb2NrIGhvc3QgaW4gdGhlIGxhbmd1YWdlIHNlcnZpY2UgdGhhdCBtYXkgYWxzbyBhY3QgYXMgYVxuICAvLyBzY3JhdGNocGFkIGZvciB0eXBlIGNvbXBhcmlzb25zLlxuICBjb25zdCBzaWduYXR1cmVzID0gdHlwZS5nZXRDYWxsU2lnbmF0dXJlcygpO1xuICByZXR1cm4gc2lnbmF0dXJlcy5sZW5ndGggPyBuZXcgU2lnbmF0dXJlV3JhcHBlcihzaWduYXR1cmVzWzBdLCBjb250ZXh0KSA6IHVuZGVmaW5lZDtcbn1cblxuY2xhc3MgVHlwZVdyYXBwZXIgaW1wbGVtZW50cyBTeW1ib2wge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHNUeXBlOiB0cy5UeXBlLCBwdWJsaWMgY29udGV4dDogVHlwZUNvbnRleHQpIHtcbiAgICBpZiAoIXRzVHlwZSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0ludGVybmFsOiBudWxsIHR5cGUnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQuY2hlY2tlci50eXBlVG9TdHJpbmcodGhpcy50c1R5cGUpO1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IGtpbmQ6IERlY2xhcmF0aW9uS2luZCA9ICd0eXBlJztcblxuICBwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2U6IHN0cmluZyA9ICd0eXBlc2NyaXB0JztcblxuICBwdWJsaWMgcmVhZG9ubHkgdHlwZTogU3ltYm9sfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgcmVhZG9ubHkgY29udGFpbmVyOiBTeW1ib2x8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIHB1YmxpYyByZWFkb25seSBwdWJsaWM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGdldCBjYWxsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZUNhbGxhYmxlKHRoaXMudHNUeXBlKTtcbiAgfVxuXG4gIGdldCBudWxsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LmNoZWNrZXIuZ2V0Tm9uTnVsbGFibGVUeXBlKHRoaXMudHNUeXBlKSAhPSB0aGlzLnRzVHlwZTtcbiAgfVxuXG4gIGdldCBkb2N1bWVudGF0aW9uKCk6IHRzLlN5bWJvbERpc3BsYXlQYXJ0W10ge1xuICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMudHNUeXBlLmdldFN5bWJvbCgpO1xuICAgIGlmICghc3ltYm9sKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBzeW1ib2wuZ2V0RG9jdW1lbnRhdGlvbkNvbW1lbnQodGhpcy5jb250ZXh0LmNoZWNrZXIpO1xuICB9XG5cbiAgZ2V0IGRlZmluaXRpb24oKTogRGVmaW5pdGlvbnx1bmRlZmluZWQge1xuICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMudHNUeXBlLmdldFN5bWJvbCgpO1xuICAgIHJldHVybiBzeW1ib2wgPyBkZWZpbml0aW9uRnJvbVRzU3ltYm9sKHN5bWJvbCkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBtZW1iZXJzKCk6IFN5bWJvbFRhYmxlIHtcbiAgICAvLyBTaG91bGQgY2FsbCBnZXRBcHBhcmVudFByb3BlcnRpZXMoKSBpbnN0ZWFkIG9mIGdldFByb3BlcnRpZXMoKSBiZWNhdXNlXG4gICAgLy8gdGhlIGZvcm1lciBpbmNsdWRlcyBwcm9wZXJ0aWVzIG9uIHRoZSBiYXNlIGNsYXNzIHdoZXJlYXMgdGhlIGxhdHRlciBkb2VzXG4gICAgLy8gbm90LiBUaGlzIHByb3ZpZGVzIHByb3BlcnRpZXMgbGlrZSAuYmluZCgpLCAuY2FsbCgpLCAuYXBwbHkoKSwgZXRjIGZvclxuICAgIC8vIGZ1bmN0aW9ucy5cbiAgICByZXR1cm4gbmV3IFN5bWJvbFRhYmxlV3JhcHBlcih0aGlzLnRzVHlwZS5nZXRBcHBhcmVudFByb3BlcnRpZXMoKSwgdGhpcy5jb250ZXh0LCB0aGlzLnRzVHlwZSk7XG4gIH1cblxuICBzaWduYXR1cmVzKCk6IFNpZ25hdHVyZVtdIHtcbiAgICByZXR1cm4gc2lnbmF0dXJlc09mKHRoaXMudHNUeXBlLCB0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgc2VsZWN0U2lnbmF0dXJlKHR5cGVzOiBTeW1ib2xbXSk6IFNpZ25hdHVyZXx1bmRlZmluZWQge1xuICAgIHJldHVybiBzZWxlY3RTaWduYXR1cmUodGhpcy50c1R5cGUsIHRoaXMuY29udGV4dCwgdHlwZXMpO1xuICB9XG5cbiAgaW5kZXhlZCh0eXBlOiBTeW1ib2wsIHZhbHVlOiBhbnkpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICBpZiAoISh0eXBlIGluc3RhbmNlb2YgVHlwZVdyYXBwZXIpKSByZXR1cm47XG5cbiAgICBjb25zdCB0eXBlS2luZCA9IHR5cGVLaW5kT2YodHlwZS50c1R5cGUpO1xuICAgIHN3aXRjaCAodHlwZUtpbmQpIHtcbiAgICAgIGNhc2UgQnVpbHRpblR5cGUuTnVtYmVyOlxuICAgICAgICBjb25zdCBuVHlwZSA9IHRoaXMudHNUeXBlLmdldE51bWJlckluZGV4VHlwZSgpO1xuICAgICAgICBpZiAoblR5cGUpIHtcbiAgICAgICAgICAvLyBnZXQgdGhlIHJpZ2h0IHR1cGxlIHR5cGUgYnkgdmFsdWUsIGxpa2UgJ3ZhciB0OiBbbnVtYmVyLCBzdHJpbmddOydcbiAgICAgICAgICBpZiAoblR5cGUuaXNVbmlvbigpKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gdW5kZWZpbmVkIGlmIGFycmF5IGluZGV4IG91dCBvZiBib3VuZC5cbiAgICAgICAgICAgIHJldHVybiBuVHlwZS50eXBlc1t2YWx1ZV0gJiYgbmV3IFR5cGVXcmFwcGVyKG5UeXBlLnR5cGVzW3ZhbHVlXSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBUeXBlV3JhcHBlcihuVHlwZSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgY2FzZSBCdWlsdGluVHlwZS5TdHJpbmc6XG4gICAgICAgIGNvbnN0IHNUeXBlID0gdGhpcy50c1R5cGUuZ2V0U3RyaW5nSW5kZXhUeXBlKCk7XG4gICAgICAgIHJldHVybiBzVHlwZSAmJiBuZXcgVHlwZVdyYXBwZXIoc1R5cGUsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgdHlwZUFyZ3VtZW50cygpOiBTeW1ib2xbXXx1bmRlZmluZWQge1xuICAgIGlmICghaXNSZWZlcmVuY2VUeXBlKHRoaXMudHNUeXBlKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgdHlwZVJlZmVyZW5jZSA9ICh0aGlzLnRzVHlwZSBhcyB0cy5UeXBlUmVmZXJlbmNlKTtcbiAgICBsZXQgdHlwZUFyZ3VtZW50czogUmVhZG9ubHlBcnJheTx0cy5UeXBlPnx1bmRlZmluZWQ7XG4gICAgdHlwZUFyZ3VtZW50cyA9IHRoaXMuY29udGV4dC5jaGVja2VyLmdldFR5cGVBcmd1bWVudHModHlwZVJlZmVyZW5jZSk7XG4gICAgaWYgKCF0eXBlQXJndW1lbnRzKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiB0eXBlQXJndW1lbnRzLm1hcCh0YSA9PiBuZXcgVHlwZVdyYXBwZXIodGEsIHRoaXMuY29udGV4dCkpO1xuICB9XG59XG5cbi8vIElmIHN0cmluZ0luZGV4VHlwZSBhIHByaW1pdGl2ZSB0eXBlKGUuZy4gJ3N0cmluZycpLCB0aGUgU3ltYm9sIGlzIHVuZGVmaW5lZDtcbi8vIGFuZCBpbiBBc3RUeXBlLnJlc29sdmVQcm9wZXJ0eVJlYWQgbWV0aG9kLCB0aGUgU3ltYm9sLnR5cGUgc2hvdWxkIGdldCB0aGUgcmlnaHQgdHlwZS5cbmNsYXNzIFN0cmluZ0luZGV4VHlwZVdyYXBwZXIgZXh0ZW5kcyBUeXBlV3JhcHBlciB7XG4gIHB1YmxpYyByZWFkb25seSB0eXBlID0gbmV3IFR5cGVXcmFwcGVyKHRoaXMudHNUeXBlLCB0aGlzLmNvbnRleHQpO1xufVxuXG5jbGFzcyBTeW1ib2xXcmFwcGVyIGltcGxlbWVudHMgU3ltYm9sIHtcbiAgcHJpdmF0ZSBzeW1ib2w6IHRzLlN5bWJvbDtcbiAgcHJpdmF0ZSBfbWVtYmVycz86IFN5bWJvbFRhYmxlO1xuXG4gIHB1YmxpYyByZWFkb25seSBudWxsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2U6IHN0cmluZyA9ICd0eXBlc2NyaXB0JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHN5bWJvbDogdHMuU3ltYm9sLFxuICAgICAgLyoqIFR5cGVTY3JpcHQgdHlwZSBjb250ZXh0IG9mIHRoZSBzeW1ib2wuICovXG4gICAgICBwcml2YXRlIGNvbnRleHQ6IFR5cGVDb250ZXh0LFxuICAgICAgLyoqXG4gICAgICAgKiBUeXBlIG9mIHRoZSBUeXBlU2NyaXB0IHN5bWJvbCwgaWYga25vd24uIElmIG5vdCBwcm92aWRlZCwgdGhlIHR5cGUgb2YgdGhlIHN5bWJvbFxuICAgICAgICogd2lsbCBiZSBkZXRlcm1pbmVkIGR5bmFtaWNhbGx5OyBzZWUgYFN5bWJvbFdyYXBwZXIjdHNUeXBlYC5cbiAgICAgICAqL1xuICAgICAgcHJpdmF0ZSBfdHNUeXBlPzogdHMuVHlwZSkge1xuICAgIHRoaXMuc3ltYm9sID0gc3ltYm9sICYmIGNvbnRleHQgJiYgKHN5bWJvbC5mbGFncyAmIHRzLlN5bWJvbEZsYWdzLkFsaWFzKSA/XG4gICAgICAgIGNvbnRleHQuY2hlY2tlci5nZXRBbGlhc2VkU3ltYm9sKHN5bWJvbCkgOlxuICAgICAgICBzeW1ib2w7XG4gIH1cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbC5uYW1lO1xuICB9XG5cbiAgZ2V0IGtpbmQoKTogRGVjbGFyYXRpb25LaW5kIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsYWJsZSA/ICdtZXRob2QnIDogJ3Byb3BlcnR5JztcbiAgfVxuXG4gIGdldCB0eXBlKCk6IFR5cGVXcmFwcGVyIHtcbiAgICByZXR1cm4gbmV3IFR5cGVXcmFwcGVyKHRoaXMudHNUeXBlLCB0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gZ2V0Q29udGFpbmVyT2YodGhpcy5zeW1ib2wsIHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBnZXQgcHVibGljKCk6IGJvb2xlYW4ge1xuICAgIC8vIFN5bWJvbHMgdGhhdCBhcmUgbm90IGV4cGxpY2l0bHkgbWFkZSBwcml2YXRlIGFyZSBwdWJsaWMuXG4gICAgcmV0dXJuICFpc1N5bWJvbFByaXZhdGUodGhpcy5zeW1ib2wpO1xuICB9XG5cbiAgZ2V0IGNhbGxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlQ2FsbGFibGUodGhpcy50c1R5cGUpO1xuICB9XG5cbiAgZ2V0IGRlZmluaXRpb24oKTogRGVmaW5pdGlvbiB7XG4gICAgcmV0dXJuIGRlZmluaXRpb25Gcm9tVHNTeW1ib2wodGhpcy5zeW1ib2wpO1xuICB9XG5cbiAgZ2V0IGRvY3VtZW50YXRpb24oKTogdHMuU3ltYm9sRGlzcGxheVBhcnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9sLmdldERvY3VtZW50YXRpb25Db21tZW50KHRoaXMuY29udGV4dC5jaGVja2VyKTtcbiAgfVxuXG4gIG1lbWJlcnMoKTogU3ltYm9sVGFibGUge1xuICAgIGlmICghdGhpcy5fbWVtYmVycykge1xuICAgICAgaWYgKCh0aGlzLnN5bWJvbC5mbGFncyAmICh0cy5TeW1ib2xGbGFncy5DbGFzcyB8IHRzLlN5bWJvbEZsYWdzLkludGVyZmFjZSkpICE9IDApIHtcbiAgICAgICAgY29uc3QgZGVjbGFyZWRUeXBlID0gdGhpcy5jb250ZXh0LmNoZWNrZXIuZ2V0RGVjbGFyZWRUeXBlT2ZTeW1ib2wodGhpcy5zeW1ib2wpO1xuICAgICAgICBjb25zdCB0eXBlV3JhcHBlciA9IG5ldyBUeXBlV3JhcHBlcihkZWNsYXJlZFR5cGUsIHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMuX21lbWJlcnMgPSB0eXBlV3JhcHBlci5tZW1iZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9tZW1iZXJzID0gbmV3IFN5bWJvbFRhYmxlV3JhcHBlcih0aGlzLnN5bWJvbC5tZW1iZXJzISwgdGhpcy5jb250ZXh0LCB0aGlzLnRzVHlwZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9tZW1iZXJzO1xuICB9XG5cbiAgc2lnbmF0dXJlcygpOiBTaWduYXR1cmVbXSB7XG4gICAgcmV0dXJuIHNpZ25hdHVyZXNPZih0aGlzLnRzVHlwZSwgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIHNlbGVjdFNpZ25hdHVyZSh0eXBlczogU3ltYm9sW10pOiBTaWduYXR1cmV8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gc2VsZWN0U2lnbmF0dXJlKHRoaXMudHNUeXBlLCB0aGlzLmNvbnRleHQsIHR5cGVzKTtcbiAgfVxuXG4gIGluZGV4ZWQoX2FyZ3VtZW50OiBTeW1ib2wpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgdHlwZUFyZ3VtZW50cygpOiBTeW1ib2xbXXx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnR5cGUudHlwZUFyZ3VtZW50cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgdHNUeXBlKCk6IHRzLlR5cGUge1xuICAgIGxldCB0eXBlID0gdGhpcy5fdHNUeXBlO1xuICAgIGlmICghdHlwZSkge1xuICAgICAgdHlwZSA9IHRoaXMuX3RzVHlwZSA9XG4gICAgICAgICAgdGhpcy5jb250ZXh0LmNoZWNrZXIuZ2V0VHlwZU9mU3ltYm9sQXRMb2NhdGlvbih0aGlzLnN5bWJvbCwgdGhpcy5jb250ZXh0Lm5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG5jbGFzcyBEZWNsYXJlZFN5bWJvbCBpbXBsZW1lbnRzIFN5bWJvbCB7XG4gIHB1YmxpYyByZWFkb25seSBsYW5ndWFnZTogc3RyaW5nID0gJ25nLXRlbXBsYXRlJztcblxuICBwdWJsaWMgcmVhZG9ubHkgbnVsbGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgcmVhZG9ubHkgcHVibGljOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlY2xhcmF0aW9uOiBTeW1ib2xEZWNsYXJhdGlvbikge31cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbi5uYW1lO1xuICB9XG5cbiAgZ2V0IGtpbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb24ua2luZDtcbiAgfVxuXG4gIGdldCBjb250YWluZXIoKTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCB0eXBlKCk6IFN5bWJvbCB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb24udHlwZTtcbiAgfVxuXG4gIGdldCBjYWxsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlLmNhbGxhYmxlO1xuICB9XG5cbiAgZ2V0IGRlZmluaXRpb24oKTogRGVmaW5pdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb24uZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldCBkb2N1bWVudGF0aW9uKCk6IHRzLlN5bWJvbERpc3BsYXlQYXJ0W10ge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uLnR5cGUuZG9jdW1lbnRhdGlvbjtcbiAgfVxuXG4gIG1lbWJlcnMoKTogU3ltYm9sVGFibGUge1xuICAgIHJldHVybiB0aGlzLnR5cGUubWVtYmVycygpO1xuICB9XG5cbiAgc2lnbmF0dXJlcygpOiBTaWduYXR1cmVbXSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZS5zaWduYXR1cmVzKCk7XG4gIH1cblxuICBzZWxlY3RTaWduYXR1cmUodHlwZXM6IFN5bWJvbFtdKTogU2lnbmF0dXJlfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudHlwZS5zZWxlY3RTaWduYXR1cmUodHlwZXMpO1xuICB9XG5cbiAgdHlwZUFyZ3VtZW50cygpOiBTeW1ib2xbXXx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnR5cGUudHlwZUFyZ3VtZW50cygpO1xuICB9XG5cbiAgaW5kZXhlZChfYXJndW1lbnQ6IFN5bWJvbCk6IFN5bWJvbHx1bmRlZmluZWQge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuY2xhc3MgU2lnbmF0dXJlV3JhcHBlciBpbXBsZW1lbnRzIFNpZ25hdHVyZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2lnbmF0dXJlOiB0cy5TaWduYXR1cmUsIHByaXZhdGUgY29udGV4dDogVHlwZUNvbnRleHQpIHt9XG5cbiAgZ2V0IGFyZ3VtZW50cygpOiBTeW1ib2xUYWJsZSB7XG4gICAgcmV0dXJuIG5ldyBTeW1ib2xUYWJsZVdyYXBwZXIodGhpcy5zaWduYXR1cmUuZ2V0UGFyYW1ldGVycygpLCB0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgZ2V0IHJlc3VsdCgpOiBTeW1ib2wge1xuICAgIHJldHVybiBuZXcgVHlwZVdyYXBwZXIodGhpcy5zaWduYXR1cmUuZ2V0UmV0dXJuVHlwZSgpLCB0aGlzLmNvbnRleHQpO1xuICB9XG59XG5cbmNsYXNzIFNpZ25hdHVyZVJlc3VsdE92ZXJyaWRlIGltcGxlbWVudHMgU2lnbmF0dXJlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaWduYXR1cmU6IFNpZ25hdHVyZSwgcHJpdmF0ZSByZXN1bHRUeXBlOiBTeW1ib2wpIHt9XG5cbiAgZ2V0IGFyZ3VtZW50cygpOiBTeW1ib2xUYWJsZSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlLmFyZ3VtZW50cztcbiAgfVxuXG4gIGdldCByZXN1bHQoKTogU3ltYm9sIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHRUeXBlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvU3ltYm9sVGFibGVGYWN0b3J5KHN5bWJvbHM6IHRzLlN5bWJvbFtdKTogdHMuU3ltYm9sVGFibGUge1xuICAvLyDiiIAgVHlwZXNjcmlwdCB2ZXJzaW9uID49IDIuMiwgYFN5bWJvbFRhYmxlYCBpcyBpbXBsZW1lbnRlZCBhcyBhbiBFUzYgYE1hcGBcbiAgY29uc3QgcmVzdWx0ID0gbmV3IE1hcDxzdHJpbmcsIHRzLlN5bWJvbD4oKTtcbiAgZm9yIChjb25zdCBzeW1ib2wgb2Ygc3ltYm9scykge1xuICAgIHJlc3VsdC5zZXQoc3ltYm9sLm5hbWUsIHN5bWJvbCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0IGFzIHRzLlN5bWJvbFRhYmxlO1xufVxuXG5mdW5jdGlvbiB0b1N5bWJvbHMoc3ltYm9sVGFibGU6IHRzLlN5bWJvbFRhYmxlfHVuZGVmaW5lZCk6IHRzLlN5bWJvbFtdIHtcbiAgaWYgKCFzeW1ib2xUYWJsZSkgcmV0dXJuIFtdO1xuXG4gIGNvbnN0IHRhYmxlID0gc3ltYm9sVGFibGUgYXMgYW55O1xuXG4gIGlmICh0eXBlb2YgdGFibGUudmFsdWVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGFibGUudmFsdWVzKCkpIGFzIHRzLlN5bWJvbFtdO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0OiB0cy5TeW1ib2xbXSA9IFtdO1xuXG4gIGNvbnN0IG93biA9IHR5cGVvZiB0YWJsZS5oYXNPd25Qcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAobmFtZTogc3RyaW5nKSA9PiB0YWJsZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSA6XG4gICAgICAobmFtZTogc3RyaW5nKSA9PiAhIXRhYmxlW25hbWVdO1xuXG4gIGZvciAoY29uc3QgbmFtZSBpbiB0YWJsZSkge1xuICAgIGlmIChvd24obmFtZSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHRhYmxlW25hbWVdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuY2xhc3MgU3ltYm9sVGFibGVXcmFwcGVyIGltcGxlbWVudHMgU3ltYm9sVGFibGUge1xuICBwcml2YXRlIHN5bWJvbHM6IHRzLlN5bWJvbFtdO1xuICBwcml2YXRlIHN5bWJvbFRhYmxlOiB0cy5TeW1ib2xUYWJsZTtcbiAgcHJpdmF0ZSBzdHJpbmdJbmRleFR5cGU/OiB0cy5UeXBlO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcXVlcnlhYmxlIHRhYmxlIG9mIHN5bWJvbHMgYmVsb25naW5nIHRvIGEgVHlwZVNjcmlwdCBlbnRpdHkuXG4gICAqIEBwYXJhbSBzeW1ib2xzIHN5bWJvbHMgdG8gcXVlcnkgYmVsb25naW5nIHRvIHRoZSBlbnRpdHlcbiAgICogQHBhcmFtIGNvbnRleHQgcHJvZ3JhbSBjb250ZXh0XG4gICAqIEBwYXJhbSB0eXBlIG9yaWdpbmFsIFR5cGVTY3JpcHQgdHlwZSBvZiBlbnRpdHkgb3duaW5nIHRoZSBzeW1ib2xzLCBpZiBrbm93blxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3ltYm9sczogdHMuU3ltYm9sVGFibGV8dHMuU3ltYm9sW10sIHByaXZhdGUgY29udGV4dDogVHlwZUNvbnRleHQsIHR5cGU/OiB0cy5UeXBlKSB7XG4gICAgc3ltYm9scyA9IHN5bWJvbHMgfHwgW107XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzeW1ib2xzKSkge1xuICAgICAgdGhpcy5zeW1ib2xzID0gc3ltYm9scztcbiAgICAgIHRoaXMuc3ltYm9sVGFibGUgPSB0b1N5bWJvbFRhYmxlRmFjdG9yeShzeW1ib2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zeW1ib2xzID0gdG9TeW1ib2xzKHN5bWJvbHMpO1xuICAgICAgdGhpcy5zeW1ib2xUYWJsZSA9IHN5bWJvbHM7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHRoaXMuc3RyaW5nSW5kZXhUeXBlID0gdHlwZS5nZXRTdHJpbmdJbmRleFR5cGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbHMubGVuZ3RoO1xuICB9XG5cbiAgZ2V0KGtleTogc3RyaW5nKTogU3ltYm9sfHVuZGVmaW5lZCB7XG4gICAgY29uc3Qgc3ltYm9sID0gZ2V0RnJvbVN5bWJvbFRhYmxlKHRoaXMuc3ltYm9sVGFibGUsIGtleSk7XG4gICAgaWYgKHN5bWJvbCkge1xuICAgICAgcmV0dXJuIG5ldyBTeW1ib2xXcmFwcGVyKHN5bWJvbCwgdGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdHJpbmdJbmRleFR5cGUpIHtcbiAgICAgIC8vIElmIHRoZSBrZXkgZG9lcyBub3QgZXhpc3QgYXMgYW4gZXhwbGljaXQgc3ltYm9sIG9uIHRoZSB0eXBlLCBpdCBtYXkgYmUgYWNjZXNzaW5nIGEgc3RyaW5nXG4gICAgICAvLyBpbmRleCBzaWduYXR1cmUgdXNpbmcgZG90IG5vdGF0aW9uOlxuICAgICAgLy9cbiAgICAgIC8vICAgY29uc3Qgb2JqPFQ+OiB7IFtrZXk6IHN0cmluZ106IFQgfTtcbiAgICAgIC8vICAgb2JqLnN0cmluZ0luZGV4IC8vIGVxdWl2YWxlbnQgdG8gb2JqWydzdHJpbmdJbmRleCddO1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoaXMgY2FzZSwgcmV0dXJuIHRoZSB0eXBlIGluZGV4ZWQgYnkgYW4gYXJiaXRyYXJ5IHN0cmluZyBrZXkuXG4gICAgICByZXR1cm4gbmV3IFN0cmluZ0luZGV4VHlwZVdyYXBwZXIodGhpcy5zdHJpbmdJbmRleFR5cGUsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGhhcyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRhYmxlOiBhbnkgPSB0aGlzLnN5bWJvbFRhYmxlO1xuICAgIHJldHVybiAoKHR5cGVvZiB0YWJsZS5oYXMgPT09ICdmdW5jdGlvbicpID8gdGFibGUuaGFzKGtleSkgOiB0YWJsZVtrZXldICE9IG51bGwpIHx8XG4gICAgICAgIHRoaXMuc3RyaW5nSW5kZXhUeXBlICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICB2YWx1ZXMoKTogU3ltYm9sW10ge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbHMubWFwKHMgPT4gbmV3IFN5bWJvbFdyYXBwZXIocywgdGhpcy5jb250ZXh0KSk7XG4gIH1cbn1cblxuY2xhc3MgTWFwU3ltYm9sVGFibGUgaW1wbGVtZW50cyBTeW1ib2xUYWJsZSB7XG4gIHByaXZhdGUgbWFwID0gbmV3IE1hcDxzdHJpbmcsIFN5bWJvbD4oKTtcbiAgcHJpdmF0ZSBfdmFsdWVzOiBTeW1ib2xbXSA9IFtdO1xuXG4gIGdldCBzaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubWFwLnNpemU7XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSk7XG4gIH1cblxuICBhZGQoc3ltYm9sOiBTeW1ib2wpIHtcbiAgICBpZiAodGhpcy5tYXAuaGFzKHN5bWJvbC5uYW1lKSkge1xuICAgICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLm1hcC5nZXQoc3ltYm9sLm5hbWUpITtcbiAgICAgIHRoaXMuX3ZhbHVlc1t0aGlzLl92YWx1ZXMuaW5kZXhPZihwcmV2aW91cyldID0gc3ltYm9sO1xuICAgIH1cbiAgICB0aGlzLm1hcC5zZXQoc3ltYm9sLm5hbWUsIHN5bWJvbCk7XG4gICAgdGhpcy5fdmFsdWVzLnB1c2goc3ltYm9sKTtcbiAgfVxuXG4gIGFkZEFsbChzeW1ib2xzOiBTeW1ib2xbXSkge1xuICAgIGZvciAoY29uc3Qgc3ltYm9sIG9mIHN5bWJvbHMpIHtcbiAgICAgIHRoaXMuYWRkKHN5bWJvbCk7XG4gICAgfVxuICB9XG5cbiAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhcyhrZXkpO1xuICB9XG5cbiAgdmFsdWVzKCk6IFN5bWJvbFtdIHtcbiAgICAvLyBTd2l0Y2ggdG8gdGhpcy5tYXAudmFsdWVzIG9uY2UgaXRlcmFibGVzIGFyZSBzdXBwb3J0ZWQgYnkgdGhlIHRhcmdldCBsYW5ndWFnZS5cbiAgICByZXR1cm4gdGhpcy5fdmFsdWVzO1xuICB9XG59XG5cbmNsYXNzIFBpcGVzVGFibGUgaW1wbGVtZW50cyBTeW1ib2xUYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGlwZXM6IENvbXBpbGVQaXBlU3VtbWFyeVtdLCBwcml2YXRlIGNvbnRleHQ6IFR5cGVDb250ZXh0KSB7fVxuXG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLnBpcGVzLmxlbmd0aDtcbiAgfVxuXG4gIGdldChrZXk6IHN0cmluZyk6IFN5bWJvbHx1bmRlZmluZWQge1xuICAgIGNvbnN0IHBpcGUgPSB0aGlzLnBpcGVzLmZpbmQocGlwZSA9PiBwaXBlLm5hbWUgPT0ga2V5KTtcbiAgICBpZiAocGlwZSkge1xuICAgICAgcmV0dXJuIG5ldyBQaXBlU3ltYm9sKHBpcGUsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGlwZXMuZmluZChwaXBlID0+IHBpcGUubmFtZSA9PSBrZXkpICE9IG51bGw7XG4gIH1cblxuICB2YWx1ZXMoKTogU3ltYm9sW10ge1xuICAgIHJldHVybiB0aGlzLnBpcGVzLm1hcChwaXBlID0+IG5ldyBQaXBlU3ltYm9sKHBpcGUsIHRoaXMuY29udGV4dCkpO1xuICB9XG59XG5cbi8vIFRoaXMgbWF0Y2hlcyAuZC50cyBmaWxlcyB0aGF0IGxvb2sgbGlrZSBcIi4uLi88cGFja2FnZS1uYW1lPi88cGFja2FnZS1uYW1lPi5kLnRzXCIsXG5jb25zdCBJTkRFWF9QQVRURVJOID0gL1tcXFxcL10oW15cXFxcL10rKVtcXFxcL11cXDFcXC5kXFwudHMkLztcblxuY2xhc3MgUGlwZVN5bWJvbCBpbXBsZW1lbnRzIFN5bWJvbCB7XG4gIHByaXZhdGUgX3RzVHlwZTogdHMuVHlwZXx1bmRlZmluZWQ7XG4gIHB1YmxpYyByZWFkb25seSBraW5kOiBEZWNsYXJhdGlvbktpbmQgPSAncGlwZSc7XG4gIHB1YmxpYyByZWFkb25seSBsYW5ndWFnZTogc3RyaW5nID0gJ3R5cGVzY3JpcHQnO1xuICBwdWJsaWMgcmVhZG9ubHkgY29udGFpbmVyOiBTeW1ib2x8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBwdWJsaWMgcmVhZG9ubHkgY2FsbGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgcmVhZG9ubHkgbnVsbGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHJlYWRvbmx5IHB1YmxpYzogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwaXBlOiBDb21waWxlUGlwZVN1bW1hcnksIHByaXZhdGUgY29udGV4dDogVHlwZUNvbnRleHQpIHt9XG5cbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5waXBlLm5hbWU7XG4gIH1cblxuICBnZXQgdHlwZSgpOiBUeXBlV3JhcHBlciB7XG4gICAgcmV0dXJuIG5ldyBUeXBlV3JhcHBlcih0aGlzLnRzVHlwZSwgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIGdldCBkZWZpbml0aW9uKCk6IERlZmluaXRpb258dW5kZWZpbmVkIHtcbiAgICBjb25zdCBzeW1ib2wgPSB0aGlzLnRzVHlwZS5nZXRTeW1ib2woKTtcbiAgICByZXR1cm4gc3ltYm9sID8gZGVmaW5pdGlvbkZyb21Uc1N5bWJvbChzeW1ib2wpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGRvY3VtZW50YXRpb24oKTogdHMuU3ltYm9sRGlzcGxheVBhcnRbXSB7XG4gICAgY29uc3Qgc3ltYm9sID0gdGhpcy50c1R5cGUuZ2V0U3ltYm9sKCk7XG4gICAgaWYgKCFzeW1ib2wpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHN5bWJvbC5nZXREb2N1bWVudGF0aW9uQ29tbWVudCh0aGlzLmNvbnRleHQuY2hlY2tlcik7XG4gIH1cblxuICBtZW1iZXJzKCk6IFN5bWJvbFRhYmxlIHtcbiAgICByZXR1cm4gRW1wdHlUYWJsZS5pbnN0YW5jZTtcbiAgfVxuXG4gIHNpZ25hdHVyZXMoKTogU2lnbmF0dXJlW10ge1xuICAgIHJldHVybiBzaWduYXR1cmVzT2YodGhpcy50c1R5cGUsIHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBzZWxlY3RTaWduYXR1cmUodHlwZXM6IFN5bWJvbFtdKTogU2lnbmF0dXJlfHVuZGVmaW5lZCB7XG4gICAgbGV0IHNpZ25hdHVyZSA9IHNlbGVjdFNpZ25hdHVyZSh0aGlzLnRzVHlwZSwgdGhpcy5jb250ZXh0LCB0eXBlcykhO1xuICAgIGlmICh0eXBlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJUeXBlID0gdHlwZXNbMF07XG4gICAgICBsZXQgcmVzdWx0VHlwZTogU3ltYm9sfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICAgIHN3aXRjaCAodGhpcy5uYW1lKSB7XG4gICAgICAgIGNhc2UgJ2FzeW5jJzpcbiAgICAgICAgICAvLyBHZXQgdHlwZSBhcmd1bWVudCBvZiAnT2JzZXJ2YWJsZScsICdQcm9taXNlJywgb3IgJ0V2ZW50RW1pdHRlcicuXG4gICAgICAgICAgY29uc3QgdEFyZ3MgPSBwYXJhbWV0ZXJUeXBlLnR5cGVBcmd1bWVudHMoKTtcbiAgICAgICAgICBpZiAodEFyZ3MgJiYgdEFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXN1bHRUeXBlID0gdEFyZ3NbMF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzbGljZSc6XG4gICAgICAgICAgcmVzdWx0VHlwZSA9IHBhcmFtZXRlclR5cGU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0VHlwZSkge1xuICAgICAgICBzaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlUmVzdWx0T3ZlcnJpZGUoc2lnbmF0dXJlLCByZXN1bHRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxuXG4gIGluZGV4ZWQoX2FyZ3VtZW50OiBTeW1ib2wpOiBTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgdHlwZUFyZ3VtZW50cygpOiBTeW1ib2xbXXx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnR5cGUudHlwZUFyZ3VtZW50cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgdHNUeXBlKCk6IHRzLlR5cGUge1xuICAgIGxldCB0eXBlID0gdGhpcy5fdHNUeXBlO1xuICAgIGlmICghdHlwZSkge1xuICAgICAgY29uc3QgY2xhc3NTeW1ib2wgPSB0aGlzLmZpbmRDbGFzc1N5bWJvbCh0aGlzLnBpcGUudHlwZS5yZWZlcmVuY2UpO1xuICAgICAgaWYgKGNsYXNzU3ltYm9sKSB7XG4gICAgICAgIHR5cGUgPSB0aGlzLl90c1R5cGUgPSB0aGlzLmZpbmRUcmFuc2Zvcm1NZXRob2RUeXBlKGNsYXNzU3ltYm9sKSE7XG4gICAgICB9XG4gICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgdHlwZSA9IHRoaXMuX3RzVHlwZSA9IGdldFRzVHlwZUZyb21CdWlsdGluVHlwZShCdWlsdGluVHlwZS5BbnksIHRoaXMuY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kQ2xhc3NTeW1ib2wodHlwZTogU3RhdGljU3ltYm9sKTogdHMuU3ltYm9sfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIGZpbmRDbGFzc1N5bWJvbEluQ29udGV4dCh0eXBlLCB0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kVHJhbnNmb3JtTWV0aG9kVHlwZShjbGFzc1N5bWJvbDogdHMuU3ltYm9sKTogdHMuVHlwZXx1bmRlZmluZWQge1xuICAgIGNvbnN0IGNsYXNzVHlwZSA9IHRoaXMuY29udGV4dC5jaGVja2VyLmdldERlY2xhcmVkVHlwZU9mU3ltYm9sKGNsYXNzU3ltYm9sKTtcbiAgICBpZiAoY2xhc3NUeXBlKSB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBjbGFzc1R5cGUuZ2V0UHJvcGVydHkoJ3RyYW5zZm9ybScpO1xuICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmNoZWNrZXIuZ2V0VHlwZU9mU3ltYm9sQXRMb2NhdGlvbih0cmFuc2Zvcm0sIHRoaXMuY29udGV4dC5ub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZENsYXNzU3ltYm9sSW5Db250ZXh0KHR5cGU6IFN0YXRpY1N5bWJvbCwgY29udGV4dDogVHlwZUNvbnRleHQpOiB0cy5TeW1ib2x8dW5kZWZpbmVkIHtcbiAgbGV0IHNvdXJjZUZpbGUgPSBjb250ZXh0LnByb2dyYW0uZ2V0U291cmNlRmlsZSh0eXBlLmZpbGVQYXRoKTtcbiAgaWYgKCFzb3VyY2VGaWxlKSB7XG4gICAgLy8gVGhpcyBoYW5kbGVzIGEgY2FzZSB3aGVyZSBhbiA8cGFja2FnZU5hbWU+L2luZGV4LmQudHMgYW5kIGEgPHBhY2thZ2VOYW1lPi88cGFja2FnZU5hbWU+LmQudHNcbiAgICAvLyBhcmUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LiBJZiB3ZSBhcmUgbG9va2luZyBmb3IgPHBhY2thZ2VOYW1lPi88cGFja2FnZU5hbWU+IGFuZCBkaWRuJ3RcbiAgICAvLyBmaW5kIGl0LCBsb29rIGZvciA8cGFja2FnZU5hbWU+L2luZGV4LmQudHMgYXMgdGhlIHByb2dyYW0gbWlnaHQgaGF2ZSBmb3VuZCB0aGF0IGluc3RlYWQuXG4gICAgY29uc3QgcCA9IHR5cGUuZmlsZVBhdGg7XG4gICAgY29uc3QgbSA9IHAubWF0Y2goSU5ERVhfUEFUVEVSTik7XG4gICAgaWYgKG0pIHtcbiAgICAgIGNvbnN0IGluZGV4VmVyc2lvbiA9IHBhdGguam9pbihwYXRoLmRpcm5hbWUocCksICdpbmRleC5kLnRzJyk7XG4gICAgICBzb3VyY2VGaWxlID0gY29udGV4dC5wcm9ncmFtLmdldFNvdXJjZUZpbGUoaW5kZXhWZXJzaW9uKTtcbiAgICB9XG4gIH1cbiAgaWYgKHNvdXJjZUZpbGUpIHtcbiAgICBjb25zdCBtb2R1bGVTeW1ib2wgPSAoc291cmNlRmlsZSBhcyBhbnkpLm1vZHVsZSB8fCAoc291cmNlRmlsZSBhcyBhbnkpLnN5bWJvbDtcbiAgICBjb25zdCBleHBvcnRzID0gY29udGV4dC5jaGVja2VyLmdldEV4cG9ydHNPZk1vZHVsZShtb2R1bGVTeW1ib2wpO1xuICAgIHJldHVybiAoZXhwb3J0cyB8fCBbXSkuZmluZChzeW1ib2wgPT4gc3ltYm9sLm5hbWUgPT0gdHlwZS5uYW1lKTtcbiAgfVxufVxuXG5jbGFzcyBFbXB0eVRhYmxlIGltcGxlbWVudHMgU3ltYm9sVGFibGUge1xuICBwdWJsaWMgcmVhZG9ubHkgc2l6ZTogbnVtYmVyID0gMDtcbiAgZ2V0KF9rZXk6IHN0cmluZyk6IFN5bWJvbHx1bmRlZmluZWQge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgaGFzKF9rZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YWx1ZXMoKTogU3ltYm9sW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBzdGF0aWMgaW5zdGFuY2UgPSBuZXcgRW1wdHlUYWJsZSgpO1xufVxuXG5mdW5jdGlvbiBpc1N5bWJvbFByaXZhdGUoczogdHMuU3ltYm9sKTogYm9vbGVhbiB7XG4gIHJldHVybiAhIXMudmFsdWVEZWNsYXJhdGlvbiAmJiBpc1ByaXZhdGUocy52YWx1ZURlY2xhcmF0aW9uKTtcbn1cblxuZnVuY3Rpb24gZ2V0VHNUeXBlRnJvbUJ1aWx0aW5UeXBlKGJ1aWx0aW5UeXBlOiBCdWlsdGluVHlwZSwgY3R4OiBUeXBlQ29udGV4dCk6IHRzLlR5cGUge1xuICBsZXQgc3ludGF4S2luZDogdHMuU3ludGF4S2luZDtcbiAgc3dpdGNoIChidWlsdGluVHlwZSkge1xuICAgIGNhc2UgQnVpbHRpblR5cGUuQW55OlxuICAgICAgc3ludGF4S2luZCA9IHRzLlN5bnRheEtpbmQuQW55S2V5d29yZDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQnVpbHRpblR5cGUuQm9vbGVhbjpcbiAgICAgIHN5bnRheEtpbmQgPSB0cy5TeW50YXhLaW5kLkJvb2xlYW5LZXl3b3JkO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCdWlsdGluVHlwZS5OdWxsOlxuICAgICAgc3ludGF4S2luZCA9IHRzLlN5bnRheEtpbmQuTnVsbEtleXdvcmQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJ1aWx0aW5UeXBlLk51bWJlcjpcbiAgICAgIHN5bnRheEtpbmQgPSB0cy5TeW50YXhLaW5kLk51bWJlcktleXdvcmQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJ1aWx0aW5UeXBlLlN0cmluZzpcbiAgICAgIHN5bnRheEtpbmQgPSB0cy5TeW50YXhLaW5kLlN0cmluZ0tleXdvcmQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJ1aWx0aW5UeXBlLlVuZGVmaW5lZDpcbiAgICAgIHN5bnRheEtpbmQgPSB0cy5TeW50YXhLaW5kLlVuZGVmaW5lZEtleXdvcmQ7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnRlcm5hbCBlcnJvciwgdW5oYW5kbGVkIGxpdGVyYWwga2luZCAke2J1aWx0aW5UeXBlfToke0J1aWx0aW5UeXBlW2J1aWx0aW5UeXBlXX1gKTtcbiAgfVxuICBjb25zdCBub2RlID0gdHMuY3JlYXRlTm9kZShzeW50YXhLaW5kKTtcbiAgbm9kZS5wYXJlbnQgPSBjdHgubm9kZTtcbiAgcmV0dXJuIGN0eC5jaGVja2VyLmdldFR5cGVBdExvY2F0aW9uKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBzcGFuQXQoc291cmNlRmlsZTogdHMuU291cmNlRmlsZSwgbGluZTogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IFNwYW58dW5kZWZpbmVkIHtcbiAgaWYgKGxpbmUgIT0gbnVsbCAmJiBjb2x1bW4gIT0gbnVsbCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdHMuZ2V0UG9zaXRpb25PZkxpbmVBbmRDaGFyYWN0ZXIoc291cmNlRmlsZSwgbGluZSwgY29sdW1uKTtcbiAgICBjb25zdCBmaW5kQ2hpbGQgPSBmdW5jdGlvbiBmaW5kQ2hpbGQobm9kZTogdHMuTm9kZSk6IHRzLk5vZGV8dW5kZWZpbmVkIHtcbiAgICAgIGlmIChub2RlLmtpbmQgPiB0cy5TeW50YXhLaW5kLkxhc3RUb2tlbiAmJiBub2RlLnBvcyA8PSBwb3NpdGlvbiAmJiBub2RlLmVuZCA+IHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGJldHRlck5vZGUgPSB0cy5mb3JFYWNoQ2hpbGQobm9kZSwgZmluZENoaWxkKTtcbiAgICAgICAgcmV0dXJuIGJldHRlck5vZGUgfHwgbm9kZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgbm9kZSA9IHRzLmZvckVhY2hDaGlsZChzb3VyY2VGaWxlLCBmaW5kQ2hpbGQpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICByZXR1cm4ge3N0YXJ0OiBub2RlLmdldFN0YXJ0KCksIGVuZDogbm9kZS5nZXRFbmQoKX07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluaXRpb25Gcm9tVHNTeW1ib2woc3ltYm9sOiB0cy5TeW1ib2wpOiBEZWZpbml0aW9uIHtcbiAgY29uc3QgZGVjbGFyYXRpb25zID0gc3ltYm9sLmRlY2xhcmF0aW9ucztcbiAgaWYgKGRlY2xhcmF0aW9ucykge1xuICAgIHJldHVybiBkZWNsYXJhdGlvbnMubWFwKGRlY2xhcmF0aW9uID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZUZpbGUgPSBkZWNsYXJhdGlvbi5nZXRTb3VyY2VGaWxlKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWxlTmFtZTogc291cmNlRmlsZS5maWxlTmFtZSxcbiAgICAgICAgc3Bhbjoge3N0YXJ0OiBkZWNsYXJhdGlvbi5nZXRTdGFydCgpLCBlbmQ6IGRlY2xhcmF0aW9uLmdldEVuZCgpfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJlbnREZWNsYXJhdGlvbk9mKG5vZGU6IHRzLk5vZGUpOiB0cy5Ob2RlfHVuZGVmaW5lZCB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5DbGFzc0RlY2xhcmF0aW9uOlxuICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLkludGVyZmFjZURlY2xhcmF0aW9uOlxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5Tb3VyY2VGaWxlOlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnQhO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5lck9mKHN5bWJvbDogdHMuU3ltYm9sLCBjb250ZXh0OiBUeXBlQ29udGV4dCk6IFN5bWJvbHx1bmRlZmluZWQge1xuICBpZiAoc3ltYm9sLmdldEZsYWdzKCkgJiB0cy5TeW1ib2xGbGFncy5DbGFzc01lbWJlciAmJiBzeW1ib2wuZGVjbGFyYXRpb25zKSB7XG4gICAgZm9yIChjb25zdCBkZWNsYXJhdGlvbiBvZiBzeW1ib2wuZGVjbGFyYXRpb25zKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBwYXJlbnREZWNsYXJhdGlvbk9mKGRlY2xhcmF0aW9uKTtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuY2hlY2tlci5nZXRUeXBlQXRMb2NhdGlvbihwYXJlbnQpO1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgIHJldHVybiBuZXcgVHlwZVdyYXBwZXIodHlwZSwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHlwZUtpbmRPZih0eXBlOiB0cy5UeXBlfHVuZGVmaW5lZCk6IEJ1aWx0aW5UeXBlIHtcbiAgaWYgKHR5cGUpIHtcbiAgICBpZiAodHlwZS5mbGFncyAmIHRzLlR5cGVGbGFncy5BbnkpIHtcbiAgICAgIHJldHVybiBCdWlsdGluVHlwZS5Bbnk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgdHlwZS5mbGFncyAmICh0cy5UeXBlRmxhZ3MuU3RyaW5nIHwgdHMuVHlwZUZsYWdzLlN0cmluZ0xpa2UgfCB0cy5UeXBlRmxhZ3MuU3RyaW5nTGl0ZXJhbCkpIHtcbiAgICAgIHJldHVybiBCdWlsdGluVHlwZS5TdHJpbmc7XG4gICAgfSBlbHNlIGlmICh0eXBlLmZsYWdzICYgKHRzLlR5cGVGbGFncy5OdW1iZXIgfCB0cy5UeXBlRmxhZ3MuTnVtYmVyTGlrZSkpIHtcbiAgICAgIHJldHVybiBCdWlsdGluVHlwZS5OdW1iZXI7XG4gICAgfSBlbHNlIGlmICh0eXBlLmZsYWdzICYgKHRzLlR5cGVGbGFncy5VbmRlZmluZWQpKSB7XG4gICAgICByZXR1cm4gQnVpbHRpblR5cGUuVW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAodHlwZS5mbGFncyAmICh0cy5UeXBlRmxhZ3MuTnVsbCkpIHtcbiAgICAgIHJldHVybiBCdWlsdGluVHlwZS5OdWxsO1xuICAgIH0gZWxzZSBpZiAodHlwZS5mbGFncyAmIHRzLlR5cGVGbGFncy5Vbmlvbikge1xuICAgICAgLy8gSWYgYWxsIHRoZSBjb25zdGl0dWVudCB0eXBlcyBvZiBhIHVuaW9uIGFyZSB0aGUgc2FtZSBraW5kLCBpdCBpcyBhbHNvIHRoYXQga2luZC5cbiAgICAgIGxldCBjYW5kaWRhdGU6IEJ1aWx0aW5UeXBlfG51bGwgPSBudWxsO1xuICAgICAgY29uc3QgdW5pb25UeXBlID0gdHlwZSBhcyB0cy5VbmlvblR5cGU7XG4gICAgICBpZiAodW5pb25UeXBlLnR5cGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY2FuZGlkYXRlID0gdHlwZUtpbmRPZih1bmlvblR5cGUudHlwZXNbMF0pO1xuICAgICAgICBmb3IgKGNvbnN0IHN1YlR5cGUgb2YgdW5pb25UeXBlLnR5cGVzKSB7XG4gICAgICAgICAgaWYgKGNhbmRpZGF0ZSAhPSB0eXBlS2luZE9mKHN1YlR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gQnVpbHRpblR5cGUuT3RoZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY2FuZGlkYXRlICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUuZmxhZ3MgJiB0cy5UeXBlRmxhZ3MuVHlwZVBhcmFtZXRlcikge1xuICAgICAgcmV0dXJuIEJ1aWx0aW5UeXBlLlVuYm91bmQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBCdWlsdGluVHlwZS5PdGhlcjtcbn1cblxuZnVuY3Rpb24gZ2V0RnJvbVN5bWJvbFRhYmxlKHN5bWJvbFRhYmxlOiB0cy5TeW1ib2xUYWJsZSwga2V5OiBzdHJpbmcpOiB0cy5TeW1ib2x8dW5kZWZpbmVkIHtcbiAgY29uc3QgdGFibGUgPSBzeW1ib2xUYWJsZSBhcyBhbnk7XG4gIGxldCBzeW1ib2w6IHRzLlN5bWJvbHx1bmRlZmluZWQ7XG5cbiAgaWYgKHR5cGVvZiB0YWJsZS5nZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBUUyAyLjIgdXNlcyBhIE1hcFxuICAgIHN5bWJvbCA9IHRhYmxlLmdldChrZXkpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRTIHByZS0yLjIgdXNlcyBhbiBvYmplY3RcbiAgICBzeW1ib2wgPSB0YWJsZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHN5bWJvbDtcbn1cbiJdfQ==