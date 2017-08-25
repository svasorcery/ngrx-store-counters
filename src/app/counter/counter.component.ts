import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
    @Input() counter: number;

    @Output() increment: EventEmitter<number> = new EventEmitter();
    @Output() decrement: EventEmitter<number> = new EventEmitter();
    @Output() reset: EventEmitter<number> = new EventEmitter();
}
