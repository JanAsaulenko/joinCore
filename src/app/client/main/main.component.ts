import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public authOpened = false;

  constructor(private auth: AuthService) {
    auth.isRegistratePopupOpened$.subscribe(data => {
      this.authOpened = data;
    });
  }

  @HostListener('click', ['$event'])
  closePopup($event) {
    if ($event.target.className === 'pop-up' || $event.target.className === 'form ng-untouched ng-pristine ng-valid' ) {
      this.authOpened = false;
    }
  }

  ngOnInit() {
  }
  triggerAuth() {
    this.authOpened ? this.auth.isRegistratePopupOpened$.next(false) : this.auth.isRegistratePopupOpened$.next(false);
  }
}
