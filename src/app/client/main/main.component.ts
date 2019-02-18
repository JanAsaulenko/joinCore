import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private authOpened = false;

  constructor() {
  }

  ngOnInit() {
  }

  triggerAuth() {
    this.authOpened = !this.authOpened;
  }
}
