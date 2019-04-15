import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Decrement, Increment, Rest } from '../counter.actions';
import { Observable } from 'rxjs';

// translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(
    private store: Store<{count: number}>,
    private translate: TranslateService
    ) {
    this.count$ = store.pipe(select('count'));

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    this.translate.use('zh');
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

  //
  onLanguageSelect(language) {
    console.log(language);
    this.translate.use(language);
  }

}
