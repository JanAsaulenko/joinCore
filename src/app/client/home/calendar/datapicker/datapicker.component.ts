import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ThemePalette} from '@angular/material';

@Component({
  selector: 'app-datapicker',
  templateUrl: './datapicker.component.html',
  styleUrls: ['./datapicker.component.scss']
})
export class DatapickerComponent implements OnInit, OnChanges {
  @Input() disableCalendar;
  @Output() whenClosed = new EventEmitter();
  @Input() color: ThemePalette;

  constructor() {
  }


  ngOnInit() {
    this.disableCalendar = false;
  }

  ngOnChanges(simpleChange) {
    console.log(simpleChange);
  }


  takeData(data) {
    this.whenClosed.emit(data);
  }
}
