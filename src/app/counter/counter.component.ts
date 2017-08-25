import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

export class Counter {
    constructor(
        public id: number,
        public value: number
    ) { }
}

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrls: [ './counter.component.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
    @Input() counter: Store<Counter>;

    @Output() increment: EventEmitter<number> = new EventEmitter();
    @Output() decrement: EventEmitter<number> = new EventEmitter();
    @Output() reset: EventEmitter<number> = new EventEmitter();
}
