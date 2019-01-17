import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-task-input',
  templateUrl: './rxjs-task-input.component.html',
  styleUrls: ['./rxjs-task-input.component.css']
})
export class RxjsTaskInputComponent implements OnInit, OnDestroy {

  searchSubject$ = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.searchSubject$.pipe(
      debounceTime(2000),
      ).subscribe(x => console.log('debounced: ', x));
  }

  inputChanged($event) {
    console.log('input changed', $event);
    this.searchSubject$.next($event);
  }

  ngOnDestroy(): void {
    this.searchSubject$.unsubscribe();
  }

}
