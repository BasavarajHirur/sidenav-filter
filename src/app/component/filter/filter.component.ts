import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input('filterValue') filterValue: string = '';
  @Input('filters') filters: any;
  @Output('filterChange') filterChange = new EventEmitter<string>();
  public selectedFilter: string = 'All';

  selectFilter(filter: string) {
    if (this.filterValue === 'Category' && this.selectedFilter === filter) {
      this.selectedFilter = '';
    } else {
      this.selectedFilter = filter;
    }

    this.filterChange.emit(this.selectedFilter);
  }
}
