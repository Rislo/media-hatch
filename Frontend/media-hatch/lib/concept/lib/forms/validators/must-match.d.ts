import { FormControl, AbstractControl } from '@angular/forms';
export declare function mustMatch(matchingControl: FormControl): (control: AbstractControl) => any;
export declare function getMustMatchError(control: FormControl, controlName: string, matchControlName: string): string | null;
