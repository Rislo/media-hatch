import { Validator, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';
export declare function MustMatch(controlName: string, matchingControlName: string): (formGroup: FormGroup) => any;
export declare class MustMatchDirective implements Validator {
    mustMatch: string[];
    static getConfirmPasswordErrorMessage(control: AbstractControl): "Required" | "Confirm password must match with new password";
    validate(formGroup: FormGroup): ValidationErrors;
}
