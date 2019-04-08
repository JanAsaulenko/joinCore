import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private auth: AuthService, private router: Router) {
  }


  ngOnInit() {
  }

  openAuthForms() {
    this.auth.isRegistratePopupOpened$.next(true);
  }

  outputAcount() {

    this.auth.logOut()
      .then(() => {
        const redirectURl = '/';
        this.router.navigate([redirectURl]);
      })
      .catch(() => this.handleError());
  }

  handleError() {
  }
}
