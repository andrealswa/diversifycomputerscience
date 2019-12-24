// This is the main reducer for the program.
// A reducer is just a function.

/*

// This interface State is just for google engineering practices.
// It is designed to augment the const initialState with a State type.
// This makes the code more robust to fail at compile time.
interface State {
  isLoading: boolean;
}

// The state we want to return, can be like this.
// This is the state for our application, we can even give it an 
// Interface above.
const initialState = {
  isLoading: false;
}


Note that you would normally manually register appReducer in your
app.module.ts file within:

imports: [
  StoreModule.forRoot({ui: appReducer})
]

We have to be able to dispatch actions to the store through our reducer.
We have to also be able to listen to changes or read the data.

Where do we dispatch the loading action.



// We provide a default first time argument of state = initialState
// in case this function is called for the first time.
export function appReducer(state = initialState, action) {
  // Dispatch actions to change the store.
  // Actions reach reducers, and are passed in.
  // Returns must return a state, the new state.
  // Don't return the old state like a silly person.

  // Before we return we want to change the state from isLoading false 
  // to true, to toggle it.
  // What we are supposed to do is indicated by the action argument.
  // The action argument could be a lot of things, so we use a switch.
  // This is probably the only time we seriously use switches it seems.
  
  // All actions have a type property.
  // action.type properties are defined as constants in screaming snake case.
  switch(action.type) {
    case 'START_LOADING':
      return {
        isLoading: true
      };
    case 'STOP_LOADING':
      return {
        isLoading: false
      };
    default:
      return {
        return state;
      }
  }
  That seems to be it for our switch statement.
  Tiny bit of extra work to wrap the head around the appearance
  of using a switch statement.

  We need to make a store that can be manipulated by this reducer,
  that holds our data.


  return state;
}
*/

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

import * as fromUi from "./shared/ui.reducer";
import * as fromAuth from "./auth/auth.reducer";

// This is the application wide state.
// This is designed to inform the global store what it should look like.
// Combination of two state slices to form the global state.
export interface State {
  ui: fromUi.State; // State for ui.reducer
  auth: fromAuth.State; // State for auth.reducer
}

// All reducers need to be grouped together.
// This is called the ActionReducerMap.
// ActionReducerMap mapped to their respective state slices.
export const reducers: ActionReducerMap<State> = {
  ui: fromUi.uiReducer,
  auth: fromAuth.authReducer
};

// Can also make FeatureSelector<fromUi.State>('ui')
export const getUiState = createFeatureSelector<fromUi.State>("ui");
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);

export const getAuthState = createFeatureSelector<fromAuth.State>("auth");
export const getIsAuth = createSelector(getAuthState, fromAuth.getIsAuth);
/*
The second argument is to tell the selector what to do with the
returned object.

Pulling out the isloading state. Takes a state as input.
Gives the result of the isloading property.

Simply go to fromUi.getIsLoading.

The left most argument tells us which state to inspect.
The right most argument tells us to fetch the property.
*/
