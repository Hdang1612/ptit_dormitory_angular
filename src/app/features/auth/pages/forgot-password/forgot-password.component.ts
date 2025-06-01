import { Component } from '@angular/core';
import { Validators, FormsModule } from '@angular/forms';
import { FormComponent } from '../../components/form/form.component';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';
@Component({
  selector: 'app-forgot-password',
  imports: [AuthLayoutComponent, FormComponent, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  forgotPasswordFileds = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      validators: [Validators.required, Validators.email],
    },
  ];
  handleReset(formValue: any) {
    console.log('Login data:', formValue);
  }
}
