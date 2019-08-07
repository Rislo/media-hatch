import { AbstractControl } from '@angular/forms';
export declare function controlErrorMessage(control: AbstractControl, ...functions: [(control: AbstractControl, ...params: any[]) => string | null, ...any[]][]): string;
