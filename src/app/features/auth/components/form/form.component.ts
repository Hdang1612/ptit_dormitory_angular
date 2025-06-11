import {
  Component,
  Input,
  input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
interface FormField {
  name: string; // tên trường (ví dụ: email)
  type: string; // kiểu input (text, password, email, ...)
  placeholder?: string; // placeholder text
  validators?: any[]; // validator (ví dụ Validators.required)
}
@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgFor, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  title = input('');
  @Input() description: string = '';
  @Input() submitLabel: string = 'Submit';
  @Input() isLoginForm: boolean = true;

  @Input() fields: FormField[] = [];

  @Output() onSubmit = new EventEmitter<any>();

  form!: FormGroup;

  ngOnInit() {
    const group: any = {};
    this.fields.forEach((field) => {
      group[field.name] = new FormControl('', field.validators || []);
    });
    this.form = new FormGroup(group);
  }

  submit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
