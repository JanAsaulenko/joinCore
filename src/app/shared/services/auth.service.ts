import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;
  public redirectURL: string;
  public isRegistratePopupOpened$ = new BehaviorSubject(false);

  constructor(private auth: AngularFireAuth) {
  }

  doGoogleLogin() {
    return new Promise((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.auth.auth.signInWithPopup(provider)
        .then(res => {
          this.isLoggedIn = true;
          this.isRegistratePopupOpened$.next(false);
          return resolve(res);
        })
        .catch(error => reject(error));
    });
  }


  doUserRegister(userInfo) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(userInfo.mail, userInfo.password)
        .then(data => {
          return resolve(data);
        })
        .catch(error => reject(error));
    });
  }

  doPasswordAndLoginAuth(userInfo) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(userInfo.mail, userInfo.password)
        .then(value => {
          this.isLoggedIn = true;
          return resolve(value);
        })
        .catch(error => reject(error));
    });
  }

  logOut() {
    return new Promise((resolve, reject) => {
      // somelogging if it could be real for connecting FireBase
      if (this.isLoggedIn) {
        resolve(true);
        this.isLoggedIn = false;
      } else {
        reject(false);
      }
    });
  }
}
