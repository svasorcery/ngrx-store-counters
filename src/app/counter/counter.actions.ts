import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';
export const RESET = '[Counter] Reset';

export interface ICounterAction extends Action {
    id: any;
    value?: number;
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

export type All
    = Increment
    | Decrement
    | Reset;
