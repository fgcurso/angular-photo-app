import { AbstractControl } from '@angular/forms';

export class EmailValidation {
    static MatchEmailValues(email: string, confirmEmail: string) {
        if (email === confirmEmail) {
            return null;
        }

        return {
            matchEmail: true
        };
    }

    static MatchEmail(controls: AbstractControl) {
        let email = controls.get('email').value;
        let confirmEmail = controls.get('confirmEmail').value;

        if (email === confirmEmail) {
            return null;
        } else {
            return {
                matchEmail: true
            };
        }
    }
}