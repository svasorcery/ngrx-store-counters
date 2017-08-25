import { Action, State } from '@ngrx/store';

import * as CounterActions from './counter.actions';
import { ICounterAction } from './counter.actions';
import { Counter } from './counter.component';

export type Action = CounterActions.All;

export function counterReducer(state: Counter, action: ICounterAction): Counter {
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

export function countersListReducer (state: Counter[] = [], action: ICounterAction) {
    switch (action.type) {
        case CounterActions.ADD_COUNTER:
            return [ ...state, Object.assign({}, new Counter(action.id, 0)) ];

        case CounterActions.REMOVE_COUNTER:
            return state.filter(counter => counter.id !== action.id);

        case CounterActions.INCREMENT:
            return state.map(counter => counterReducer(counter, action));

        case CounterActions.DECREMENT:
            return state.map(counter => counterReducer(counter, action));

        case CounterActions.RESET:
            return state.map(counter => counterReducer(counter, action));

        case CounterActions.RESET_ALL:
            return state.map(counter => counterReducer(counter, new CounterActions.Reset(counter.id)));

        default:
            return state;
    }
}
