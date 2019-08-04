/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} control
 * @param {...?} functions
 * @return {?}
 */
export function controlErrorMessage(control) {
    var functions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        functions[_i - 1] = arguments[_i];
    }
    var e_1, _a;
    try {
        for (var functions_1 = tslib_1.__values(functions), functions_1_1 = functions_1.next(); !functions_1_1.done; functions_1_1 = functions_1.next()) {
            var func = functions_1_1.value;
            /** @type {?} */
            var message = func[0](control, func[1]);
            if (message) {
                return message;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (functions_1_1 && !functions_1_1.done && (_a = functions_1.return)) _a.call(functions_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return 'Unknown error';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbmNlcHQvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvZXJyb3JzL2Vycm9yLW1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLE1BQU0sVUFBVSxtQkFBbUIsQ0FDL0IsT0FBd0I7SUFDeEIsbUJBQXlGO1NBQXpGLFVBQXlGLEVBQXpGLHFCQUF5RixFQUF6RixJQUF5RjtRQUF6RixrQ0FBeUY7Ozs7UUFDekYsS0FBbUIsSUFBQSxjQUFBLGlCQUFBLFNBQVMsQ0FBQSxvQ0FBQSwyREFBRTtZQUF6QixJQUFNLElBQUksc0JBQUE7O2dCQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLE9BQU8sRUFBRTtnQkFDVCxPQUFPLE9BQU8sQ0FBQzthQUNsQjtTQUNKOzs7Ozs7Ozs7SUFDRCxPQUFPLGVBQWUsQ0FBQztBQUMzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250cm9sRXJyb3JNZXNzYWdlKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgLi4uZnVuY3Rpb25zOiBbKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgLi4ucGFyYW1zOiBhbnlbXSkgPT4gc3RyaW5nIHwgbnVsbCwgLi4uYW55W11dW10pIHtcclxuICAgIGZvciAoY29uc3QgZnVuYyBvZiBmdW5jdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZnVuY1swXShjb250cm9sLCBmdW5jWzFdKTtcclxuICAgICAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ1Vua25vd24gZXJyb3InO1xyXG59XHJcbiJdfQ==