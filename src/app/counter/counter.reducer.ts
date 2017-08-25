import { Action, State } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export type Action = CounterActions.All;

export function counterReducer(state: number = 0, action: Action) {
    switch (action.type) {
        case CounterActions.INCREMENT:
            return state + 1;

        case CounterActions.DECREMENT:
            return state - 1;

        case CounterActions.RESET:
            return (<any>action).payload;

        default:
            return state;
    }
}
