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
  @Input() totalItems = 100;
  @Input() currentPage = 1;

  @Input() showPagination = true;
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize) || 1;
  }
  onPageChange(page: number) {
    // EventEmit nếu cần
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      // TODO: Gọi API hoặc cập nhật dataSource tương ứng
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      // TODO: Gọi API hoặc cập nhật dataSource tương ứng
    }
  }
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      // TODO: Gọi API hoặc cập nhật dataSource tương ứng
    }
  }
  get visiblePages(): number[] {
    const pages: number[] = [];
    if (this.totalPages <= 5) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else if (this.currentPage <= 3) {
      // Đầu danh sách: 1 2 3 4 ... N
      pages.push(1, 2, 3, 4, this.totalPages);
    } else if (this.currentPage >= this.totalPages - 2) {
      // Cuối danh sách: 1 ... N-3 N-2 N-1 N
      pages.push(
        1,
        this.totalPages - 3,
        this.totalPages - 2,
        this.totalPages - 1,
        this.totalPages,
      );
    } else {
      // Ở giữa: 1 ... P-1 P P+1 ... N
      pages.push(
        1,
        this.currentPage - 1,
        this.currentPage,
        this.currentPage + 1,
        this.totalPages,
      );
    }
    return Array.from(new Set(pages)).filter(
      (page) => page >= 1 && page <= this.totalPages,
    );
  }
}

export interface TableColumn {
  field: string; // key của dữ liệu
  header: string; // tiêu đề
  width?: string;
  type?: 'text' | 'date' | 'number' | 'custom';
}
