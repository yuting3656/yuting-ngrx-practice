import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { debounceTime, map, switchMap, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-task-api',
  templateUrl: './rxjs-task-api.component.html',
  styleUrls: ['./rxjs-task-api.component.css']
})
export class RxjsTaskApiComponent implements OnInit {

  constructor(private http: HttpClient) { }
  searchSubject$ = new Subject<string>();

  result$: Observable<any>;

  ngOnInit() {
      this.result$ = this.searchSubject$.pipe(
        debounceTime(2000),
        // skip any value is identical
        distinctUntilChanged(),
        tap( x => console.log('tap', x)),
        switchMap(searchString => this.queryAPI(searchString)),
      );
  }

  queryAPI(searchString) {
    console.log('queryAPI', searchString);
    return this.http.get(`https://www.reddit.com/r/aww/search.json?q=${searchString}`
    ).pipe(
     map(result => result['data']['children'] )
    );

  }

  inputChanged($event) {
    console.log('input changed', $event);
    this.searchSubject$.next($event);
  }

}
