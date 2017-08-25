import { Action, State } from '@ngrx/store';

import * as CounterActions from './counter.actions';
import { ICounterAction } from './counter.actions';
import { Counter } from './counter.component';

export type Action = CounterActions.All;

export function counterReducer(state: Counter = new Counter(0, 0), action: ICounterAction): Counter {
    switch (action.type) {
        case CounterActions.INCREMENT:
            if (state.id === action.id) {
                return Object.assign({}, state, state.value += 1);
            }
            return state;

        case CounterActions.DECREMENT:
            if (state.id === action.id) {
                return Object.assign({}, state, state.value -= 1);
            }
            return state;

        case CounterActions.RESET:
            if (state.id === action.id) {
                return Object.assign({}, state, state.value = action.value);
            }
            return state;

        default:
            return state;
    }
}
