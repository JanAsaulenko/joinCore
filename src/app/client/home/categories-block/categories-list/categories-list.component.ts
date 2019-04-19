import {Component, OnInit, Input, Renderer2, ElementRef, OnDestroy} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {filter, map, switchMap, tap, delay} from 'rxjs/operators';
import {ItemsService} from '../../../../shared/services/home/items/items.service';
import Itemtype from '../../../../shared/interfaces/CategoryItem';
import {from, fromEvent, of} from 'rxjs';
import {childOfKind} from 'tslint';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit, OnDestroy {

  @Input() item;
  public targetCategory;
  public categoryList = [];
  public subscriptions;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemsService: ItemsService) {

  }


  ngOnInit() {
    this.targetCategory = this.route.paramMap;
    const from$ = this.targetCategory
      .pipe(tap(() => {
        this.categoryList.length = 0;
      }), switchMap((data) => this.itemsService.getItems(data)
        .pipe(switchMap((items) => from([items])
          .pipe(switchMap(categories => this.identifyRouteParam(data, categories)))))));
    this.subscriptions = from$.subscribe(data => {
      this.categoryList.push(data);
      console.log(data, this.categoryList);
    });
    // this.itemsService.hello.subscribe(observer => {
    //   console.log(observer);
    //
    // });
  }

  public identifyRouteParam(routeParams, items) {
    return from(items).pipe(filter(data => data['type'] === routeParams.params.name));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}


