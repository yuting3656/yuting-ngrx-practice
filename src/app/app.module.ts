import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

// ngrx
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

// ngx translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// form Module
import { FormsModule } from '@angular/forms';
import { RxjsTaskInputComponent } from './rxjs-tasks/rxjs-task-input/rxjs-task-input.component';
import { RxjsTaskApiComponent } from './rxjs-tasks/rxjs-task-api/rxjs-task-api.component';
import { RxjsTaskComponent } from './rxjs-tasks/rxjs-task/rxjs-task.component';
import { MenuProjectComponent } from './menu-project/menu-project.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';


// AOT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    RxjsTaskComponent,
    RxjsTaskInputComponent,
    RxjsTaskApiComponent,
    MenuProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    // router
    StoreModule.forRoot({count: counterReducer}),
    //
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
