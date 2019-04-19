import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  @Output() redirectToAuth = new EventEmitter();


  private successMessage;
  private errorMessage;
  public formGroup = new FormGroup({
    mail: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl('')
  });

  constructor(private auth: AuthService) {
  }
  ngOnInit() {
  }

  redirectToEnter() {
    this.redirectToAuth.emit('redirect');
  }

  registrateUser() {
    this.auth.doUserRegister(this.formGroup.value).then((value) => {
      this.successMessage = 'User registrate have been successfull';
      this.redirectToAuth.emit('success'); ///
    }).catch((error) => {
      console.log(error);
      this.errorMessage = `User registration failed`;
    });
  }
}
