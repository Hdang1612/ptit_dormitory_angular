import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [NgFor, RouterLink,NgClass],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  menuItems = [
    { label: 'Trang chủ', icon: 'home', path: '/' },
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
