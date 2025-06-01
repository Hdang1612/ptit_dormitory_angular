import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-main-layout',
  imports: [SideBarComponent,RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
