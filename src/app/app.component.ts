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
    counter: Observable<any>;

    constructor(private store: Store<any>) {
        this.counter = this.store.select('counter');
    }

    onIncrement(id: number) {
        this.store.dispatch(new Counter.Increment(id));
    }

    onDecrement(id: number) {
        this.store.dispatch(new Counter.Decrement(id));
    }

    onReset(id: number) {
        this.store.dispatch(new Counter.Reset(id, 0));
    }
}
