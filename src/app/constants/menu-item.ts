export interface MenuItem {
  label: string;
  icon: string;
  path: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { label: 'Báo cáo thống kê', icon: 'menu', path: '/' },
  { label: 'Quản lý khu vực', icon: 'building', path: '/rooms' },
  { label: 'Quản lý sinh viên', icon: 'menu', path: '/students' },
  { label: 'Quản lý hợp đồng', icon: 'menu', path: '/contract' },
  { label: 'Đơn đăng ký', icon: 'menu', path: '/register-list' },
  { label: 'Ca trực', icon: 'menu', path: '/shift-manage' },
  { label: 'Tài khoản', icon: 'menu', path: '/profile' },
];
