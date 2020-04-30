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
        define("@angular/language-service/src/expression_type", ["require", "exports", "tslib", "@angular/compiler", "@angular/language-service/src/diagnostic_messages", "@angular/language-service/src/symbols"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var diagnostic_messages_1 = require("@angular/language-service/src/diagnostic_messages");
    var symbols_1 = require("@angular/language-service/src/symbols");
    // AstType calculatetype of the ast given AST element.
    var AstType = /** @class */ (function () {
        function AstType(scope, query, context, source) {
            this.scope = scope;
            this.query = query;
            this.context = context;
            this.source = source;
            this.diagnostics = [];
        }
        AstType.prototype.getType = function (ast) {
            return ast.visit(this);
        };
        AstType.prototype.getDiagnostics = function (ast) {
            var type = ast.visit(this);
            if (this.context.inEvent && type.callable) {
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.callable_expression_expected_method_call));
            }
            return this.diagnostics;
        };
        AstType.prototype.visitBinary = function (ast) {
            var _this_1 = this;
            // Treat undefined and null as other.
            function normalize(kind, other) {
                switch (kind) {
                    case symbols_1.BuiltinType.Undefined:
                    case symbols_1.BuiltinType.Null:
                        return normalize(other, symbols_1.BuiltinType.Other);
                }
                return kind;
            }
            var getType = function (ast, operation) {
                var type = _this_1.getType(ast);
                if (type.nullable) {
                    switch (operation) {
                        case '&&':
                        case '||':
                        case '==':
                        case '!=':
                        case '===':
                        case '!==':
                            // Nullable allowed.
                            break;
                        default:
                            _this_1.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.expression_might_be_null));
                            break;
                    }
                    return _this_1.query.getNonNullableType(type);
                }
                return type;
            };
            var leftType = getType(ast.left, ast.operation);
            var rightType = getType(ast.right, ast.operation);
            var leftRawKind = this.query.getTypeKind(leftType);
            var rightRawKind = this.query.getTypeKind(rightType);
            var leftKind = normalize(leftRawKind, rightRawKind);
            var rightKind = normalize(rightRawKind, leftRawKind);
            // The following swtich implements operator typing similar to the
            // type production tables in the TypeScript specification.
            // https://github.com/Microsoft/TypeScript/blob/v1.8.10/doc/spec.md#4.19
            var operKind = leftKind << 8 | rightKind;
            switch (ast.operation) {
                case '*':
                case '/':
                case '%':
                case '-':
                case '<<':
                case '>>':
                case '>>>':
                case '&':
                case '^':
                case '|':
                    switch (operKind) {
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Number:
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.Number:
                            return this.query.getBuiltinType(symbols_1.BuiltinType.Number);
                        default:
                            var errorAst = ast.left;
                            switch (leftKind) {
                                case symbols_1.BuiltinType.Any:
                                case symbols_1.BuiltinType.Number:
                                    errorAst = ast.right;
                                    break;
                            }
                            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(errorAst.span, diagnostic_messages_1.Diagnostic.expected_a_number_type));
                            return this.anyType;
                    }
                case '+':
                    switch (operKind) {
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Boolean:
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Number:
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Other:
                        case symbols_1.BuiltinType.Boolean << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.Other << 8 | symbols_1.BuiltinType.Any:
                            return this.anyType;
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.String:
                        case symbols_1.BuiltinType.Boolean << 8 | symbols_1.BuiltinType.String:
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.String:
                        case symbols_1.BuiltinType.String << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.String << 8 | symbols_1.BuiltinType.Boolean:
                        case symbols_1.BuiltinType.String << 8 | symbols_1.BuiltinType.Number:
                        case symbols_1.BuiltinType.String << 8 | symbols_1.BuiltinType.String:
                        case symbols_1.BuiltinType.String << 8 | symbols_1.BuiltinType.Other:
                        case symbols_1.BuiltinType.Other << 8 | symbols_1.BuiltinType.String:
                            return this.query.getBuiltinType(symbols_1.BuiltinType.String);
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.Number:
                            return this.query.getBuiltinType(symbols_1.BuiltinType.Number);
                        case symbols_1.BuiltinType.Boolean << 8 | symbols_1.BuiltinType.Number:
                        case symbols_1.BuiltinType.Other << 8 | symbols_1.BuiltinType.Number:
                            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.left.span, diagnostic_messages_1.Diagnostic.expected_a_number_type));
                            return this.anyType;
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.Boolean:
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.Other:
                            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.right.span, diagnostic_messages_1.Diagnostic.expected_a_number_type));
                            return this.anyType;
                        default:
                            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.expected_a_string_or_number_type));
                            return this.anyType;
                    }
                case '>':
                case '<':
                case '<=':
                case '>=':
                case '==':
                case '!=':
                case '===':
                case '!==':
                    switch (operKind) {
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Boolean:
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Number:
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.String:
                        case symbols_1.BuiltinType.Any << 8 | symbols_1.BuiltinType.Other:
                        case symbols_1.BuiltinType.Boolean << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.Boolean << 8 | symbols_1.BuiltinType.Boolean:
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.Number << 8 | symbols_1.BuiltinType.Number:
                        case symbols_1.BuiltinType.String << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.String << 8 | symbols_1.BuiltinType.String:
                        case symbols_1.BuiltinType.Other << 8 | symbols_1.BuiltinType.Any:
                        case symbols_1.BuiltinType.Other << 8 | symbols_1.BuiltinType.Other:
                            return this.query.getBuiltinType(symbols_1.BuiltinType.Boolean);
                        default:
                            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.expected_operands_of_similar_type_or_any));
                            return this.anyType;
                    }
                case '&&':
                    return rightType;
                case '||':
                    return this.query.getTypeUnion(leftType, rightType);
            }
            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.unrecognized_operator, ast.operation));
            return this.anyType;
        };
        AstType.prototype.visitChain = function (ast) {
            var e_1, _a;
            try {
                // If we are producing diagnostics, visit the children
                for (var _b = tslib_1.__values(ast.expressions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var expr = _c.value;
                    expr.visit(this);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // The type of a chain is always undefined.
            return this.query.getBuiltinType(symbols_1.BuiltinType.Undefined);
        };
        AstType.prototype.visitConditional = function (ast) {
            // The type of a conditional is the union of the true and false conditions.
            ast.condition.visit(this);
            ast.trueExp.visit(this);
            ast.falseExp.visit(this);
            return this.query.getTypeUnion(this.getType(ast.trueExp), this.getType(ast.falseExp));
        };
        AstType.prototype.visitFunctionCall = function (ast) {
            var _this_1 = this;
            // The type of a function call is the return type of the selected signature.
            // The signature is selected based on the types of the arguments. Angular doesn't
            // support contextual typing of arguments so this is simpler than TypeScript's
            // version.
            var args = ast.args.map(function (arg) { return _this_1.getType(arg); });
            var target = this.getType(ast.target);
            if (!target || !target.callable) {
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.call_target_not_callable, this.sourceOf(ast.target), target.name));
                return this.anyType;
            }
            var signature = target.selectSignature(args);
            if (signature) {
                return signature.result;
            }
            // TODO: Consider a better error message here. See `typescript_symbols#selectSignature` for more
            // details.
            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.unable_to_resolve_compatible_call_signature));
            return this.anyType;
        };
        AstType.prototype.visitImplicitReceiver = function (_ast) {
            var _this = this;
            // Return a pseudo-symbol for the implicit receiver.
            // The members of the implicit receiver are what is defined by the
            // scope passed into this class.
            return {
                name: '$implicit',
                kind: 'component',
                language: 'ng-template',
                type: undefined,
                container: undefined,
                callable: false,
                nullable: false,
                public: true,
                definition: undefined,
                documentation: [],
                members: function () {
                    return _this.scope;
                },
                signatures: function () {
                    return [];
                },
                selectSignature: function (_types) {
                    return undefined;
                },
                indexed: function (_argument) {
                    return undefined;
                },
                typeArguments: function () {
                    return undefined;
                },
            };
        };
        AstType.prototype.visitInterpolation = function (ast) {
            var e_2, _a;
            try {
                // If we are producing diagnostics, visit the children.
                for (var _b = tslib_1.__values(ast.expressions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var expr = _c.value;
                    expr.visit(this);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return this.undefinedType;
        };
        AstType.prototype.visitKeyedRead = function (ast) {
            var targetType = this.getType(ast.obj);
            var keyType = this.getType(ast.key);
            var result = targetType.indexed(keyType, ast.key instanceof compiler_1.LiteralPrimitive ? ast.key.value : undefined);
            return result || this.anyType;
        };
        AstType.prototype.visitKeyedWrite = function (ast) {
            // The write of a type is the type of the value being written.
            return this.getType(ast.value);
        };
        AstType.prototype.visitLiteralArray = function (ast) {
            var _a;
            var _this_1 = this;
            // A type literal is an array type of the union of the elements
            return this.query.getArrayType((_a = this.query).getTypeUnion.apply(_a, tslib_1.__spread(ast.expressions.map(function (element) { return _this_1.getType(element); }))));
        };
        AstType.prototype.visitLiteralMap = function (ast) {
            var e_3, _a;
            try {
                // If we are producing diagnostics, visit the children
                for (var _b = tslib_1.__values(ast.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var value = _c.value;
                    value.visit(this);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            // TODO: Return a composite type.
            return this.anyType;
        };
        AstType.prototype.visitLiteralPrimitive = function (ast) {
            // The type of a literal primitive depends on the value of the literal.
            switch (ast.value) {
                case true:
                case false:
                    return this.query.getBuiltinType(symbols_1.BuiltinType.Boolean);
                case null:
                    return this.query.getBuiltinType(symbols_1.BuiltinType.Null);
                case undefined:
                    return this.query.getBuiltinType(symbols_1.BuiltinType.Undefined);
                default:
                    switch (typeof ast.value) {
                        case 'string':
                            return this.query.getBuiltinType(symbols_1.BuiltinType.String);
                        case 'number':
                            return this.query.getBuiltinType(symbols_1.BuiltinType.Number);
                        default:
                            this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.unrecognized_primitive, typeof ast.value));
                            return this.anyType;
                    }
            }
        };
        AstType.prototype.visitMethodCall = function (ast) {
            return this.resolveMethodCall(this.getType(ast.receiver), ast);
        };
        AstType.prototype.visitPipe = function (ast) {
            var _this_1 = this;
            // The type of a pipe node is the return type of the pipe's transform method. The table returned
            // by getPipes() is expected to contain symbols with the corresponding transform method type.
            var pipe = this.query.getPipes().get(ast.name);
            if (!pipe) {
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.no_pipe_found, ast.name));
                return this.anyType;
            }
            var expType = this.getType(ast.exp);
            var signature = pipe.selectSignature([expType].concat(ast.args.map(function (arg) { return _this_1.getType(arg); })));
            if (!signature) {
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.unable_to_resolve_signature, ast.name));
                return this.anyType;
            }
            return signature.result;
        };
        AstType.prototype.visitPrefixNot = function (ast) {
            // If we are producing diagnostics, visit the children
            ast.expression.visit(this);
            // The type of a prefix ! is always boolean.
            return this.query.getBuiltinType(symbols_1.BuiltinType.Boolean);
        };
        AstType.prototype.visitNonNullAssert = function (ast) {
            var expressionType = this.getType(ast.expression);
            return this.query.getNonNullableType(expressionType);
        };
        AstType.prototype.visitPropertyRead = function (ast) {
            return this.resolvePropertyRead(this.getType(ast.receiver), ast);
        };
        AstType.prototype.visitPropertyWrite = function (ast) {
            // The type of a write is the type of the value being written.
            return this.getType(ast.value);
        };
        AstType.prototype.visitQuote = function (_ast) {
            // The type of a quoted expression is any.
            return this.query.getBuiltinType(symbols_1.BuiltinType.Any);
        };
        AstType.prototype.visitSafeMethodCall = function (ast) {
            return this.resolveMethodCall(this.query.getNonNullableType(this.getType(ast.receiver)), ast);
        };
        AstType.prototype.visitSafePropertyRead = function (ast) {
            return this.resolvePropertyRead(this.query.getNonNullableType(this.getType(ast.receiver)), ast);
        };
        /**
         * Gets the source of an expession AST.
         * The AST's sourceSpan is relative to the start of the template source code, which is contained
         * at this.source.
         */
        AstType.prototype.sourceOf = function (ast) {
            return this.source.substring(ast.sourceSpan.start, ast.sourceSpan.end);
        };
        Object.defineProperty(AstType.prototype, "anyType", {
            get: function () {
                var result = this._anyType;
                if (!result) {
                    result = this._anyType = this.query.getBuiltinType(symbols_1.BuiltinType.Any);
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AstType.prototype, "undefinedType", {
            get: function () {
                var result = this._undefinedType;
                if (!result) {
                    result = this._undefinedType = this.query.getBuiltinType(symbols_1.BuiltinType.Undefined);
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        AstType.prototype.resolveMethodCall = function (receiverType, ast) {
            var _this_1 = this;
            if (this.isAny(receiverType)) {
                return this.anyType;
            }
            var methodType = this.resolvePropertyRead(receiverType, ast);
            if (!methodType) {
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.could_not_resolve_type, ast.name));
                return this.anyType;
            }
            if (this.isAny(methodType)) {
                return this.anyType;
            }
            if (!methodType.callable) {
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.identifier_not_callable, ast.name));
                return this.anyType;
            }
            var signature = methodType.selectSignature(ast.args.map(function (arg) { return _this_1.getType(arg); }));
            if (!signature) {
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.unable_to_resolve_signature, ast.name));
                return this.anyType;
            }
            return signature.result;
        };
        AstType.prototype.resolvePropertyRead = function (receiverType, ast) {
            if (this.isAny(receiverType)) {
                return this.anyType;
            }
            // The type of a property read is the seelcted member's type.
            var member = receiverType.members().get(ast.name);
            if (!member) {
                if (receiverType.name === '$implicit') {
                    this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.identifier_not_defined_in_app_context, ast.name));
                }
                else if (receiverType.nullable && ast.receiver instanceof compiler_1.PropertyRead) {
                    var receiver = ast.receiver.name;
                    this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.identifier_possibly_undefined, receiver, receiver + "?." + ast.name, receiver + "!." + ast.name));
                }
                else {
                    this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.identifier_not_defined_on_receiver, ast.name, receiverType.name));
                }
                return this.anyType;
            }
            if (!member.public) {
                var container = receiverType.name === '$implicit' ? 'the component' : "'" + receiverType.name + "'";
                this.diagnostics.push(diagnostic_messages_1.createDiagnostic(ast.span, diagnostic_messages_1.Diagnostic.identifier_is_private, ast.name, container));
            }
            return member.type;
        };
        AstType.prototype.isAny = function (symbol) {
            return !symbol || this.query.getTypeKind(symbol) === symbols_1.BuiltinType.Any ||
                (!!symbol.type && this.isAny(symbol.type));
        };
        return AstType;
    }());
    exports.AstType = AstType;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzc2lvbl90eXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbGFuZ3VhZ2Utc2VydmljZS9zcmMvZXhwcmVzc2lvbl90eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILDhDQUF5VDtJQUV6VCx5RkFBbUU7SUFDbkUsaUVBQW1GO0lBT25GLHNEQUFzRDtJQUN0RDtRQUdFLGlCQUNZLEtBQWtCLEVBQVUsS0FBa0IsRUFDOUMsT0FBcUMsRUFBVSxNQUFjO1lBRDdELFVBQUssR0FBTCxLQUFLLENBQWE7WUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFhO1lBQzlDLFlBQU8sR0FBUCxPQUFPLENBQThCO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUp4RCxnQkFBVyxHQUFvQixFQUFFLENBQUM7UUFJeUIsQ0FBQztRQUU3RSx5QkFBTyxHQUFQLFVBQVEsR0FBUTtZQUNkLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDO1FBRUQsZ0NBQWMsR0FBZCxVQUFlLEdBQVE7WUFDckIsSUFBTSxJQUFJLEdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNqQixzQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGdDQUFVLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO2FBQ3RGO1lBQ0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7UUFFRCw2QkFBVyxHQUFYLFVBQVksR0FBVztZQUF2QixtQkFrSkM7WUFqSkMscUNBQXFDO1lBQ3JDLFNBQVMsU0FBUyxDQUFDLElBQWlCLEVBQUUsS0FB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O2FBQ3hGO1lBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFFTyx1QkFBSyxHQUFiLFVBQWMsTUFBYztZQUMxQixPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLHFCQUFXLENBQUMsR0FBRztnQkFDaEUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDSCxjQUFDO0lBQUQsQ0FBQyxBQWxjRCxJQWtjQztJQWxjWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBU1QsIEFzdFZpc2l0b3IsIEJpbmFyeSwgQmluZGluZ1BpcGUsIENoYWluLCBDb25kaXRpb25hbCwgRnVuY3Rpb25DYWxsLCBJbXBsaWNpdFJlY2VpdmVyLCBJbnRlcnBvbGF0aW9uLCBLZXllZFJlYWQsIEtleWVkV3JpdGUsIExpdGVyYWxBcnJheSwgTGl0ZXJhbE1hcCwgTGl0ZXJhbFByaW1pdGl2ZSwgTWV0aG9kQ2FsbCwgTm9uTnVsbEFzc2VydCwgUHJlZml4Tm90LCBQcm9wZXJ0eVJlYWQsIFByb3BlcnR5V3JpdGUsIFF1b3RlLCBTYWZlTWV0aG9kQ2FsbCwgU2FmZVByb3BlcnR5UmVhZH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuXG5pbXBvcnQge2NyZWF0ZURpYWdub3N0aWMsIERpYWdub3N0aWN9IGZyb20gJy4vZGlhZ25vc3RpY19tZXNzYWdlcyc7XG5pbXBvcnQge0J1aWx0aW5UeXBlLCBTaWduYXR1cmUsIFN5bWJvbCwgU3ltYm9sUXVlcnksIFN5bWJvbFRhYmxlfSBmcm9tICcuL3N5bWJvbHMnO1xuaW1wb3J0ICogYXMgbmcgZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBFeHByZXNzaW9uRGlhZ25vc3RpY3NDb250ZXh0IHtcbiAgaW5FdmVudD86IGJvb2xlYW47XG59XG5cbi8vIEFzdFR5cGUgY2FsY3VsYXRldHlwZSBvZiB0aGUgYXN0IGdpdmVuIEFTVCBlbGVtZW50LlxuZXhwb3J0IGNsYXNzIEFzdFR5cGUgaW1wbGVtZW50cyBBc3RWaXNpdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSBkaWFnbm9zdGljczogbmcuRGlhZ25vc3RpY1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHNjb3BlOiBTeW1ib2xUYWJsZSwgcHJpdmF0ZSBxdWVyeTogU3ltYm9sUXVlcnksXG4gICAgICBwcml2YXRlIGNvbnRleHQ6IEV4cHJlc3Npb25EaWFnbm9zdGljc0NvbnRleHQsIHByaXZhdGUgc291cmNlOiBzdHJpbmcpIHt9XG5cbiAgZ2V0VHlwZShhc3Q6IEFTVCk6IFN5bWJvbCB7XG4gICAgcmV0dXJuIGFzdC52aXNpdCh0aGlzKTtcbiAgfVxuXG4gIGdldERpYWdub3N0aWNzKGFzdDogQVNUKTogbmcuRGlhZ25vc3RpY1tdIHtcbiAgICBjb25zdCB0eXBlOiBTeW1ib2wgPSBhc3QudmlzaXQodGhpcyk7XG4gICAgaWYgKHRoaXMuY29udGV4dC5pbkV2ZW50ICYmIHR5cGUuY2FsbGFibGUpIHtcbiAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgICBjcmVhdGVEaWFnbm9zdGljKGFzdC5zcGFuLCBEaWFnbm9zdGljLmNhbGxhYmxlX2V4cHJlc3Npb25fZXhwZWN0ZWRfbWV0aG9kX2NhbGwpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGlhZ25vc3RpY3M7XG4gIH1cblxuICB2aXNpdEJpbmFyeShhc3Q6IEJpbmFyeSk6IFN5bWJvbCB7XG4gICAgLy8gVHJlYXQgdW5kZWZpbmVkIGFuZCBudWxsIGFzIG90aGVyLlxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZShraW5kOiBCdWlsdGluVHlwZSwgb3RoZXI6IEJ1aWx0aW5UeXBlKTogQnVpbHRpblR5cGUge1xuICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgQnVpbHRpblR5cGUuVW5kZWZpbmVkOlxuICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLk51bGw6XG4gICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShvdGhlciwgQnVpbHRpblR5cGUuT3RoZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGtpbmQ7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VHlwZSA9IChhc3Q6IEFTVCwgb3BlcmF0aW9uOiBzdHJpbmcpOiBTeW1ib2wgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZShhc3QpO1xuICAgICAgaWYgKHR5cGUubnVsbGFibGUpIHtcbiAgICAgICAgc3dpdGNoIChvcGVyYXRpb24pIHtcbiAgICAgICAgICBjYXNlICcmJic6XG4gICAgICAgICAgY2FzZSAnfHwnOlxuICAgICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICBjYXNlICchPSc6XG4gICAgICAgICAgY2FzZSAnPT09JzpcbiAgICAgICAgICBjYXNlICchPT0nOlxuICAgICAgICAgICAgLy8gTnVsbGFibGUgYWxsb3dlZC5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLmRpYWdub3N0aWNzLnB1c2goY3JlYXRlRGlhZ25vc3RpYyhhc3Quc3BhbiwgRGlhZ25vc3RpYy5leHByZXNzaW9uX21pZ2h0X2JlX251bGwpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldE5vbk51bGxhYmxlVHlwZSh0eXBlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH07XG5cbiAgICBjb25zdCBsZWZ0VHlwZSA9IGdldFR5cGUoYXN0LmxlZnQsIGFzdC5vcGVyYXRpb24pO1xuICAgIGNvbnN0IHJpZ2h0VHlwZSA9IGdldFR5cGUoYXN0LnJpZ2h0LCBhc3Qub3BlcmF0aW9uKTtcbiAgICBjb25zdCBsZWZ0UmF3S2luZCA9IHRoaXMucXVlcnkuZ2V0VHlwZUtpbmQobGVmdFR5cGUpO1xuICAgIGNvbnN0IHJpZ2h0UmF3S2luZCA9IHRoaXMucXVlcnkuZ2V0VHlwZUtpbmQocmlnaHRUeXBlKTtcbiAgICBjb25zdCBsZWZ0S2luZCA9IG5vcm1hbGl6ZShsZWZ0UmF3S2luZCwgcmlnaHRSYXdLaW5kKTtcbiAgICBjb25zdCByaWdodEtpbmQgPSBub3JtYWxpemUocmlnaHRSYXdLaW5kLCBsZWZ0UmF3S2luZCk7XG5cbiAgICAvLyBUaGUgZm9sbG93aW5nIHN3dGljaCBpbXBsZW1lbnRzIG9wZXJhdG9yIHR5cGluZyBzaW1pbGFyIHRvIHRoZVxuICAgIC8vIHR5cGUgcHJvZHVjdGlvbiB0YWJsZXMgaW4gdGhlIFR5cGVTY3JpcHQgc3BlY2lmaWNhdGlvbi5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvYmxvYi92MS44LjEwL2RvYy9zcGVjLm1kIzQuMTlcbiAgICBjb25zdCBvcGVyS2luZCA9IGxlZnRLaW5kIDw8IDggfCByaWdodEtpbmQ7XG4gICAgc3dpdGNoIChhc3Qub3BlcmF0aW9uKSB7XG4gICAgICBjYXNlICcqJzpcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgY2FzZSAnJSc6XG4gICAgICBjYXNlICctJzpcbiAgICAgIGNhc2UgJzw8JzpcbiAgICAgIGNhc2UgJz4+JzpcbiAgICAgIGNhc2UgJz4+Pic6XG4gICAgICBjYXNlICcmJzpcbiAgICAgIGNhc2UgJ14nOlxuICAgICAgY2FzZSAnfCc6XG4gICAgICAgIHN3aXRjaCAob3BlcktpbmQpIHtcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLkFueSA8PCA4IHwgQnVpbHRpblR5cGUuQW55OlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuTnVtYmVyIDw8IDggfCBCdWlsdGluVHlwZS5Bbnk6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5BbnkgPDwgOCB8IEJ1aWx0aW5UeXBlLk51bWJlcjpcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLk51bWJlciA8PCA4IHwgQnVpbHRpblR5cGUuTnVtYmVyOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcnkuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuTnVtYmVyKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGV0IGVycm9yQXN0ID0gYXN0LmxlZnQ7XG4gICAgICAgICAgICBzd2l0Y2ggKGxlZnRLaW5kKSB7XG4gICAgICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuQW55OlxuICAgICAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLk51bWJlcjpcbiAgICAgICAgICAgICAgICBlcnJvckFzdCA9IGFzdC5yaWdodDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgICAgICAgICBjcmVhdGVEaWFnbm9zdGljKGVycm9yQXN0LnNwYW4sIERpYWdub3N0aWMuZXhwZWN0ZWRfYV9udW1iZXJfdHlwZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW55VHlwZTtcbiAgICAgICAgfVxuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIHN3aXRjaCAob3BlcktpbmQpIHtcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLkFueSA8PCA4IHwgQnVpbHRpblR5cGUuQW55OlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuQW55IDw8IDggfCBCdWlsdGluVHlwZS5Cb29sZWFuOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuQW55IDw8IDggfCBCdWlsdGluVHlwZS5OdW1iZXI6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5BbnkgPDwgOCB8IEJ1aWx0aW5UeXBlLk90aGVyOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuQm9vbGVhbiA8PCA4IHwgQnVpbHRpblR5cGUuQW55OlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuTnVtYmVyIDw8IDggfCBCdWlsdGluVHlwZS5Bbnk6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5PdGhlciA8PCA4IHwgQnVpbHRpblR5cGUuQW55OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW55VHlwZTtcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLkFueSA8PCA4IHwgQnVpbHRpblR5cGUuU3RyaW5nOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuQm9vbGVhbiA8PCA4IHwgQnVpbHRpblR5cGUuU3RyaW5nOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuTnVtYmVyIDw8IDggfCBCdWlsdGluVHlwZS5TdHJpbmc6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5TdHJpbmcgPDwgOCB8IEJ1aWx0aW5UeXBlLkFueTpcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLlN0cmluZyA8PCA4IHwgQnVpbHRpblR5cGUuQm9vbGVhbjpcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLlN0cmluZyA8PCA4IHwgQnVpbHRpblR5cGUuTnVtYmVyOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuU3RyaW5nIDw8IDggfCBCdWlsdGluVHlwZS5TdHJpbmc6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5TdHJpbmcgPDwgOCB8IEJ1aWx0aW5UeXBlLk90aGVyOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuT3RoZXIgPDwgOCB8IEJ1aWx0aW5UeXBlLlN0cmluZzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLlN0cmluZyk7XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5OdW1iZXIgPDwgOCB8IEJ1aWx0aW5UeXBlLk51bWJlcjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLk51bWJlcik7XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5Cb29sZWFuIDw8IDggfCBCdWlsdGluVHlwZS5OdW1iZXI6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5PdGhlciA8PCA4IHwgQnVpbHRpblR5cGUuTnVtYmVyOlxuICAgICAgICAgICAgdGhpcy5kaWFnbm9zdGljcy5wdXNoKFxuICAgICAgICAgICAgICAgIGNyZWF0ZURpYWdub3N0aWMoYXN0LmxlZnQuc3BhbiwgRGlhZ25vc3RpYy5leHBlY3RlZF9hX251bWJlcl90eXBlKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbnlUeXBlO1xuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuTnVtYmVyIDw8IDggfCBCdWlsdGluVHlwZS5Cb29sZWFuOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuTnVtYmVyIDw8IDggfCBCdWlsdGluVHlwZS5PdGhlcjpcbiAgICAgICAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgICAgICAgICBjcmVhdGVEaWFnbm9zdGljKGFzdC5yaWdodC5zcGFuLCBEaWFnbm9zdGljLmV4cGVjdGVkX2FfbnVtYmVyX3R5cGUpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFueVR5cGU7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgICAgICAgICBjcmVhdGVEaWFnbm9zdGljKGFzdC5zcGFuLCBEaWFnbm9zdGljLmV4cGVjdGVkX2Ffc3RyaW5nX29yX251bWJlcl90eXBlKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbnlUeXBlO1xuICAgICAgICB9XG4gICAgICBjYXNlICc+JzpcbiAgICAgIGNhc2UgJzwnOlxuICAgICAgY2FzZSAnPD0nOlxuICAgICAgY2FzZSAnPj0nOlxuICAgICAgY2FzZSAnPT0nOlxuICAgICAgY2FzZSAnIT0nOlxuICAgICAgY2FzZSAnPT09JzpcbiAgICAgIGNhc2UgJyE9PSc6XG4gICAgICAgIHN3aXRjaCAob3BlcktpbmQpIHtcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLkFueSA8PCA4IHwgQnVpbHRpblR5cGUuQW55OlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuQW55IDw8IDggfCBCdWlsdGluVHlwZS5Cb29sZWFuOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuQW55IDw8IDggfCBCdWlsdGluVHlwZS5OdW1iZXI6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5BbnkgPDwgOCB8IEJ1aWx0aW5UeXBlLlN0cmluZzpcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLkFueSA8PCA4IHwgQnVpbHRpblR5cGUuT3RoZXI6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5Cb29sZWFuIDw8IDggfCBCdWlsdGluVHlwZS5Bbnk6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5Cb29sZWFuIDw8IDggfCBCdWlsdGluVHlwZS5Cb29sZWFuOlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuTnVtYmVyIDw8IDggfCBCdWlsdGluVHlwZS5Bbnk6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5OdW1iZXIgPDwgOCB8IEJ1aWx0aW5UeXBlLk51bWJlcjpcbiAgICAgICAgICBjYXNlIEJ1aWx0aW5UeXBlLlN0cmluZyA8PCA4IHwgQnVpbHRpblR5cGUuQW55OlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuU3RyaW5nIDw8IDggfCBCdWlsdGluVHlwZS5TdHJpbmc6XG4gICAgICAgICAgY2FzZSBCdWlsdGluVHlwZS5PdGhlciA8PCA4IHwgQnVpbHRpblR5cGUuQW55OlxuICAgICAgICAgIGNhc2UgQnVpbHRpblR5cGUuT3RoZXIgPDwgOCB8IEJ1aWx0aW5UeXBlLk90aGVyOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcnkuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuQm9vbGVhbik7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgICAgICAgICBjcmVhdGVEaWFnbm9zdGljKGFzdC5zcGFuLCBEaWFnbm9zdGljLmV4cGVjdGVkX29wZXJhbmRzX29mX3NpbWlsYXJfdHlwZV9vcl9hbnkpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFueVR5cGU7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJyYmJzpcbiAgICAgICAgcmV0dXJuIHJpZ2h0VHlwZTtcbiAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnkuZ2V0VHlwZVVuaW9uKGxlZnRUeXBlLCByaWdodFR5cGUpO1xuICAgIH1cblxuICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgY3JlYXRlRGlhZ25vc3RpYyhhc3Quc3BhbiwgRGlhZ25vc3RpYy51bnJlY29nbml6ZWRfb3BlcmF0b3IsIGFzdC5vcGVyYXRpb24pKTtcbiAgICByZXR1cm4gdGhpcy5hbnlUeXBlO1xuICB9XG5cbiAgdmlzaXRDaGFpbihhc3Q6IENoYWluKSB7XG4gICAgLy8gSWYgd2UgYXJlIHByb2R1Y2luZyBkaWFnbm9zdGljcywgdmlzaXQgdGhlIGNoaWxkcmVuXG4gICAgZm9yIChjb25zdCBleHByIG9mIGFzdC5leHByZXNzaW9ucykge1xuICAgICAgZXhwci52aXNpdCh0aGlzKTtcbiAgICB9XG4gICAgLy8gVGhlIHR5cGUgb2YgYSBjaGFpbiBpcyBhbHdheXMgdW5kZWZpbmVkLlxuICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLlVuZGVmaW5lZCk7XG4gIH1cblxuICB2aXNpdENvbmRpdGlvbmFsKGFzdDogQ29uZGl0aW9uYWwpIHtcbiAgICAvLyBUaGUgdHlwZSBvZiBhIGNvbmRpdGlvbmFsIGlzIHRoZSB1bmlvbiBvZiB0aGUgdHJ1ZSBhbmQgZmFsc2UgY29uZGl0aW9ucy5cbiAgICBhc3QuY29uZGl0aW9uLnZpc2l0KHRoaXMpO1xuICAgIGFzdC50cnVlRXhwLnZpc2l0KHRoaXMpO1xuICAgIGFzdC5mYWxzZUV4cC52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5xdWVyeS5nZXRUeXBlVW5pb24odGhpcy5nZXRUeXBlKGFzdC50cnVlRXhwKSwgdGhpcy5nZXRUeXBlKGFzdC5mYWxzZUV4cCkpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkNhbGwoYXN0OiBGdW5jdGlvbkNhbGwpIHtcbiAgICAvLyBUaGUgdHlwZSBvZiBhIGZ1bmN0aW9uIGNhbGwgaXMgdGhlIHJldHVybiB0eXBlIG9mIHRoZSBzZWxlY3RlZCBzaWduYXR1cmUuXG4gICAgLy8gVGhlIHNpZ25hdHVyZSBpcyBzZWxlY3RlZCBiYXNlZCBvbiB0aGUgdHlwZXMgb2YgdGhlIGFyZ3VtZW50cy4gQW5ndWxhciBkb2Vzbid0XG4gICAgLy8gc3VwcG9ydCBjb250ZXh0dWFsIHR5cGluZyBvZiBhcmd1bWVudHMgc28gdGhpcyBpcyBzaW1wbGVyIHRoYW4gVHlwZVNjcmlwdCdzXG4gICAgLy8gdmVyc2lvbi5cbiAgICBjb25zdCBhcmdzID0gYXN0LmFyZ3MubWFwKGFyZyA9PiB0aGlzLmdldFR5cGUoYXJnKSk7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5nZXRUeXBlKGFzdC50YXJnZXQhKTtcbiAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LmNhbGxhYmxlKSB7XG4gICAgICB0aGlzLmRpYWdub3N0aWNzLnB1c2goY3JlYXRlRGlhZ25vc3RpYyhcbiAgICAgICAgICBhc3Quc3BhbiwgRGlhZ25vc3RpYy5jYWxsX3RhcmdldF9ub3RfY2FsbGFibGUsIHRoaXMuc291cmNlT2YoYXN0LnRhcmdldCEpLCB0YXJnZXQubmFtZSkpO1xuICAgICAgcmV0dXJuIHRoaXMuYW55VHlwZTtcbiAgICB9XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gdGFyZ2V0LnNlbGVjdFNpZ25hdHVyZShhcmdzKTtcbiAgICBpZiAoc2lnbmF0dXJlKSB7XG4gICAgICByZXR1cm4gc2lnbmF0dXJlLnJlc3VsdDtcbiAgICB9XG4gICAgLy8gVE9ETzogQ29uc2lkZXIgYSBiZXR0ZXIgZXJyb3IgbWVzc2FnZSBoZXJlLiBTZWUgYHR5cGVzY3JpcHRfc3ltYm9scyNzZWxlY3RTaWduYXR1cmVgIGZvciBtb3JlXG4gICAgLy8gZGV0YWlscy5cbiAgICB0aGlzLmRpYWdub3N0aWNzLnB1c2goXG4gICAgICAgIGNyZWF0ZURpYWdub3N0aWMoYXN0LnNwYW4sIERpYWdub3N0aWMudW5hYmxlX3RvX3Jlc29sdmVfY29tcGF0aWJsZV9jYWxsX3NpZ25hdHVyZSkpO1xuICAgIHJldHVybiB0aGlzLmFueVR5cGU7XG4gIH1cblxuICB2aXNpdEltcGxpY2l0UmVjZWl2ZXIoX2FzdDogSW1wbGljaXRSZWNlaXZlcik6IFN5bWJvbCB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIC8vIFJldHVybiBhIHBzZXVkby1zeW1ib2wgZm9yIHRoZSBpbXBsaWNpdCByZWNlaXZlci5cbiAgICAvLyBUaGUgbWVtYmVycyBvZiB0aGUgaW1wbGljaXQgcmVjZWl2ZXIgYXJlIHdoYXQgaXMgZGVmaW5lZCBieSB0aGVcbiAgICAvLyBzY29wZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzLlxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAnJGltcGxpY2l0JyxcbiAgICAgIGtpbmQ6ICdjb21wb25lbnQnLFxuICAgICAgbGFuZ3VhZ2U6ICduZy10ZW1wbGF0ZScsXG4gICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICBjb250YWluZXI6IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxhYmxlOiBmYWxzZSxcbiAgICAgIG51bGxhYmxlOiBmYWxzZSxcbiAgICAgIHB1YmxpYzogdHJ1ZSxcbiAgICAgIGRlZmluaXRpb246IHVuZGVmaW5lZCxcbiAgICAgIGRvY3VtZW50YXRpb246IFtdLFxuICAgICAgbWVtYmVycygpOiBTeW1ib2xUYWJsZSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zY29wZTtcbiAgICAgIH0sXG4gICAgICBzaWduYXR1cmVzKCk6IFNpZ25hdHVyZVtdIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfSxcbiAgICAgIHNlbGVjdFNpZ25hdHVyZShfdHlwZXMpOiBTaWduYXR1cmUgfFxuICAgICAgICAgIHVuZGVmaW5lZCB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH0sXG4gICAgICBpbmRleGVkKF9hcmd1bWVudCk6IFN5bWJvbCB8XG4gICAgICAgICAgdW5kZWZpbmVkIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfSxcbiAgICAgIHR5cGVBcmd1bWVudHMoKTogU3ltYm9sW10gfFxuICAgICAgICAgIHVuZGVmaW5lZCB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHZpc2l0SW50ZXJwb2xhdGlvbihhc3Q6IEludGVycG9sYXRpb24pOiBTeW1ib2wge1xuICAgIC8vIElmIHdlIGFyZSBwcm9kdWNpbmcgZGlhZ25vc3RpY3MsIHZpc2l0IHRoZSBjaGlsZHJlbi5cbiAgICBmb3IgKGNvbnN0IGV4cHIgb2YgYXN0LmV4cHJlc3Npb25zKSB7XG4gICAgICBleHByLnZpc2l0KHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy51bmRlZmluZWRUeXBlO1xuICB9XG5cbiAgdmlzaXRLZXllZFJlYWQoYXN0OiBLZXllZFJlYWQpOiBTeW1ib2wge1xuICAgIGNvbnN0IHRhcmdldFR5cGUgPSB0aGlzLmdldFR5cGUoYXN0Lm9iaik7XG4gICAgY29uc3Qga2V5VHlwZSA9IHRoaXMuZ2V0VHlwZShhc3Qua2V5KTtcbiAgICBjb25zdCByZXN1bHQgPSB0YXJnZXRUeXBlLmluZGV4ZWQoXG4gICAgICAgIGtleVR5cGUsIGFzdC5rZXkgaW5zdGFuY2VvZiBMaXRlcmFsUHJpbWl0aXZlID8gYXN0LmtleS52YWx1ZSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIHJlc3VsdCB8fCB0aGlzLmFueVR5cGU7XG4gIH1cblxuICB2aXNpdEtleWVkV3JpdGUoYXN0OiBLZXllZFdyaXRlKTogU3ltYm9sIHtcbiAgICAvLyBUaGUgd3JpdGUgb2YgYSB0eXBlIGlzIHRoZSB0eXBlIG9mIHRoZSB2YWx1ZSBiZWluZyB3cml0dGVuLlxuICAgIHJldHVybiB0aGlzLmdldFR5cGUoYXN0LnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0TGl0ZXJhbEFycmF5KGFzdDogTGl0ZXJhbEFycmF5KTogU3ltYm9sIHtcbiAgICAvLyBBIHR5cGUgbGl0ZXJhbCBpcyBhbiBhcnJheSB0eXBlIG9mIHRoZSB1bmlvbiBvZiB0aGUgZWxlbWVudHNcbiAgICByZXR1cm4gdGhpcy5xdWVyeS5nZXRBcnJheVR5cGUoXG4gICAgICAgIHRoaXMucXVlcnkuZ2V0VHlwZVVuaW9uKC4uLmFzdC5leHByZXNzaW9ucy5tYXAoZWxlbWVudCA9PiB0aGlzLmdldFR5cGUoZWxlbWVudCkpKSk7XG4gIH1cblxuICB2aXNpdExpdGVyYWxNYXAoYXN0OiBMaXRlcmFsTWFwKTogU3ltYm9sIHtcbiAgICAvLyBJZiB3ZSBhcmUgcHJvZHVjaW5nIGRpYWdub3N0aWNzLCB2aXNpdCB0aGUgY2hpbGRyZW5cbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGFzdC52YWx1ZXMpIHtcbiAgICAgIHZhbHVlLnZpc2l0KHRoaXMpO1xuICAgIH1cbiAgICAvLyBUT0RPOiBSZXR1cm4gYSBjb21wb3NpdGUgdHlwZS5cbiAgICByZXR1cm4gdGhpcy5hbnlUeXBlO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsUHJpbWl0aXZlKGFzdDogTGl0ZXJhbFByaW1pdGl2ZSkge1xuICAgIC8vIFRoZSB0eXBlIG9mIGEgbGl0ZXJhbCBwcmltaXRpdmUgZGVwZW5kcyBvbiB0aGUgdmFsdWUgb2YgdGhlIGxpdGVyYWwuXG4gICAgc3dpdGNoIChhc3QudmFsdWUpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLkJvb2xlYW4pO1xuICAgICAgY2FzZSBudWxsOlxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeS5nZXRCdWlsdGluVHlwZShCdWlsdGluVHlwZS5OdWxsKTtcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeS5nZXRCdWlsdGluVHlwZShCdWlsdGluVHlwZS5VbmRlZmluZWQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgYXN0LnZhbHVlKSB7XG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLlN0cmluZyk7XG4gICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldEJ1aWx0aW5UeXBlKEJ1aWx0aW5UeXBlLk51bWJlcik7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgICAgICAgICBjcmVhdGVEaWFnbm9zdGljKGFzdC5zcGFuLCBEaWFnbm9zdGljLnVucmVjb2duaXplZF9wcmltaXRpdmUsIHR5cGVvZiBhc3QudmFsdWUpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFueVR5cGU7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2aXNpdE1ldGhvZENhbGwoYXN0OiBNZXRob2RDYWxsKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZU1ldGhvZENhbGwodGhpcy5nZXRUeXBlKGFzdC5yZWNlaXZlciksIGFzdCk7XG4gIH1cblxuICB2aXNpdFBpcGUoYXN0OiBCaW5kaW5nUGlwZSkge1xuICAgIC8vIFRoZSB0eXBlIG9mIGEgcGlwZSBub2RlIGlzIHRoZSByZXR1cm4gdHlwZSBvZiB0aGUgcGlwZSdzIHRyYW5zZm9ybSBtZXRob2QuIFRoZSB0YWJsZSByZXR1cm5lZFxuICAgIC8vIGJ5IGdldFBpcGVzKCkgaXMgZXhwZWN0ZWQgdG8gY29udGFpbiBzeW1ib2xzIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgdHJhbnNmb3JtIG1ldGhvZCB0eXBlLlxuICAgIGNvbnN0IHBpcGUgPSB0aGlzLnF1ZXJ5LmdldFBpcGVzKCkuZ2V0KGFzdC5uYW1lKTtcbiAgICBpZiAoIXBpcGUpIHtcbiAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChjcmVhdGVEaWFnbm9zdGljKGFzdC5zcGFuLCBEaWFnbm9zdGljLm5vX3BpcGVfZm91bmQsIGFzdC5uYW1lKSk7XG4gICAgICByZXR1cm4gdGhpcy5hbnlUeXBlO1xuICAgIH1cbiAgICBjb25zdCBleHBUeXBlID0gdGhpcy5nZXRUeXBlKGFzdC5leHApO1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9XG4gICAgICAgIHBpcGUuc2VsZWN0U2lnbmF0dXJlKFtleHBUeXBlXS5jb25jYXQoYXN0LmFyZ3MubWFwKGFyZyA9PiB0aGlzLmdldFR5cGUoYXJnKSkpKTtcbiAgICBpZiAoIXNpZ25hdHVyZSkge1xuICAgICAgdGhpcy5kaWFnbm9zdGljcy5wdXNoKFxuICAgICAgICAgIGNyZWF0ZURpYWdub3N0aWMoYXN0LnNwYW4sIERpYWdub3N0aWMudW5hYmxlX3RvX3Jlc29sdmVfc2lnbmF0dXJlLCBhc3QubmFtZSkpO1xuICAgICAgcmV0dXJuIHRoaXMuYW55VHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIHNpZ25hdHVyZS5yZXN1bHQ7XG4gIH1cblxuICB2aXNpdFByZWZpeE5vdChhc3Q6IFByZWZpeE5vdCkge1xuICAgIC8vIElmIHdlIGFyZSBwcm9kdWNpbmcgZGlhZ25vc3RpY3MsIHZpc2l0IHRoZSBjaGlsZHJlblxuICAgIGFzdC5leHByZXNzaW9uLnZpc2l0KHRoaXMpO1xuICAgIC8vIFRoZSB0eXBlIG9mIGEgcHJlZml4ICEgaXMgYWx3YXlzIGJvb2xlYW4uXG4gICAgcmV0dXJuIHRoaXMucXVlcnkuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuQm9vbGVhbik7XG4gIH1cblxuICB2aXNpdE5vbk51bGxBc3NlcnQoYXN0OiBOb25OdWxsQXNzZXJ0KSB7XG4gICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSB0aGlzLmdldFR5cGUoYXN0LmV4cHJlc3Npb24pO1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5LmdldE5vbk51bGxhYmxlVHlwZShleHByZXNzaW9uVHlwZSk7XG4gIH1cblxuICB2aXNpdFByb3BlcnR5UmVhZChhc3Q6IFByb3BlcnR5UmVhZCkge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVQcm9wZXJ0eVJlYWQodGhpcy5nZXRUeXBlKGFzdC5yZWNlaXZlciksIGFzdCk7XG4gIH1cblxuICB2aXNpdFByb3BlcnR5V3JpdGUoYXN0OiBQcm9wZXJ0eVdyaXRlKSB7XG4gICAgLy8gVGhlIHR5cGUgb2YgYSB3cml0ZSBpcyB0aGUgdHlwZSBvZiB0aGUgdmFsdWUgYmVpbmcgd3JpdHRlbi5cbiAgICByZXR1cm4gdGhpcy5nZXRUeXBlKGFzdC52YWx1ZSk7XG4gIH1cblxuICB2aXNpdFF1b3RlKF9hc3Q6IFF1b3RlKSB7XG4gICAgLy8gVGhlIHR5cGUgb2YgYSBxdW90ZWQgZXhwcmVzc2lvbiBpcyBhbnkuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuQW55KTtcbiAgfVxuXG4gIHZpc2l0U2FmZU1ldGhvZENhbGwoYXN0OiBTYWZlTWV0aG9kQ2FsbCkge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVNZXRob2RDYWxsKHRoaXMucXVlcnkuZ2V0Tm9uTnVsbGFibGVUeXBlKHRoaXMuZ2V0VHlwZShhc3QucmVjZWl2ZXIpKSwgYXN0KTtcbiAgfVxuXG4gIHZpc2l0U2FmZVByb3BlcnR5UmVhZChhc3Q6IFNhZmVQcm9wZXJ0eVJlYWQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlUHJvcGVydHlSZWFkKHRoaXMucXVlcnkuZ2V0Tm9uTnVsbGFibGVUeXBlKHRoaXMuZ2V0VHlwZShhc3QucmVjZWl2ZXIpKSwgYXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzb3VyY2Ugb2YgYW4gZXhwZXNzaW9uIEFTVC5cbiAgICogVGhlIEFTVCdzIHNvdXJjZVNwYW4gaXMgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IG9mIHRoZSB0ZW1wbGF0ZSBzb3VyY2UgY29kZSwgd2hpY2ggaXMgY29udGFpbmVkXG4gICAqIGF0IHRoaXMuc291cmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBzb3VyY2VPZihhc3Q6IEFTVCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnN0cmluZyhhc3Quc291cmNlU3Bhbi5zdGFydCwgYXN0LnNvdXJjZVNwYW4uZW5kKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FueVR5cGU6IFN5bWJvbHx1bmRlZmluZWQ7XG4gIHByaXZhdGUgZ2V0IGFueVR5cGUoKTogU3ltYm9sIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5fYW55VHlwZTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5fYW55VHlwZSA9IHRoaXMucXVlcnkuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuQW55KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgX3VuZGVmaW5lZFR5cGU6IFN5bWJvbHx1bmRlZmluZWQ7XG4gIHByaXZhdGUgZ2V0IHVuZGVmaW5lZFR5cGUoKTogU3ltYm9sIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5fdW5kZWZpbmVkVHlwZTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5fdW5kZWZpbmVkVHlwZSA9IHRoaXMucXVlcnkuZ2V0QnVpbHRpblR5cGUoQnVpbHRpblR5cGUuVW5kZWZpbmVkKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZU1ldGhvZENhbGwocmVjZWl2ZXJUeXBlOiBTeW1ib2wsIGFzdDogU2FmZU1ldGhvZENhbGx8TWV0aG9kQ2FsbCkge1xuICAgIGlmICh0aGlzLmlzQW55KHJlY2VpdmVyVHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFueVR5cGU7XG4gICAgfVxuICAgIGNvbnN0IG1ldGhvZFR5cGUgPSB0aGlzLnJlc29sdmVQcm9wZXJ0eVJlYWQocmVjZWl2ZXJUeXBlLCBhc3QpO1xuICAgIGlmICghbWV0aG9kVHlwZSkge1xuICAgICAgdGhpcy5kaWFnbm9zdGljcy5wdXNoKFxuICAgICAgICAgIGNyZWF0ZURpYWdub3N0aWMoYXN0LnNwYW4sIERpYWdub3N0aWMuY291bGRfbm90X3Jlc29sdmVfdHlwZSwgYXN0Lm5hbWUpKTtcbiAgICAgIHJldHVybiB0aGlzLmFueVR5cGU7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQW55KG1ldGhvZFR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbnlUeXBlO1xuICAgIH1cbiAgICBpZiAoIW1ldGhvZFR5cGUuY2FsbGFibGUpIHtcbiAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgICBjcmVhdGVEaWFnbm9zdGljKGFzdC5zcGFuLCBEaWFnbm9zdGljLmlkZW50aWZpZXJfbm90X2NhbGxhYmxlLCBhc3QubmFtZSkpO1xuICAgICAgcmV0dXJuIHRoaXMuYW55VHlwZTtcbiAgICB9XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gbWV0aG9kVHlwZS5zZWxlY3RTaWduYXR1cmUoYXN0LmFyZ3MubWFwKGFyZyA9PiB0aGlzLmdldFR5cGUoYXJnKSkpO1xuICAgIGlmICghc2lnbmF0dXJlKSB7XG4gICAgICB0aGlzLmRpYWdub3N0aWNzLnB1c2goXG4gICAgICAgICAgY3JlYXRlRGlhZ25vc3RpYyhhc3Quc3BhbiwgRGlhZ25vc3RpYy51bmFibGVfdG9fcmVzb2x2ZV9zaWduYXR1cmUsIGFzdC5uYW1lKSk7XG4gICAgICByZXR1cm4gdGhpcy5hbnlUeXBlO1xuICAgIH1cbiAgICByZXR1cm4gc2lnbmF0dXJlLnJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZVByb3BlcnR5UmVhZChyZWNlaXZlclR5cGU6IFN5bWJvbCwgYXN0OiBTYWZlUHJvcGVydHlSZWFkfFByb3BlcnR5UmVhZCkge1xuICAgIGlmICh0aGlzLmlzQW55KHJlY2VpdmVyVHlwZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFueVR5cGU7XG4gICAgfVxuICAgIC8vIFRoZSB0eXBlIG9mIGEgcHJvcGVydHkgcmVhZCBpcyB0aGUgc2VlbGN0ZWQgbWVtYmVyJ3MgdHlwZS5cbiAgICBjb25zdCBtZW1iZXIgPSByZWNlaXZlclR5cGUubWVtYmVycygpLmdldChhc3QubmFtZSk7XG4gICAgaWYgKCFtZW1iZXIpIHtcbiAgICAgIGlmIChyZWNlaXZlclR5cGUubmFtZSA9PT0gJyRpbXBsaWNpdCcpIHtcbiAgICAgICAgdGhpcy5kaWFnbm9zdGljcy5wdXNoKFxuICAgICAgICAgICAgY3JlYXRlRGlhZ25vc3RpYyhhc3Quc3BhbiwgRGlhZ25vc3RpYy5pZGVudGlmaWVyX25vdF9kZWZpbmVkX2luX2FwcF9jb250ZXh0LCBhc3QubmFtZSkpO1xuICAgICAgfSBlbHNlIGlmIChyZWNlaXZlclR5cGUubnVsbGFibGUgJiYgYXN0LnJlY2VpdmVyIGluc3RhbmNlb2YgUHJvcGVydHlSZWFkKSB7XG4gICAgICAgIGNvbnN0IHJlY2VpdmVyID0gYXN0LnJlY2VpdmVyLm5hbWU7XG4gICAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChjcmVhdGVEaWFnbm9zdGljKFxuICAgICAgICAgICAgYXN0LnNwYW4sIERpYWdub3N0aWMuaWRlbnRpZmllcl9wb3NzaWJseV91bmRlZmluZWQsIHJlY2VpdmVyLFxuICAgICAgICAgICAgYCR7cmVjZWl2ZXJ9Py4ke2FzdC5uYW1lfWAsIGAke3JlY2VpdmVyfSEuJHthc3QubmFtZX1gKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpYWdub3N0aWNzLnB1c2goY3JlYXRlRGlhZ25vc3RpYyhcbiAgICAgICAgICAgIGFzdC5zcGFuLCBEaWFnbm9zdGljLmlkZW50aWZpZXJfbm90X2RlZmluZWRfb25fcmVjZWl2ZXIsIGFzdC5uYW1lLCByZWNlaXZlclR5cGUubmFtZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYW55VHlwZTtcbiAgICB9XG4gICAgaWYgKCFtZW1iZXIucHVibGljKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPVxuICAgICAgICAgIHJlY2VpdmVyVHlwZS5uYW1lID09PSAnJGltcGxpY2l0JyA/ICd0aGUgY29tcG9uZW50JyA6IGAnJHtyZWNlaXZlclR5cGUubmFtZX0nYDtcbiAgICAgIHRoaXMuZGlhZ25vc3RpY3MucHVzaChcbiAgICAgICAgICBjcmVhdGVEaWFnbm9zdGljKGFzdC5zcGFuLCBEaWFnbm9zdGljLmlkZW50aWZpZXJfaXNfcHJpdmF0ZSwgYXN0Lm5hbWUsIGNvbnRhaW5lcikpO1xuICAgIH1cbiAgICByZXR1cm4gbWVtYmVyLnR5cGU7XG4gIH1cblxuICBwcml2YXRlIGlzQW55KHN5bWJvbDogU3ltYm9sKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFzeW1ib2wgfHwgdGhpcy5xdWVyeS5nZXRUeXBlS2luZChzeW1ib2wpID09PSBCdWlsdGluVHlwZS5BbnkgfHxcbiAgICAgICAgKCEhc3ltYm9sLnR5cGUgJiYgdGhpcy5pc0FueShzeW1ib2wudHlwZSkpO1xuICB9XG59XG4iXX0=