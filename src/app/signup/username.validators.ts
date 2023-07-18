import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    constructor() { }
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf('') >= 0) {
            return { cannotContainSpace: true }
        }
        return null;
    }
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        //asyn validation
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'ksb')
                    resolve({ shouldBeUnique: true });
                else resolve(null);
            }, 2000);
        });
    }
}