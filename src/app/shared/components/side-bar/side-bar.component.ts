import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-side-bar',
  imports: [NgFor, RouterLink, NgClass, MatIconModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  private menuBasedRole = {
    admin: [
      { label: 'Báo cáo & Thống kê', path: '/reports', icon: 'grid_view' },
      { label: 'Danh sách đăng ký', path: '/danhsachdondky',icon: 'grid_view' },
      { label: 'Danh sách hợp đồng', path: '/danhsachhopdong',icon: 'grid_view' },
      { label: 'Danh sách phòng', path: '/dsphong',icon: 'grid_view' },
      { label: 'Danh sách sinh viên', path: '/student-list',icon: 'grid_view' },
      { label: 'Thanh toán & Hoá đơn', path: '/invoice',icon: 'grid_view' },
      { label: 'Giám sát tiêu thụ điện', path: '/power-monitoring',icon: 'grid_view' },
    ],
    sinhvien: [
      { label: 'Thông báo chung', path: '',icon: 'grid_view' },
      { label: 'Thẻ lưu trú', path: '/thedinhdanh',icon: 'grid_view' },
      { label: 'Thông tin cá nhân', path: '',icon: 'grid_view' },
    ],
    nguoitruc: [
      { label: 'Phân ca', path: '/shiftmanage',icon: 'grid_view' },
      { label: 'Điểm danh', path: '/staffduty',icon: 'grid_view' },
    ],
  };
  menuItems = [
    { label: 'Trang chủ', icon: 'menu', path: '/' },
    { label: 'Phòng', icon: 'building', path: '/rooms' },
    { label: 'Sinh viên', icon: 'users', path: '/students' },
    { label: 'Thiết bị', icon: 'cpu', path: '/devices' },
  ];
  constructor(public router: Router) {}

  isActive(path: string): boolean {
    return this.router.isActive(path, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
}
