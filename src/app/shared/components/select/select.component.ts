import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-select',
  imports: [NgFor, MatIconModule, NgClass],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  @Input() label: string = 'Chọn mục';
  @Input() options: { label: string; value: any }[] = [];
  @Input() placeholder: string = ' Chọn ';

  @Output() selected = new EventEmitter<any>();
  selectedValue: any;
  isOpen = false;

  onMouseDown() {
    console.log('click');
    this.isOpen = true;
  }
  onFocus() {
    this.isOpen = true;
  }

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedValue = value;
    this.selected.emit(value);

    this.isOpen = false;
  }

  onBlur() {
    this.isOpen = false;
  }
}
