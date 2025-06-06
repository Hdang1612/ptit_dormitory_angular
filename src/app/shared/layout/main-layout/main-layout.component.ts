import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { MENU_ITEMS } from '../../../constants/menu-item';

@Component({
  selector: 'app-main-layout',
  imports: [SideBarComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  header: string = '';
  routerSub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateHeader(this.router.url);
    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateHeader(event.urlAfterRedirects);
      });
  }

  updateHeader(url: string) {
    const cleanPath = url.split('?')[0].split('#')[0]; // bỏ query, fragment nếu có
    const matched = MENU_ITEMS.find((item) => item.path === cleanPath);
    this.header = matched?.label ?? 'Trang không xác định';
  }
  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }
}
