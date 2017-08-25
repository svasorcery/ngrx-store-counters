import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent {
    counter: number = 0;
    
    onIncrement() {
        this.counter++;
        console.log('incremented, result:', this.counter);
    }

    onDecrement() {
        this.counter--;
        console.log('decremented, result:', this.counter);
    }

    onReset() {
        this.counter = 0;
        console.log('reseted, result:', this.counter);
    }
}
