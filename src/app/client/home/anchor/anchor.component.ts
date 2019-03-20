import {Component, OnInit, NgModule} from '@angular/core';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss'],
})

export class AnchorComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
    ScrollToModule.forRoot()
  ],
  bootstrap: [AnchorComponent]
})


export class AppModule {
}
