import { Action } from "@ngrx/store";

import { Entries } from "./entries.model";

export const SET_AVAILABLE_ABOUTS = "[About] Set Available Abouts";
export const SET_FINISHED_ABOUTS = "[About] Set Finished Abouts";
export const START_ABOUT = "[About] Start About";
export const STOP_ABOUT = "[About] Stop About";

export class SetAvailableAbouts implements Action {
  readonly type = SET_AVAILABLE_ABOUTS;

  constructor(public payload: Entries[]) {}
}

export class SetFinishedAbouts implements Action {
  readonly type = SET_FINISHED_ABOUTS;

  constructor(public payload: Entries[]) {}
}

export class StartAbout implements Action {
  readonly type = START_ABOUT;

  constructor(public payload: string) {}
}

export class StopAbout implements Action {
  readonly type = STOP_ABOUT;
}

export type AboutActions =
  | SetAvailableAbouts
  | SetFinishedAbouts
  | StartAbout
  | StopAbout;
