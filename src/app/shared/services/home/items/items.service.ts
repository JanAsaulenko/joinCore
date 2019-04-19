import {Injectable} from '@angular/core';
import {fromEvent, interval, merge, of} from 'rxjs';
import {mapTo, scan, startWith, switchMap, takeWhile} from 'rxjs/operators';
import {empty} from 'rxjs/internal/Observer';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private items = [
    {
      type: 'apartment',
      id: 1,
      address: 'Soborna 52 c.Vinnytsia',
      bedRoms: 2,
      price: '3500'
    },
    {
      type: 'apartment',
      id: 2,
      address: 'Kirsonova 52 c.Vinnytsia',
      bedRoms: 2,
      price: '3500'
    },
    {
      type: 'apartment',
      id: 3,
      address: 'Abalova 52 c.Vinnitsya',
      bedRoms: 2,
      price: '3500'
    },
    {
      type: 'houses',
      id: 1,
      address: 'Komarova',
      bedRoms: 2,
      price: '100'
    },
    {
      type: 'houses',
      id: 2,
      address: ' chilli pizza',
      bedRoms: 2,
      price: '50'
    },
    {
      type: 'houses',
      id: 3,
      address: 'Lebedinskogo ',
      bedRoms: 2,
      price: '3500'
    },
    {
      type: 'houses',
      id: 4,
      address: 'lermontov street ',
      bedRoms: 6,
      price: '3500'
    }
  ];
  // public githubUsers = `https://api.github.com/users?per_page=2`;
  // public  users = ajax.getJSON(this.githubUsers);
  // public  subscribe = this.users.subscribe(
  //   res => console.log(res),
  //   err => console.log (err)
  // );
  // public hello = Observable.create(function (observer) {
  //   observer.next('hello');
  //   observer.next('world');
  //   observer.complete();
  // });
  //
  // public subscribe = this.hello.subscribe(val => console.log(val));

  //  public countdownwSecond  = 10 ;
  //  public setHTML = id => val => (document.getElementById(id).innerHTML = val);
  //  public pauseButton = document.getElementById('pause');
  //  public resumeButton = document.getElementById('resume');
  //  public  interval$ = interval(1000).pipe(mapTo(-1));
  //  public pause$ = fromEvent(this.pauseButton, 'click').pipe(mapTo(false));
  //  public  resume$ = fromEvent(this.resumeButton, 'click').pipe(mapTo(true));
  //  public  timer$ = merge(this.pause$,this.resume$).pipe( startWith(true),
  //    // if timer is paused return empty observable
  //    switchMap(val => (val ? this.interval$ : empty())),
  //    scan((acc, curr) => (curr ? curr + acc : acc), this.countdownwSecond),
  //    takeWhile(v => v >= 0)).subscribe(this.setHTML('remaining'));
  constructor() {
  }

  public getItems(type) {
    return of(this.items);
  }

}
