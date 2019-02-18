import {Component, EventEmitter,  OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() openAuth = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  openAuthForms() {
    this.openAuth.emit('open');
  }
}
