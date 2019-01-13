import { Component, OnInit } from '@angular/core';
import { Store, select }  from '@ngrx/store';
import { Decrement, Increment, Rest } from '../counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) { 
    this.count$ = store.pipe(select('count'));
  }

  // + increment
  increment() {
    this.store.dispatch(new Increment());
  }

  // - decrement
  decrement() {
    this.store.dispatch(new Decrement());
  }

  // reset 
  reset() {
    this.store.dispatch(new Rest());
  }


  ngOnInit() {
  }

}
