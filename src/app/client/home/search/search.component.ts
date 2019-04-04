import {Component, OnInit, Input, HostBinding} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [trigger, state, style, animate, transition]
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
