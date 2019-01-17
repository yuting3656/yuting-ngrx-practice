import { Component, OnInit, OnDestroy } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-rxjs-task',
  templateUrl: './rxjs-task.component.html',
  styleUrls: ['./rxjs-task.component.css']
})
export class RxjsTaskComponent implements OnInit, OnDestroy {

  // 畫面一啟動時 button 顯示
  ifClickMe = true;

  obs$: Observable<any>;
  constructor() {
  }

  ngOnInit() {
    fromEvent(document, 'click').subscribe(x => console.log(x));
  }

  clickMe() {
    this.ifClickMe = false;
    this.obs$ = ajax.getJSON(`https://api.github.com/users?per_page=5`).pipe(
      map(userResponse => console.log('user: ', userResponse)),
    );
    this.obs$.subscribe(
      () => {},
      error => {},
      () => {
        this.ifClickMe = true;
        console.log('this is the end');
      });
    }
  ngOnDestroy() {
  }

}
