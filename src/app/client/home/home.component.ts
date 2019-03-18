import {Component, OnInit} from '@angular/core';
import {FeedbackService} from '../../shared/services/home/feedback.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public feedbacks;


  constructor(private feedbackService: FeedbackService) {
  }

  ngOnInit() {
    this.feedbacks = this.feedbackService.returnLatestFeedbacks();
    this.feedbacks = this.feedbackService.returnLatestFeedbacks();
  }



}
