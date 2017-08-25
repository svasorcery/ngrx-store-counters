import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { countersListReducer } from './counter/counter.reducer';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        StoreModule.forRoot({ countersList: countersListReducer })
    ],
    declarations: [
        AppComponent,
        CounterComponent
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
