/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// custom validator to check that two fields match
/**
 * @param {?} matchingControl
 * @return {?}
 */
export function mustMatch(matchingControl) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
            return null;
        }
        // return null if another validator has already found an error on the matchingControl
        if (control.errors && !control.errors.mustMatch) {
            return null;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            control.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    });
}
/**
 * @param {?} control
 * @param {?} controlName
 * @param {?} matchControlName
 * @return {?}
 */
export function getMustMatchError(control, controlName, matchControlName) {
    if (control.errors && control.errors.mustMatch) {
        return controlName + " must match with " + matchControlName + ".";
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzdC1tYXRjaC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbmNlcHQvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvdmFsaWRhdG9ycy9tdXN0LW1hdGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBLE1BQU0sVUFBVSxTQUFTLENBQUMsZUFBNEI7SUFDbEQ7Ozs7SUFBTyxVQUFDLE9BQXdCO1FBQzVCLGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxxRkFBcUY7UUFDckYsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELG1EQUFtRDtRQUNuRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssZUFBZSxDQUFDLEtBQUssRUFBRTtZQUN6QyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNILGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDLEVBQUM7QUFDTixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE9BQW9CLEVBQUUsV0FBbUIsRUFBRSxnQkFBd0I7SUFDakcsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1FBQzVDLE9BQVUsV0FBVyx5QkFBb0IsZ0JBQWdCLE1BQUcsQ0FBQztLQUNoRTtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQ29udHJvbCwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuLy8gY3VzdG9tIHZhbGlkYXRvciB0byBjaGVjayB0aGF0IHR3byBmaWVsZHMgbWF0Y2hcclxuZXhwb3J0IGZ1bmN0aW9uIG11c3RNYXRjaChtYXRjaGluZ0NvbnRyb2w6IEZvcm1Db250cm9sKSB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4ge1xyXG4gICAgICAgIC8vIHJldHVybiBudWxsIGlmIGNvbnRyb2xzIGhhdmVuJ3QgaW5pdGlhbGlzZWQgeWV0XHJcbiAgICAgICAgaWYgKCFjb250cm9sIHx8ICFtYXRjaGluZ0NvbnRyb2wpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZXR1cm4gbnVsbCBpZiBhbm90aGVyIHZhbGlkYXRvciBoYXMgYWxyZWFkeSBmb3VuZCBhbiBlcnJvciBvbiB0aGUgbWF0Y2hpbmdDb250cm9sXHJcbiAgICAgICAgaWYgKGNvbnRyb2wuZXJyb3JzICYmICFjb250cm9sLmVycm9ycy5tdXN0TWF0Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgZXJyb3Igb24gbWF0Y2hpbmdDb250cm9sIGlmIHZhbGlkYXRpb24gZmFpbHNcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSAhPT0gbWF0Y2hpbmdDb250cm9sLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKHsgbXVzdE1hdGNoOiB0cnVlIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1hdGNoaW5nQ29udHJvbC5zZXRFcnJvcnMobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE11c3RNYXRjaEVycm9yKGNvbnRyb2w6IEZvcm1Db250cm9sLCBjb250cm9sTmFtZTogc3RyaW5nLCBtYXRjaENvbnRyb2xOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGlmIChjb250cm9sLmVycm9ycyAmJiBjb250cm9sLmVycm9ycy5tdXN0TWF0Y2gpIHtcclxuICAgICAgICByZXR1cm4gYCR7Y29udHJvbE5hbWV9IG11c3QgbWF0Y2ggd2l0aCAke21hdGNoQ29udHJvbE5hbWV9LmA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4iXX0=