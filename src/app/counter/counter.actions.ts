import { Action } from '@ngrx/store';

export const ADD_COUNTER = '[CounterList] AddCounter';
export const REMOVE_COUNTER = '[CounterList] RemoveCounter';
export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';
export const RESET = '[Counter] Reset';
export const RESET_ALL = '[CounterList] Reset All';

export interface ICounterAction extends Action {
    id?: number;
    value?: number;
}

export class Add implements ICounterAction {
    readonly type = ADD_COUNTER;
    constructor(public id: number) { }
}

export class Remove implements ICounterAction {
    readonly type = REMOVE_COUNTER;
    constructor(public id: number) { }
}

export class Increment implements ICounterAction {
    readonly type = INCREMENT;
    constructor(public id: number) { }
}

export class Decrement implements ICounterAction {
    readonly type = DECREMENT;
    constructor(public id: number) { }
}

export class Reset implements ICounterAction {
    readonly type = RESET;
    constructor(public id: number, public value: number = 0) { }
}

export class ResetAll implements ICounterAction {
    readonly type = RESET_ALL;
}

export type All
    = Add
    | Remove
    | Increment
    | Decrement
    | Reset
    | ResetAll;


// fake id starting at random number
let randomStart = Math.floor(Math.random() * (1000));
export function getId(): number {
    return ++randomStart;
}
