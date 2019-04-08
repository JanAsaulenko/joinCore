import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('disabled', [
      state('open', style({
        opacity: 0.5,
        backgroundColor: 'black',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%'
      })),
      state('closed', style({
        opacity: 0.5,
      })),
      transition('open => closed', []),
      transition('closed => open', []),
    ]),

    trigger('trigger', [
      state('open', style({})),

      state('closed', style({
        opacity: 0.5,
        backgroundColor: 'green',
        left: '-50%'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ]
})
export class MainComponent implements OnInit {
  public authOpened = false;
  public isDisabled = false;

  constructor(private auth: AuthService) {
    auth.isRegistratePopupOpened$.subscribe(data => {
      this.isDisabled = data;
      this.authOpened = data;
    });
  }


  ngOnInit() {
  }

  closePopup() {
    this.auth.isRegistratePopupOpened$.next(false);
  }
}
