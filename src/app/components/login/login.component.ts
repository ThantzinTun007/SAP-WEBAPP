import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private validEmail = 'user@gmail.com';
  private validPassword = '11111111';

  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit(form: any) {
    const { email, password } = form.value;

    if (email === this.validEmail && password === this.validPassword) {
      this.errorMessage = '';
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}
