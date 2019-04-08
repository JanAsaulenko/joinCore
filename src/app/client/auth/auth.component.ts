import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {fromEvent} from 'rxjs';
import {filter, map} from 'rxjs/operators';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  public authForm = true;
  public subscriptions = [];
  public closedTtemMap = new Map();
  private authFormGroup = new FormGroup({
    mail: new FormControl('romandavi@gmail.com'),
    password: new FormControl('111111')
  });
  @ViewChild('popup') popup;

  constructor(private auth: AuthService, private router: Router) {

  }


  ngOnInit() {
    this.initClosedMap();
    this.closePopup(this.popup.nativeElement);
  }

  initClosedMap() {
    this.closedTtemMap.set('pop-up', [
      () => {
        this.hideAuthWindow.call(this);
      },
    ]);
    this.closedTtemMap.set('btn-close', [
      () => {
        this.hideAuthWindow.call(this);
      },
    ]);
  }

  hideAuthWindow() {
    this.auth.isRegistratePopupOpened$.next(false);
  }


  filterForHidingWindow() {
    return filter(data => {
      if (this.closedTtemMap.get(data['className'])) {
        this.closedTtemMap.get((data['className'])).forEach(callback => {
          callback();
        });
        return false;
      }
    });
  }

  closePopup(target) {
    const mousedown$ = fromEvent(target, 'mousedown');
    const customFilter = this.filterForHidingWindow();
    const stream$ = mousedown$.pipe(map(event => event['target']),
      customFilter
    );
    this.subscriptions.push(stream$.subscribe());
    this.subscriptions.push(mousedown$.subscribe());
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

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
