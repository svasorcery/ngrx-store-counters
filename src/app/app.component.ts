import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as Counter from './counter/counter.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent {
    counter: Observable<number>;

    constructor(private store: Store<any>) {
        this.counter = this.store.select('counter');
        this.counter.subscribe(x => console.log('counter:', x));
    }

    onIncrement() {
        this.store.dispatch(new Counter.Increment());
    }

    onDecrement() {
        this.store.dispatch(new Counter.Decrement());
    }

    onReset() {
        this.store.dispatch(new Counter.Reset(0));
    }
}
