import {Component, OnInit, Input, Renderer2, ElementRef} from '@angular/core';



@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  @Input() item;
  constructor(private renderer: Renderer2, private el: ElementRef) {

  }

  ngOnInit() {
    const div = this.renderer.createElement('div');
    this.renderer.addClass(this.el.nativeElement, 'categories-main');
    const text = this.renderer.createText('Higher Betty Who');
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);

  }


}


