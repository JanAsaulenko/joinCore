import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {fromEvent} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';
import {trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [trigger('startFinish', [
    state('start', style({})),
    state('finish', style({direction: '-100%'})),
    transition('start => finish', [
      animate('0,8s')
    ]),

  ])],
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
    this.closedTtemMap.set('form_element-input', [
      () => {
        return true;
      }
    ]);
    this.closedTtemMap.set('form', [
      () => {

        // this.auth.isRegistratePopupOpened$.next(false);
        this.hideAuthWindow.call(this);
      },
      () => {
        return true;
      }
    ]);
  }

  hideAuthWindow() {
    console.log(this);
    this.auth.isRegistratePopupOpened$.next(false);
  }

  spliceClassName(event: Object) {
    const fullClassName = event['className'];
    const arr = fullClassName.split(' ');
    return arr[0];
  }

  filterForHidingWindow() {
    return filter(data => {
      if (this.closedTtemMap.get(this.spliceClassName(data))) {
        this.closedTtemMap.get(this.spliceClassName(data)).forEach(callback => {
          callback();
        });
      }
      if (data['className'] === 'form ng-untouched ng-pristine ng-valid' || data['className'] === 'pop-up') {
        this.auth.isRegistratePopupOpened$.next(false);
        return true;
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
      console.log(subscription);
      subscription.unsubscribe();
    });
  }
}
