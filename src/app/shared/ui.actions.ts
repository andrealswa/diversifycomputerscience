import { Action } from "@ngrx/store";
/*
Note that it is a huge pain and error prone to constantly
be retyping constants for stuff.

We make this file to hold our constants to protect us from ourselves.
Tiny spelling errors can be impossible to deal with.
So the potential for these spelling errors drives us to create entirely
new files to manage that potential for mistyping.
*/

// The two constants we want.
export const START_LOADING = "[UI] Start Loading";
export const STOP_LOADING = "[UI] Stop Loading";

// These next two classes are for typescript autocomplete.
// Not dealing with payloads yet.
export class StartLoading implements Action {
  readonly type = START_LOADING;
}

export class StopLoading implements Action {
  readonly type = STOP_LOADING;
}

// Make a new type you can use.
export type UIActions = StartLoading | StopLoading;
