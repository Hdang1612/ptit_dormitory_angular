import {
  DatePipe,
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-table',
  imports: [NgIf, NgFor, NgSwitchCase, NgSwitch, DatePipe, NgSwitchDefault],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() columns: TableColumn[] = []; // Cột hiển thị
  @Input() dataSource: any[] = []; // Dữ liệu
  @Input() loading: boolean = false; // Loading spinner
  @Input() pageSize = 10;
  @Input() totalItems = 0;
  @Input() currentPage = 1;

  @Input() showPagination = true;

  onPageChange(page: number) {
    // EventEmit nếu cần
  }
}

export interface TableColumn {
  field: string; // key của dữ liệu
  header: string; // tiêu đề
  width?: string;
  type?: 'text' | 'date' | 'number' | 'custom';
}
