import { Component } from '@angular/core';
import * as Joi from 'joi';

import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  Routes,
} from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}

  email: string = '';

  password: string = '';
  emailError: string = '';
  passwordError: string = '';

  // Joi schema
  validationSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(6).required(),
  });

  onLogin() {
    const { error } = this.validationSchema.validate({
      email: this.email,
      password: this.password,
    });

    if (error) {
      // Parse errors and display messages
      error.details.forEach((detail) => {
        if (detail.context?.key === 'email') {
          this.emailError = detail.message;
        } else if (detail.context?.key === 'password') {
          this.passwordError = detail.message;
        }
      });
    } else {
      // if (this.email && this.password) {
      this.router.navigate(['/home']);
      // }
      // Clear errors and proceed
      this.emailError = '';
      this.passwordError = '';
      console.log('Login successful:', {
        email: this.email,
        password: this.password,
      });
    }
  }
}
