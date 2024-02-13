import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchName: string = '';
  resetStatus: boolean = true ;
  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
  }

  onSearchSubmit() {
    this.passData();
  }
  reset() {
    this.searchName = '';
    this.passData();
  }

  private passData():void {
    if(this.router.url === '/') {
      this.router.navigate(['/catalog'])
    }
    this.searchService.transferData(this.searchName);
  }
}

