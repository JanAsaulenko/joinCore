import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {fromEvent} from 'rxjs';
import {filter, map} from 'rxjs/operators';

// import Reference = firebase.storage.Reference;

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


  ngOnInit() {
  }

  triggerAuth() {
    this.authOpened ? this.auth.isRegistratePopupOpened$.next(false) : this.auth.isRegistratePopupOpened$.next(false);
  }
}
