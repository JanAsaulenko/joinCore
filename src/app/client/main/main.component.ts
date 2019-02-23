import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private authOpened = false;

  constructor(private auth: AuthService) {
    auth.isRegistratePopupOpened$.subscribe(data => {
      this.authOpened = data;
    });
  }


  ngOnInit() {
  }

  triggerAuth() {
    this.authOpened ? this.auth.isRegistratePopupOpened$.next(false) : this.auth.isRegistratePopupOpened$.next(false);
  }
}
