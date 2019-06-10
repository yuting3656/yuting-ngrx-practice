import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ngrx-projext';
  observable$;

  ngOnInit() {
    this.observable$ = Observable.create((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    this.observable$.subscribe(
      this.test.bind(this),
      err => { },
      () => console.log('this is the end')
    );
  }

  constructor() {

  }

  ngOnDestroy() {
    this.observable$.unsubscribe();
  }

  test(a) {
    console.log('from this:', this);
    console.log('from this value:', a);
  }

}
