import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {'class': 'collapse navbar-collapse navbar-toggleable-sm navbar-ex1-collapse'}
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
