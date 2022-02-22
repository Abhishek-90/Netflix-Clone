import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchVisible:boolean = false
  onlySearchDivClassName:string = "search-section"
  constructor() { }

  ngOnInit(): void {
  }

  showSearch() {
    this.searchVisible = !this.searchVisible;
    
    if(!this.searchVisible) {
      this.onlySearchDivClassName = "search-section-animation"
    }
    
  }
}
