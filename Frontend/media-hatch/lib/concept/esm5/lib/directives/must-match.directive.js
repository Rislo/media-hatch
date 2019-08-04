/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
// custom validator to check that two fields match
/**
 * @param {?} controlName
 * @param {?} matchingControlName
 * @return {?}
 */
export function MustMatch(controlName, matchingControlName) {
    return (/**
     * @param {?} formGroup
     * @return {?}
     */
    function (formGroup) {
        /** @type {?} */
        var control = formGroup.controls[controlName];
        /** @type {?} */
        var matchingControl = formGroup.controls[matchingControlName];
        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
            return null;
        }
        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    });
}
var MustMatchDirective = /** @class */ (function () {
    function MustMatchDirective() {
        this.mustMatch = [];
    }
    /**
     * @param {?} control
     * @return {?}
     */
    MustMatchDirective.getConfirmPasswordErrorMessage = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (control.errors) {
            if (control.errors.required) {
                return 'Required';
            }
            else {
                return 'Confirm password must match with new password';
            }
        }
        else {
            return null;
        }
    };
    /**
     * @param {?} formGroup
     * @return {?}
     */
    MustMatchDirective.prototype.validate = /**
     * @param {?} formGroup
     * @return {?}
     */
    function (formGroup) {
        return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
    };
    MustMatchDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[conceptMustMatch]',
                    providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
                },] }
    ];
    MustMatchDirective.propDecorators = {
        mustMatch: [{ type: Input, args: ['conceptMustMatch',] }]
    };
    return MustMatchDirective;
}());
export { MustMatchDirective };
if (false) {
    /** @type {?} */
    MustMatchDirective.prototype.mustMatch;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzdC1tYXRjaC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb25jZXB0LyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbXVzdC1tYXRjaC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQXdFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFHckgsTUFBTSxVQUFVLFNBQVMsQ0FBQyxXQUFtQixFQUFFLG1CQUEyQjtJQUN4RTs7OztJQUFPLFVBQUMsU0FBb0I7O1lBQ2xCLE9BQU8sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQzs7WUFDekMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7UUFFL0Qsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELHFGQUFxRjtRQUNyRixJQUFJLGVBQWUsQ0FBQyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUM3RCxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsbURBQW1EO1FBQ25ELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxlQUFlLENBQUMsS0FBSyxFQUFFO1lBQ3pDLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ0gsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUMsRUFBQztBQUNKLENBQUM7QUFFRDtJQUFBO1FBSytCLGNBQVMsR0FBYSxFQUFFLENBQUM7SUFtQnhELENBQUM7Ozs7O0lBakJVLGlEQUE4Qjs7OztJQUFyQyxVQUFzQyxPQUF3QjtRQUMxRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDekIsT0FBTyxVQUFVLENBQUM7YUFDckI7aUJBQ0k7Z0JBQ0QsT0FBTywrQ0FBK0MsQ0FBQzthQUMxRDtTQUNKO2FBQ0k7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxxQ0FBUTs7OztJQUFSLFVBQVMsU0FBb0I7UUFDekIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Z0JBdkJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztpQkFDeEY7Ozs0QkFFSSxLQUFLLFNBQUMsa0JBQWtCOztJQW1CN0IseUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXBCWSxrQkFBa0I7OztJQUMzQix1Q0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdGlvbkVycm9ycywgRm9ybUdyb3VwLCBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuLy8gY3VzdG9tIHZhbGlkYXRvciB0byBjaGVjayB0aGF0IHR3byBmaWVsZHMgbWF0Y2hcclxuZXhwb3J0IGZ1bmN0aW9uIE11c3RNYXRjaChjb250cm9sTmFtZTogc3RyaW5nLCBtYXRjaGluZ0NvbnRyb2xOYW1lOiBzdHJpbmcpIHtcclxuICByZXR1cm4gKGZvcm1Hcm91cDogRm9ybUdyb3VwKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtR3JvdXAuY29udHJvbHNbY29udHJvbE5hbWVdO1xyXG4gICAgICBjb25zdCBtYXRjaGluZ0NvbnRyb2wgPSBmb3JtR3JvdXAuY29udHJvbHNbbWF0Y2hpbmdDb250cm9sTmFtZV07XHJcblxyXG4gICAgICAvLyByZXR1cm4gbnVsbCBpZiBjb250cm9scyBoYXZlbid0IGluaXRpYWxpc2VkIHlldFxyXG4gICAgICBpZiAoIWNvbnRyb2wgfHwgIW1hdGNoaW5nQ29udHJvbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZXR1cm4gbnVsbCBpZiBhbm90aGVyIHZhbGlkYXRvciBoYXMgYWxyZWFkeSBmb3VuZCBhbiBlcnJvciBvbiB0aGUgbWF0Y2hpbmdDb250cm9sXHJcbiAgICAgIGlmIChtYXRjaGluZ0NvbnRyb2wuZXJyb3JzICYmICFtYXRjaGluZ0NvbnRyb2wuZXJyb3JzLm11c3RNYXRjaCkge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNldCBlcnJvciBvbiBtYXRjaGluZ0NvbnRyb2wgaWYgdmFsaWRhdGlvbiBmYWlsc1xyXG4gICAgICBpZiAoY29udHJvbC52YWx1ZSAhPT0gbWF0Y2hpbmdDb250cm9sLnZhbHVlKSB7XHJcbiAgICAgICAgICBtYXRjaGluZ0NvbnRyb2wuc2V0RXJyb3JzKHsgbXVzdE1hdGNoOiB0cnVlIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWF0Y2hpbmdDb250cm9sLnNldEVycm9ycyhudWxsKTtcclxuICAgICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbY29uY2VwdE11c3RNYXRjaF0nLFxyXG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogTXVzdE1hdGNoRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZSB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXVzdE1hdGNoRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICAgIEBJbnB1dCgnY29uY2VwdE11c3RNYXRjaCcpIG11c3RNYXRjaDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29uZmlybVBhc3N3b3JkRXJyb3JNZXNzYWdlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xyXG4gICAgICAgIGlmIChjb250cm9sLmVycm9ycykge1xyXG4gICAgICAgICAgICBpZiAoY29udHJvbC5lcnJvcnMucmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnUmVxdWlyZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdDb25maXJtIHBhc3N3b3JkIG11c3QgbWF0Y2ggd2l0aCBuZXcgcGFzc3dvcmQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoZm9ybUdyb3VwOiBGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHtcclxuICAgICAgICByZXR1cm4gTXVzdE1hdGNoKHRoaXMubXVzdE1hdGNoWzBdLCB0aGlzLm11c3RNYXRjaFsxXSkoZm9ybUdyb3VwKTtcclxuICAgIH1cclxufVxyXG4iXX0=