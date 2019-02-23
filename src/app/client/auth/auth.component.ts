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
    mail: new FormControl('asaulenkojan@gmail.com'),
    password: new FormControl('111111')
  });

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  signInWithGoogle() {
    this.auth.doGoogleLogin().then(data => {
      console.log(data);
    });
  }

  signInWithEmailAndPassword() {
    this.auth.doPasswordAndLoginAuth(this.authFormGroup.value).then((data) => {
      console.log(data);
      const redirectURl = '/cabinet';
      this.auth.isRegistratePopupOpened$.next(false);
      this.router.navigate([redirectURl]).then((value) => console.log(value)
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
