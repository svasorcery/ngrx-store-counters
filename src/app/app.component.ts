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
    counters: Observable<any[]>;

    constructor(private store: Store<any>) {
        this.counters = this.store.select('countersList');
    }

    onAddCounter() {
        this.store.dispatch(new Counter.Add(Counter.getId()));
    }

    onRemoveCounter(id: number) {
        this.store.dispatch(new Counter.Remove(id));
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
