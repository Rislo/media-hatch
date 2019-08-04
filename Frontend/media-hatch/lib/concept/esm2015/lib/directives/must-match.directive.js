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
    (formGroup) => {
        /** @type {?} */
        const control = formGroup.controls[controlName];
        /** @type {?} */
        const matchingControl = formGroup.controls[matchingControlName];
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
export class MustMatchDirective {
    constructor() {
        this.mustMatch = [];
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static getConfirmPasswordErrorMessage(control) {
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
    }
    /**
     * @param {?} formGroup
     * @return {?}
     */
    validate(formGroup) {
        return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
    }
}
MustMatchDirective.decorators = [
    { type: Directive, args: [{
                selector: '[conceptMustMatch]',
                providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
            },] }
];
MustMatchDirective.propDecorators = {
    mustMatch: [{ type: Input, args: ['conceptMustMatch',] }]
};
if (false) {
    /** @type {?} */
    MustMatchDirective.prototype.mustMatch;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzdC1tYXRjaC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb25jZXB0LyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbXVzdC1tYXRjaC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQXdFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFHckgsTUFBTSxVQUFVLFNBQVMsQ0FBQyxXQUFtQixFQUFFLG1CQUEyQjtJQUN4RTs7OztJQUFPLENBQUMsU0FBb0IsRUFBRSxFQUFFOztjQUN0QixPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7O2NBQ3pDLGVBQWUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1FBRS9ELGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxxRkFBcUY7UUFDckYsSUFBSSxlQUFlLENBQUMsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDN0QsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELG1EQUFtRDtRQUNuRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssZUFBZSxDQUFDLEtBQUssRUFBRTtZQUN6QyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDbEQ7YUFBTTtZQUNILGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDLEVBQUM7QUFDSixDQUFDO0FBTUQsTUFBTSxPQUFPLGtCQUFrQjtJQUovQjtRQUsrQixjQUFTLEdBQWEsRUFBRSxDQUFDO0lBbUJ4RCxDQUFDOzs7OztJQWpCRyxNQUFNLENBQUMsOEJBQThCLENBQUMsT0FBd0I7UUFDMUQsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3pCLE9BQU8sVUFBVSxDQUFDO2FBQ3JCO2lCQUNJO2dCQUNELE9BQU8sK0NBQStDLENBQUM7YUFDMUQ7U0FDSjthQUNJO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFNBQW9CO1FBQ3pCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7OztZQXZCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDeEY7Ozt3QkFFSSxLQUFLLFNBQUMsa0JBQWtCOzs7O0lBQXpCLHVDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0aW9uRXJyb3JzLCBGb3JtR3JvdXAsIEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vLyBjdXN0b20gdmFsaWRhdG9yIHRvIGNoZWNrIHRoYXQgdHdvIGZpZWxkcyBtYXRjaFxyXG5leHBvcnQgZnVuY3Rpb24gTXVzdE1hdGNoKGNvbnRyb2xOYW1lOiBzdHJpbmcsIG1hdGNoaW5nQ29udHJvbE5hbWU6IHN0cmluZykge1xyXG4gIHJldHVybiAoZm9ybUdyb3VwOiBGb3JtR3JvdXApID0+IHtcclxuICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5jb250cm9sc1tjb250cm9sTmFtZV07XHJcbiAgICAgIGNvbnN0IG1hdGNoaW5nQ29udHJvbCA9IGZvcm1Hcm91cC5jb250cm9sc1ttYXRjaGluZ0NvbnRyb2xOYW1lXTtcclxuXHJcbiAgICAgIC8vIHJldHVybiBudWxsIGlmIGNvbnRyb2xzIGhhdmVuJ3QgaW5pdGlhbGlzZWQgeWV0XHJcbiAgICAgIGlmICghY29udHJvbCB8fCAhbWF0Y2hpbmdDb250cm9sKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHJldHVybiBudWxsIGlmIGFub3RoZXIgdmFsaWRhdG9yIGhhcyBhbHJlYWR5IGZvdW5kIGFuIGVycm9yIG9uIHRoZSBtYXRjaGluZ0NvbnRyb2xcclxuICAgICAgaWYgKG1hdGNoaW5nQ29udHJvbC5lcnJvcnMgJiYgIW1hdGNoaW5nQ29udHJvbC5lcnJvcnMubXVzdE1hdGNoKSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gc2V0IGVycm9yIG9uIG1hdGNoaW5nQ29udHJvbCBpZiB2YWxpZGF0aW9uIGZhaWxzXHJcbiAgICAgIGlmIChjb250cm9sLnZhbHVlICE9PSBtYXRjaGluZ0NvbnRyb2wudmFsdWUpIHtcclxuICAgICAgICAgIG1hdGNoaW5nQ29udHJvbC5zZXRFcnJvcnMoeyBtdXN0TWF0Y2g6IHRydWUgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtYXRjaGluZ0NvbnRyb2wuc2V0RXJyb3JzKG51bGwpO1xyXG4gICAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tjb25jZXB0TXVzdE1hdGNoXScsXHJcbiAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBNdXN0TWF0Y2hEaXJlY3RpdmUsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNdXN0TWF0Y2hEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xyXG4gICAgQElucHV0KCdjb25jZXB0TXVzdE1hdGNoJykgbXVzdE1hdGNoOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIHN0YXRpYyBnZXRDb25maXJtUGFzc3dvcmRFcnJvck1lc3NhZ2UoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XHJcbiAgICAgICAgaWYgKGNvbnRyb2wuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIGlmIChjb250cm9sLmVycm9ycy5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdSZXF1aXJlZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0NvbmZpcm0gcGFzc3dvcmQgbXVzdCBtYXRjaCB3aXRoIG5ldyBwYXNzd29yZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShmb3JtR3JvdXA6IEZvcm1Hcm91cCk6IFZhbGlkYXRpb25FcnJvcnMge1xyXG4gICAgICAgIHJldHVybiBNdXN0TWF0Y2godGhpcy5tdXN0TWF0Y2hbMF0sIHRoaXMubXVzdE1hdGNoWzFdKShmb3JtR3JvdXApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==