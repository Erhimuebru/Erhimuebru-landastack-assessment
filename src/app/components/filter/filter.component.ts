import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  searchTerm: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearchChange(): void {
    this.search.emit(this.searchTerm);
  }
}
