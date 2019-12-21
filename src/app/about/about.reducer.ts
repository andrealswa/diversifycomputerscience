import { Action, createFeatureSelector, createSelector } from "@ngrx/store";

import {
  AboutActions,
  SET_AVAILABLE_ABOUTS,
  SET_FINISHED_ABOUTS,
  START_ABOUT,
  STOP_ABOUT
} from "./about.actions";
import { Entries } from "./entries.model";
import * as fromRoot from "../app.reducer";

export interface AboutState {
  availableAllEntries: Entries[];
  finishedAllEntries: Entries[];
  activeAbout: Entries;
}

export interface State extends fromRoot.State {
  about: AboutState;
}

const initialState: AboutState = {
  availableAllEntries: [],
  finishedAllEntries: [],
  activeAbout: null
};

export function aboutReducer(state = initialState, action: AboutActions) {
  switch (action.type) {
    case SET_AVAILABLE_ABOUTS:
      return {
        ...state,
        availableAllEntries: action.payload
      };
    case SET_FINISHED_ABOUTS:
      return {
        ...state,
        finishedAllEntries: action.payload
      };
    case START_ABOUT:
      return {
        ...state,
        activeAbout: {
          ...state.availableAllEntries.find(ex => ex.name === action.payload)
        }
      };
    case STOP_ABOUT:
      return {
        ...state,
        activeAbout: null
      };
    default: {
      return state;
    }
  }
}

export const getAboutState = createFeatureSelector<AboutState>("about");

export const getAvailableAllEntries = createSelector(
  getAboutState,
  (state: AboutState) => state.availableAllEntries
);
export const getFinishedAllEntries = createSelector(
  getAboutState,
  (state: AboutState) => state.finishedAllEntries
);
export const getActiveAbout = createSelector(
  getAboutState,
  (state: AboutState) => state.activeAbout
);
export const getIsAbout = createSelector(
  getAboutState,
  (state: AboutState) => state.activeAbout != null
);
