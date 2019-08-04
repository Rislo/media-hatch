/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} control
 * @param {...?} functions
 * @return {?}
 */
export function controlErrorMessage(control, ...functions) {
    for (const func of functions) {
        /** @type {?} */
        const message = func[0](control, func[1]);
        if (message) {
            return message;
        }
    }
    return 'Unknown error';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbmNlcHQvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvZXJyb3JzL2Vycm9yLW1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0EsTUFBTSxVQUFVLG1CQUFtQixDQUMvQixPQUF3QixFQUN4QixHQUFHLFNBQXNGO0lBQ3pGLEtBQUssTUFBTSxJQUFJLElBQUksU0FBUyxFQUFFOztjQUNwQixPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLE9BQU8sQ0FBQztTQUNsQjtLQUNKO0lBQ0QsT0FBTyxlQUFlLENBQUM7QUFDM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udHJvbEVycm9yTWVzc2FnZShcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIC4uLmZ1bmN0aW9uczogWyhjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIC4uLnBhcmFtczogYW55W10pID0+IHN0cmluZyB8IG51bGwsIC4uLmFueVtdXVtdKSB7XHJcbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgZnVuY3Rpb25zKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGZ1bmNbMF0oY29udHJvbCwgZnVuY1sxXSk7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICdVbmtub3duIGVycm9yJztcclxufVxyXG4iXX0=