import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() color;
  public startDate;

  constructor() {
  }

  ngOnInit() {
    this.startDate = new Date().getFullYear();
    setTimeout(() => {
      this.color = 'blue';
    }, 2000);
  }


}
