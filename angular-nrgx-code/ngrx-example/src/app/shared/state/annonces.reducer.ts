import { createReducer, on, Action, createSelector } from "@ngrx/store";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { AnnonceModel} from "src/app/shared/models";
import { AnnoncesPageActions, AnnoncesApiActions } from "src/app/annonces/actions";
import { state } from "@angular/animations";


export interface State extends EntityState<AnnonceModel> {
  activeAnnonceId: string | null;
}

export const adapter = createEntityAdapter<AnnonceModel>();

export const initialState: State = adapter.getInitialState({
  activeAnnonceId: null
});

export const annoncesReducer = createReducer(
  initialState,
  on(AnnoncesPageActions.clearSelectedAnnonce, AnnoncesPageActions.enter, state => {
    return {
      ...state,
      activeAnnonceId: null
    };
  }),
  on(AnnoncesPageActions.selectAnnonce, (state, action) => {
    return {
      ...state,
      activeAnnonceId: action.annonceId
    };
}),

on(AnnoncesApiActions.annoncesLoaded, (state, action) => {
  return adapter.addAll(action.annonces, state);
}),

on(AnnoncesApiActions.annonceCreated, (state, action)=>{
      return adapter.addOne(action.annonce, {
        ...state,
        activeAnnonceId: null
      });
}),
on(AnnoncesApiActions.annonceUpdated,(state,action)=>{
  return adapter.updateOne(
    { id: action.annonce.id, changes: action.annonce },
    {
      ...state,
      activeAnnonceId: null
    }
  );
}),
on(AnnoncesApiActions.annonceDeleted, (state, action) => {
  return adapter.removeOne(action.annonceId, state);
  })
);

export function reducer(state: State | undefined, action: Action) {
    return annoncesReducer(state, action);
  }
  
export const  { selectAll, selectEntities } = adapter.getSelectors()
export const selectActiveAnnonceId = (state: State) => state.activeAnnonceId;
export const selectActiveAnnonce = createSelector(
  selectEntities,
  selectActiveAnnonceId,
  (booksEntities, activeBookId) => {
    return activeBookId ? booksEntities[activeBookId]! : null;
  }
);
// export const selectEarningsTotals = createSelector(
//   selectAll,
//   calculateBooksGrossEarnings
// );