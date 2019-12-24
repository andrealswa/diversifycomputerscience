// Note that we earlier used this Action import.
import { Action } from "@ngrx/store";

import { UIActions, START_LOADING, STOP_LOADING } from "./ui.actions";
// Use of UIActions from the ui.actions.
// Note that Action is already being used in ui.actions.
// We have case START_LOADING and so on.

// Step 1: A very simple state definition.
export interface State {
  isLoading: boolean;
}

// Step 2: The actual initial state we want to use.
const initialState: State = {
  isLoading: false
};

// Step 3: Now make the reducer function.
/*
export function uiReducer(state = initialState, action: Action) {
  switch(action.type) {
    case 'START_LOADING':
      return {
        isLoading: true
      };
    
  }
}
*/
export function uiReducer(state = initialState, action: UIActions) {
  switch (action.type) {
    case START_LOADING:
      return {
        isLoading: true
      };
    case STOP_LOADING:
      return {
        isLoading: false
      };
    default: {
      return state;
    }
  }
}

export const getIsLoading = (state: State) => state.isLoading;
