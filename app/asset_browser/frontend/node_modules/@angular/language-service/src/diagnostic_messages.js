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
        define("@angular/language-service/src/diagnostic_messages", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts = require("typescript");
    exports.Diagnostic = {
        directive_not_in_module: {
            message: "%1 '%2' is not included in a module and will not be available inside a template. Consider adding it to a NgModule declaration.",
            kind: 'Suggestion',
        },
        missing_template_and_templateurl: {
            message: "Component '%1' must have a template or templateUrl",
            kind: 'Error',
        },
        both_template_and_templateurl: {
            message: "Component '%1' must not have both template and templateUrl",
            kind: 'Error',
        },
        invalid_templateurl: {
            message: "URL does not point to a valid file",
            kind: 'Error',
        },
        template_context_missing_member: {
            message: "The template context of '%1' does not define %2.\n" +
                "If the context type is a base type or 'any', consider refining it to a more specific type.",
            kind: 'Suggestion',
        },
        callable_expression_expected_method_call: {
            message: 'Unexpected callable expression. Expected a method call',
            kind: 'Warning',
        },
        call_target_not_callable: {
            message: "Call target '%1' has non-callable type '%2'.",
            kind: 'Error',
        },
        expression_might_be_null: {
            message: 'The expression might be null',
            kind: 'Error',
        },
        expected_a_number_type: {
            message: 'Expected a number type',
            kind: 'Error',
        },
        expected_a_string_or_number_type: {
            message: 'Expected operands to be a string or number type',
            kind: 'Error',
        },
        expected_operands_of_similar_type_or_any: {
            message: 'Expected operands to be of similar type or any',
            kind: 'Error',
        },
        unrecognized_operator: {
            message: 'Unrecognized operator %1',
            kind: 'Error',
        },
        unrecognized_primitive: {
            message: 'Unrecognized primitive %1',
            kind: 'Error',
        },
        no_pipe_found: {
            message: 'No pipe of name %1 found',
            kind: 'Error',
        },
        // TODO: Consider a better error message here.
        unable_to_resolve_compatible_call_signature: {
            message: 'Unable to resolve compatible call signature',
            kind: 'Error',
        },
        unable_to_resolve_signature: {
            message: 'Unable to resolve signature for call of %1',
            kind: 'Error',
        },
        could_not_resolve_type: {
            message: "Could not resolve the type of '%1'",
            kind: 'Error',
        },
        identifier_not_callable: {
            message: "'%1' is not callable",
            kind: 'Error',
        },
        identifier_possibly_undefined: {
            message: "'%1' is possibly undefined. Consider using the safe navigation operator (%2) or non-null assertion operator (%3).",
            kind: 'Suggestion',
        },
        identifier_not_defined_in_app_context: {
            message: "Identifier '%1' is not defined. The component declaration, template variable declarations, and element references do not contain such a member",
            kind: 'Error',
        },
        identifier_not_defined_on_receiver: {
            message: "Identifier '%1' is not defined. '%2' does not contain such a member",
            kind: 'Error',
        },
        identifier_is_private: {
            message: "Identifier '%1' refers to a private member of %2",
            kind: 'Warning',
        },
    };
    /**
     * Creates a language service diagnostic.
     * @param span location the diagnostic for
     * @param dm diagnostic message
     * @param formatArgs run-time arguments to format the diagnostic message with (see the messages in
     *        the `Diagnostic` object for an example).
     * @returns a created diagnostic
     */
    function createDiagnostic(span, dm) {
        var formatArgs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            formatArgs[_i - 2] = arguments[_i];
        }
        // Formats "%1 %2" with formatArgs ['a', 'b'] as "a b"
        var formattedMessage = dm.message.replace(/%(\d+)/g, function (_, index) { return formatArgs[+index - 1]; });
        return {
            kind: ts.DiagnosticCategory[dm.kind],
            message: formattedMessage,
            span: span,
        };
    }
    exports.createDiagnostic = createDiagnostic;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc3RpY19tZXNzYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xhbmd1YWdlLXNlcnZpY2Uvc3JjL2RpYWdub3N0aWNfbWVzc2FnZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCwrQkFBaUM7SUFrQnBCLFFBQUEsVUFBVSxHQUE4QztRQUNuRSx1QkFBdUIsRUFBRTtZQUN2QixPQUFPLEVBQ0gsZ0lBQWdJO1lBQ3BJLElBQUksRUFBRSxZQUFZO1NBQ25CO1FBRUQsZ0NBQWdDLEVBQUU7WUFDaEMsT0FBTyxFQUFFLG9EQUFvRDtZQUM3RCxJQUFJLEVBQUUsT0FBTztTQUNkO1FBRUQsNkJBQTZCLEVBQUU7WUFDN0IsT0FBTyxFQUFFLDREQUE0RDtZQUNyRSxJQUFJLEVBQUUsT0FBTztTQUNkO1FBRUQsbUJBQW1CLEVBQUU7WUFDbkIsT0FBTyxFQUFFLG9DQUFvQztZQUM3QyxJQUFJLEVBQUUsT0FBTztTQUNkO1FBRUQsK0JBQStCLEVBQUU7WUFDL0IsT0FBTyxFQUFFLG9EQUFvRDtnQkFDekQsNEZBQTRGO1lBQ2hHLElBQUksRUFBRSxZQUFZO1NBQ25CO1FBRUQsd0NBQXdDLEVBQUU7WUFDeEMsT0FBTyxFQUFFLHdEQUF3RDtZQUNqRSxJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUVELHdCQUF3QixFQUFFO1lBQ3hCLE9BQU8sRUFBRSw4Q0FBOEM7WUFDdkQsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUVELHdCQUF3QixFQUFFO1lBQ3hCLE9BQU8sRUFBRSw4QkFBOEI7WUFDdkMsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUVELHNCQUFzQixFQUFFO1lBQ3RCLE9BQU8sRUFBRSx3QkFBd0I7WUFDakMsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUVELGdDQUFnQyxFQUFFO1lBQ2hDLE9BQU8sRUFBRSxpREFBaUQ7WUFDMUQsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUVELHdDQUF3QyxFQUFFO1lBQ3hDLE9BQU8sRUFBRSxnREFBZ0Q7WUFDekQsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUVELHFCQUFxQixFQUFFO1lBQ3JCLE9BQU8sRUFBRSwwQkFBMEI7WUFDbkMsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUVELHNCQUFzQixFQUFFO1lBQ3RCLE9BQU8sRUFBRSwyQkFBMkI7WUFDcEMsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUVELGFBQWEsRUFBRTtZQUNiLE9BQU8sRUFBRSwwQkFBMEI7WUFDbkMsSUFBSSxFQUFFLE9BQU87U0FDZDtRQUVELDhDQUE4QztRQUM5QywyQ0FBMkMsRUFBRTtZQUMzQyxPQUFPLEVBQUUsNkNBQTZDO1lBQ3RELElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFFRCwyQkFBMkIsRUFBRTtZQUMzQixPQUFPLEVBQUUsNENBQTRDO1lBQ3JELElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFFRCxzQkFBc0IsRUFBRTtZQUN0QixPQUFPLEVBQUUsb0NBQW9DO1lBQzdDLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFFRCx1QkFBdUIsRUFBRTtZQUN2QixPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLElBQUksRUFBRSxPQUFPO1NBQ2Q7UUFFRCw2QkFBNkIsRUFBRTtZQUM3QixPQUFPLEVBQ0gsbUhBQW1IO1lBQ3ZILElBQUksRUFBRSxZQUFZO1NBQ25CO1FBRUQscUNBQXFDLEVBQUU7WUFDckMsT0FBTyxFQUNILGdKQUFnSjtZQUNwSixJQUFJLEVBQUUsT0FBTztTQUNkO1FBRUQsa0NBQWtDLEVBQUU7WUFDbEMsT0FBTyxFQUFFLHFFQUFxRTtZQUM5RSxJQUFJLEVBQUUsT0FBTztTQUNkO1FBRUQscUJBQXFCLEVBQUU7WUFDckIsT0FBTyxFQUFFLGtEQUFrRDtZQUMzRCxJQUFJLEVBQUUsU0FBUztTQUNoQjtLQUNGLENBQUM7SUFFRjs7Ozs7OztPQU9HO0lBQ0gsU0FBZ0IsZ0JBQWdCLENBQzVCLElBQWEsRUFBRSxFQUFxQjtRQUFFLG9CQUF1QjthQUF2QixVQUF1QixFQUF2QixxQkFBdUIsRUFBdkIsSUFBdUI7WUFBdkIsbUNBQXVCOztRQUMvRCxzREFBc0Q7UUFDdEQsSUFBTSxnQkFBZ0IsR0FDbEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBQyxFQUFFLEtBQWEsSUFBSyxPQUFBLFVBQVUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBQ2hGLE9BQU87WUFDTCxJQUFJLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDcEMsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixJQUFJLE1BQUE7U0FDTCxDQUFDO0lBQ0osQ0FBQztJQVZELDRDQVVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCAqIGFzIG5nIGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWdub3N0aWNNZXNzYWdlIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBraW5kOiBrZXlvZiB0eXBlb2YgdHMuRGlhZ25vc3RpY0NhdGVnb3J5O1xufVxuXG50eXBlIERpYWdub3N0aWNOYW1lID0gJ2RpcmVjdGl2ZV9ub3RfaW5fbW9kdWxlJ3wnbWlzc2luZ190ZW1wbGF0ZV9hbmRfdGVtcGxhdGV1cmwnfFxuICAgICdib3RoX3RlbXBsYXRlX2FuZF90ZW1wbGF0ZXVybCd8J2ludmFsaWRfdGVtcGxhdGV1cmwnfCd0ZW1wbGF0ZV9jb250ZXh0X21pc3NpbmdfbWVtYmVyJ3xcbiAgICAnY2FsbGFibGVfZXhwcmVzc2lvbl9leHBlY3RlZF9tZXRob2RfY2FsbCd8J2NhbGxfdGFyZ2V0X25vdF9jYWxsYWJsZSd8XG4gICAgJ2V4cHJlc3Npb25fbWlnaHRfYmVfbnVsbCd8J2V4cGVjdGVkX2FfbnVtYmVyX3R5cGUnfCdleHBlY3RlZF9hX3N0cmluZ19vcl9udW1iZXJfdHlwZSd8XG4gICAgJ2V4cGVjdGVkX29wZXJhbmRzX29mX3NpbWlsYXJfdHlwZV9vcl9hbnknfCd1bnJlY29nbml6ZWRfb3BlcmF0b3InfCd1bnJlY29nbml6ZWRfcHJpbWl0aXZlJ3xcbiAgICAnbm9fcGlwZV9mb3VuZCd8J3VuYWJsZV90b19yZXNvbHZlX2NvbXBhdGlibGVfY2FsbF9zaWduYXR1cmUnfCd1bmFibGVfdG9fcmVzb2x2ZV9zaWduYXR1cmUnfFxuICAgICdjb3VsZF9ub3RfcmVzb2x2ZV90eXBlJ3wnaWRlbnRpZmllcl9ub3RfY2FsbGFibGUnfCdpZGVudGlmaWVyX3Bvc3NpYmx5X3VuZGVmaW5lZCd8XG4gICAgJ2lkZW50aWZpZXJfbm90X2RlZmluZWRfaW5fYXBwX2NvbnRleHQnfCdpZGVudGlmaWVyX25vdF9kZWZpbmVkX29uX3JlY2VpdmVyJ3xcbiAgICAnaWRlbnRpZmllcl9pc19wcml2YXRlJztcblxuZXhwb3J0IGNvbnN0IERpYWdub3N0aWM6IFJlY29yZDxEaWFnbm9zdGljTmFtZSwgRGlhZ25vc3RpY01lc3NhZ2U+ID0ge1xuICBkaXJlY3RpdmVfbm90X2luX21vZHVsZToge1xuICAgIG1lc3NhZ2U6XG4gICAgICAgIGAlMSAnJTInIGlzIG5vdCBpbmNsdWRlZCBpbiBhIG1vZHVsZSBhbmQgd2lsbCBub3QgYmUgYXZhaWxhYmxlIGluc2lkZSBhIHRlbXBsYXRlLiBDb25zaWRlciBhZGRpbmcgaXQgdG8gYSBOZ01vZHVsZSBkZWNsYXJhdGlvbi5gLFxuICAgIGtpbmQ6ICdTdWdnZXN0aW9uJyxcbiAgfSxcblxuICBtaXNzaW5nX3RlbXBsYXRlX2FuZF90ZW1wbGF0ZXVybDoge1xuICAgIG1lc3NhZ2U6IGBDb21wb25lbnQgJyUxJyBtdXN0IGhhdmUgYSB0ZW1wbGF0ZSBvciB0ZW1wbGF0ZVVybGAsXG4gICAga2luZDogJ0Vycm9yJyxcbiAgfSxcblxuICBib3RoX3RlbXBsYXRlX2FuZF90ZW1wbGF0ZXVybDoge1xuICAgIG1lc3NhZ2U6IGBDb21wb25lbnQgJyUxJyBtdXN0IG5vdCBoYXZlIGJvdGggdGVtcGxhdGUgYW5kIHRlbXBsYXRlVXJsYCxcbiAgICBraW5kOiAnRXJyb3InLFxuICB9LFxuXG4gIGludmFsaWRfdGVtcGxhdGV1cmw6IHtcbiAgICBtZXNzYWdlOiBgVVJMIGRvZXMgbm90IHBvaW50IHRvIGEgdmFsaWQgZmlsZWAsXG4gICAga2luZDogJ0Vycm9yJyxcbiAgfSxcblxuICB0ZW1wbGF0ZV9jb250ZXh0X21pc3NpbmdfbWVtYmVyOiB7XG4gICAgbWVzc2FnZTogYFRoZSB0ZW1wbGF0ZSBjb250ZXh0IG9mICclMScgZG9lcyBub3QgZGVmaW5lICUyLlxcbmAgK1xuICAgICAgICBgSWYgdGhlIGNvbnRleHQgdHlwZSBpcyBhIGJhc2UgdHlwZSBvciAnYW55JywgY29uc2lkZXIgcmVmaW5pbmcgaXQgdG8gYSBtb3JlIHNwZWNpZmljIHR5cGUuYCxcbiAgICBraW5kOiAnU3VnZ2VzdGlvbicsXG4gIH0sXG5cbiAgY2FsbGFibGVfZXhwcmVzc2lvbl9leHBlY3RlZF9tZXRob2RfY2FsbDoge1xuICAgIG1lc3NhZ2U6ICdVbmV4cGVjdGVkIGNhbGxhYmxlIGV4cHJlc3Npb24uIEV4cGVjdGVkIGEgbWV0aG9kIGNhbGwnLFxuICAgIGtpbmQ6ICdXYXJuaW5nJyxcbiAgfSxcblxuICBjYWxsX3RhcmdldF9ub3RfY2FsbGFibGU6IHtcbiAgICBtZXNzYWdlOiBgQ2FsbCB0YXJnZXQgJyUxJyBoYXMgbm9uLWNhbGxhYmxlIHR5cGUgJyUyJy5gLFxuICAgIGtpbmQ6ICdFcnJvcicsXG4gIH0sXG5cbiAgZXhwcmVzc2lvbl9taWdodF9iZV9udWxsOiB7XG4gICAgbWVzc2FnZTogJ1RoZSBleHByZXNzaW9uIG1pZ2h0IGJlIG51bGwnLFxuICAgIGtpbmQ6ICdFcnJvcicsXG4gIH0sXG5cbiAgZXhwZWN0ZWRfYV9udW1iZXJfdHlwZToge1xuICAgIG1lc3NhZ2U6ICdFeHBlY3RlZCBhIG51bWJlciB0eXBlJyxcbiAgICBraW5kOiAnRXJyb3InLFxuICB9LFxuXG4gIGV4cGVjdGVkX2Ffc3RyaW5nX29yX251bWJlcl90eXBlOiB7XG4gICAgbWVzc2FnZTogJ0V4cGVjdGVkIG9wZXJhbmRzIHRvIGJlIGEgc3RyaW5nIG9yIG51bWJlciB0eXBlJyxcbiAgICBraW5kOiAnRXJyb3InLFxuICB9LFxuXG4gIGV4cGVjdGVkX29wZXJhbmRzX29mX3NpbWlsYXJfdHlwZV9vcl9hbnk6IHtcbiAgICBtZXNzYWdlOiAnRXhwZWN0ZWQgb3BlcmFuZHMgdG8gYmUgb2Ygc2ltaWxhciB0eXBlIG9yIGFueScsXG4gICAga2luZDogJ0Vycm9yJyxcbiAgfSxcblxuICB1bnJlY29nbml6ZWRfb3BlcmF0b3I6IHtcbiAgICBtZXNzYWdlOiAnVW5yZWNvZ25pemVkIG9wZXJhdG9yICUxJyxcbiAgICBraW5kOiAnRXJyb3InLFxuICB9LFxuXG4gIHVucmVjb2duaXplZF9wcmltaXRpdmU6IHtcbiAgICBtZXNzYWdlOiAnVW5yZWNvZ25pemVkIHByaW1pdGl2ZSAlMScsXG4gICAga2luZDogJ0Vycm9yJyxcbiAgfSxcblxuICBub19waXBlX2ZvdW5kOiB7XG4gICAgbWVzc2FnZTogJ05vIHBpcGUgb2YgbmFtZSAlMSBmb3VuZCcsXG4gICAga2luZDogJ0Vycm9yJyxcbiAgfSxcblxuICAvLyBUT0RPOiBDb25zaWRlciBhIGJldHRlciBlcnJvciBtZXNzYWdlIGhlcmUuXG4gIHVuYWJsZV90b19yZXNvbHZlX2NvbXBhdGlibGVfY2FsbF9zaWduYXR1cmU6IHtcbiAgICBtZXNzYWdlOiAnVW5hYmxlIHRvIHJlc29sdmUgY29tcGF0aWJsZSBjYWxsIHNpZ25hdHVyZScsXG4gICAga2luZDogJ0Vycm9yJyxcbiAgfSxcblxuICB1bmFibGVfdG9fcmVzb2x2ZV9zaWduYXR1cmU6IHtcbiAgICBtZXNzYWdlOiAnVW5hYmxlIHRvIHJlc29sdmUgc2lnbmF0dXJlIGZvciBjYWxsIG9mICUxJyxcbiAgICBraW5kOiAnRXJyb3InLFxuICB9LFxuXG4gIGNvdWxkX25vdF9yZXNvbHZlX3R5cGU6IHtcbiAgICBtZXNzYWdlOiBgQ291bGQgbm90IHJlc29sdmUgdGhlIHR5cGUgb2YgJyUxJ2AsXG4gICAga2luZDogJ0Vycm9yJyxcbiAgfSxcblxuICBpZGVudGlmaWVyX25vdF9jYWxsYWJsZToge1xuICAgIG1lc3NhZ2U6IGAnJTEnIGlzIG5vdCBjYWxsYWJsZWAsXG4gICAga2luZDogJ0Vycm9yJyxcbiAgfSxcblxuICBpZGVudGlmaWVyX3Bvc3NpYmx5X3VuZGVmaW5lZDoge1xuICAgIG1lc3NhZ2U6XG4gICAgICAgIGAnJTEnIGlzIHBvc3NpYmx5IHVuZGVmaW5lZC4gQ29uc2lkZXIgdXNpbmcgdGhlIHNhZmUgbmF2aWdhdGlvbiBvcGVyYXRvciAoJTIpIG9yIG5vbi1udWxsIGFzc2VydGlvbiBvcGVyYXRvciAoJTMpLmAsXG4gICAga2luZDogJ1N1Z2dlc3Rpb24nLFxuICB9LFxuXG4gIGlkZW50aWZpZXJfbm90X2RlZmluZWRfaW5fYXBwX2NvbnRleHQ6IHtcbiAgICBtZXNzYWdlOlxuICAgICAgICBgSWRlbnRpZmllciAnJTEnIGlzIG5vdCBkZWZpbmVkLiBUaGUgY29tcG9uZW50IGRlY2xhcmF0aW9uLCB0ZW1wbGF0ZSB2YXJpYWJsZSBkZWNsYXJhdGlvbnMsIGFuZCBlbGVtZW50IHJlZmVyZW5jZXMgZG8gbm90IGNvbnRhaW4gc3VjaCBhIG1lbWJlcmAsXG4gICAga2luZDogJ0Vycm9yJyxcbiAgfSxcblxuICBpZGVudGlmaWVyX25vdF9kZWZpbmVkX29uX3JlY2VpdmVyOiB7XG4gICAgbWVzc2FnZTogYElkZW50aWZpZXIgJyUxJyBpcyBub3QgZGVmaW5lZC4gJyUyJyBkb2VzIG5vdCBjb250YWluIHN1Y2ggYSBtZW1iZXJgLFxuICAgIGtpbmQ6ICdFcnJvcicsXG4gIH0sXG5cbiAgaWRlbnRpZmllcl9pc19wcml2YXRlOiB7XG4gICAgbWVzc2FnZTogYElkZW50aWZpZXIgJyUxJyByZWZlcnMgdG8gYSBwcml2YXRlIG1lbWJlciBvZiAlMmAsXG4gICAga2luZDogJ1dhcm5pbmcnLFxuICB9LFxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbGFuZ3VhZ2Ugc2VydmljZSBkaWFnbm9zdGljLlxuICogQHBhcmFtIHNwYW4gbG9jYXRpb24gdGhlIGRpYWdub3N0aWMgZm9yXG4gKiBAcGFyYW0gZG0gZGlhZ25vc3RpYyBtZXNzYWdlXG4gKiBAcGFyYW0gZm9ybWF0QXJncyBydW4tdGltZSBhcmd1bWVudHMgdG8gZm9ybWF0IHRoZSBkaWFnbm9zdGljIG1lc3NhZ2Ugd2l0aCAoc2VlIHRoZSBtZXNzYWdlcyBpblxuICogICAgICAgIHRoZSBgRGlhZ25vc3RpY2Agb2JqZWN0IGZvciBhbiBleGFtcGxlKS5cbiAqIEByZXR1cm5zIGEgY3JlYXRlZCBkaWFnbm9zdGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaWFnbm9zdGljKFxuICAgIHNwYW46IG5nLlNwYW4sIGRtOiBEaWFnbm9zdGljTWVzc2FnZSwgLi4uZm9ybWF0QXJnczogc3RyaW5nW10pOiBuZy5EaWFnbm9zdGljIHtcbiAgLy8gRm9ybWF0cyBcIiUxICUyXCIgd2l0aCBmb3JtYXRBcmdzIFsnYScsICdiJ10gYXMgXCJhIGJcIlxuICBjb25zdCBmb3JtYXR0ZWRNZXNzYWdlID1cbiAgICAgIGRtLm1lc3NhZ2UucmVwbGFjZSgvJShcXGQrKS9nLCAoXywgaW5kZXg6IHN0cmluZykgPT4gZm9ybWF0QXJnc1sraW5kZXggLSAxXSk7XG4gIHJldHVybiB7XG4gICAga2luZDogdHMuRGlhZ25vc3RpY0NhdGVnb3J5W2RtLmtpbmRdLFxuICAgIG1lc3NhZ2U6IGZvcm1hdHRlZE1lc3NhZ2UsXG4gICAgc3BhbixcbiAgfTtcbn1cbiJdfQ==