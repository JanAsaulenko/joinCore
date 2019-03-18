import {Injectable} from '@angular/core';
import Feedback from '../../interfaces/Feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private mock1 = new Feedback();
  private mockFeedbacks = [this.mock1];


  constructor() {
    this.setMockData();
  }

  setMockData() {
    this.mock1.Image = '';
    this.mock1.Range = 5;
    this.mock1.Article = 'What guests are saying about homes';
    this.mock1.Comment = '  Such a lovely cottage in a beautiful neighborhood. Arrangements for check-i';
    this.mock1.Avatar = '';
    this.mock1.Country = 'USA';
    this.mock1.Name = 'Johnt tatan';
  }

  returnLatestFeedbacks() {
    return this.mockFeedbacks;
  }

}
