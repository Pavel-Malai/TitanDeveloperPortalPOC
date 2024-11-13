import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private darkMode = false;

    public isDarkMode$ = new BehaviorSubject<boolean>(this.darkMode);

    isDarkMode() {
        return this.darkMode;
    }

    setDarkMode(isDarkMode: boolean) {
        this.darkMode = isDarkMode;
        if (isDarkMode) {
            document.body.classList.remove('esendex');
            document.body.classList.add('custom-dark-theme');
        } else {
            document.body.classList.remove('custom-dark-theme');
            document.body.classList.add('esendex');
        }

        this.isDarkMode$.next(this.darkMode);
    }
}