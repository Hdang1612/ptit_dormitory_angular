import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  imports: [FormComponent, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  signupFileds = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      validators: [Validators.required, Validators.email],
    },
    {
      name: 'name',
      type: 'text',
      placeholder: 'Họ và Tên',
      validators: [Validators.required],
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Mật khẩu',
      validators: [Validators.required],
    },
  ];
  handleSignUp(formValue: any) {
    console.log('signup data:', formValue);
    // Xử lý đăng nhập
  }
}
