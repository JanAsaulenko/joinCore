import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public authForm = true;
  private authFormGroup = new FormGroup({
    mail: new FormControl('romandav@gmail.com'),
    password: new FormControl('111111')
  });

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  signInWithGoogle() {
    this.auth.doGoogleLogin().then(() => {
      const redirectURL = '/cabinet';
      this.redirectToPages(redirectURL).then(value => console.log(value)).catch(error => console.log(error));
    });
  }

  redirectToPages(pageName) {
    return this.router.navigate([pageName]);
  }

  signInWithEmailAndPassword() {
    this.auth.doPasswordAndLoginAuth(this.authFormGroup.value).then(() => {
      const redirectURl = '/cabinet';
      this.auth.isRegistratePopupOpened$.next(false);
      this.redirectToPages(redirectURl).then((value) => console.log(value)
      ).catch(error => console.log(error));
    }).catch(error => {
      console.error(error);
    });
  }

  openRegistrationForm() {
    this.authForm = !this.authForm;
  }

  openAuthForm() {
    this.authForm = !this.authForm;
  }

}
