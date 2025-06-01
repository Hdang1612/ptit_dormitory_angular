import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginFields = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      validators: [Validators.required, Validators.email],
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Mật khẩu',
      validators: [Validators.required],
    },
  ];

  handleLogin(formValue: any) {
    console.log('Login data:', formValue);
    // Xử lý đăng nhập
  }
}
