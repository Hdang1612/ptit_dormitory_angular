import { Component } from '@angular/core';
import {
  TableColumn,
  TableComponent,
} from '../../../../shared/components/table/table.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
@Component({
  selector: 'app-user-profile',
  imports: [TableComponent, ButtonComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  columns: TableColumn[] = [
    { field: 'email', header: 'Email' },
    { field: 'role_name', header: 'Vai trò' },
    { field: 'dob', header: 'Ngày sinh', type: 'date' },
  ];

  users = [
    { email: 'abc@gmail.com', role_name: 'Admin', dob: '2001-01-01' },
    { email: 'abc@gmail.com', role_name: 'Admin', dob: '2001-01-01' },
    { email: 'abc@gmail.com', role_name: 'Admin', dob: '2001-01-01' },
    { email: 'abc@gmail.com', role_name: 'Admin', dob: '2001-01-01' },
    { email: 'abc@gmail.com', role_name: 'Admin', dob: '2001-01-01' },
  ];
  loading = false;
  handleConfirm() {
    console.log('Đã xác nhận!');
  }
}
