import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  @Input() categoryItem = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
