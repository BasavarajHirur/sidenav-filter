import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'filter-nav';
  public status = ['All', 'Active', 'Completed'];
  public categories = ['Software', 'Hardware', 'Management'];
  public filtedData: any[] = [];

  public data = [
    {
      label: "Website",
      status: "Active",
      category: "Software",
      id: 1,
    },
    {
      label: "BS6 Engine",
      status: "Completed",
      category: "Hardware",
      id: 1,
    },
    {
      label: "Data Entry",
      status: "Active",
      category: "Management",
      id: 1,
    }
  ];

  public selectedFilter: any = { status: '', category: '' };

  constructor() { }

  ngOnInit(): void {
    this.filtedData = this.data;
  }

  selectFilter(filter: string, type: string) {
    this.selectedFilter[type] = filter;
    this.filtedData = this.data.filter(el => {
      const statusFilter = this.selectedFilter.status === 'All' || this.selectedFilter.status === el.status;
      const categoryFilter = this.selectedFilter.category ? this.selectedFilter.category === el.category : true;
      return statusFilter && categoryFilter;
    })
  }
}
