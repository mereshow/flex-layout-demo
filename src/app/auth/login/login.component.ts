import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ThemeService } from '../../core/services/theme.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { NotificationType } from 'src/app/core/model/notification-type.enum';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading: boolean;

    constructor(private authenticationService: AuthenticationService,
        public themeService: ThemeService,
        private notificationService: NotificationService,
        private router: Router) {
    }

    ngOnInit(): void {
        const user = this.authenticationService.getUser();

        this.loginForm = new FormGroup({
            email: new FormControl(user ? user.username : '', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
            rememberMe: new FormControl((user && user.username) ? true : false)
        });
    }

    login(): void {
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;
        const rememberMe = this.loginForm.get('rememberMe').value;

        this.loading = true;
        this.authenticationService
            .login(email.toLowerCase(), password, rememberMe)
            .subscribe(
                data => {
                    if (this.authenticationService.redirectUrl) { this.router.navigate([this.authenticationService.redirectUrl]); }
                    else {
                        this.router.navigate(['/']);
                    }
                },
                error => {
                    this.loading = false;
                }
            );
    }

    resetPassword(): void {
        this.router.navigate(['/auth/password-reset-request']);
    }

    setDarkMode(change: any): void {
        if (change && change.checked) { this.themeService.setDarkTheme(); console.log('dark theme set'); }
        else { this.themeService.setLightTheme(); console.log('dark theme unset'); }
    }

}
