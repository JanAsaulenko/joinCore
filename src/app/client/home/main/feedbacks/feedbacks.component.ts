import {Component, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {
  @Input() item;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    this.createStars();
  }

  createStars() {
    const block = this.renderer.createElement('div');
    this.renderer.addClass(block, 'star-block');
    for (let i = 0; i < this.item.Range; i++) {
      const star = this.renderer.createElement('span');
      const starText = this.renderer.createText('☆');
      this.renderer.appendChild(star, starText);
      this.renderer.appendChild(block, star);
    }
    console.log(block);
    const ratingBlock = this.renderer.selectRootElement('.rating');
    this.renderer.appendChild(ratingBlock, block);
  }


}
