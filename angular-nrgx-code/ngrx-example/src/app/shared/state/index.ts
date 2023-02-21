import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromAuth from "./auth.reducer";
import * as fromAnnonces from "./annonces.reducer";
import { logoutMetareducer } from "./logout.metareducer";


export interface State {
  auth: fromAuth.State;
  annonces: fromAnnonces.State;
}


export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.reducer,
    annonces: fromAnnonces.reducer
};

export const metaReducers: MetaReducer<State>[] = [logoutMetareducer];
/**
 * Auth Selectors
 */
 export const selectAuthState = (state: State) => state.auth;
 export const selectGettingAuthStatus = createSelector(
   selectAuthState,
   fromAuth.selectGettingStatus
 );
 export const selectAuthUser = createSelector(
   selectAuthState,
   fromAuth.selectUser
 );
 export const selectAuthError = createSelector(
   selectAuthState,
   fromAuth.selectError
 );

/**
 * Annonces Selectors
 */
 export const selectAnnoncesState = (state: State) => state.annonces;
 export const selectAllAnnonces = createSelector(
   selectAnnoncesState,
   fromAnnonces.selectAll
 );
 export const selectActiveAnnonce = createSelector(
   selectAnnoncesState,
   fromAnnonces.selectActiveAnnonce
 );
//  export const selectBooksEarningsTotals = createSelector(
//    selectAnnoncesState,
//    fromAnnonces.selectEarningsTotals
//  );