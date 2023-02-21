import { createAction, props } from "@ngrx/store";
import { AnnonceRequiredProps } from "src/app/shared/models";

export const enter = createAction("[Annonces Page] Enter");

export const selectAnnonce = createAction(
  "[Annonces Page] Select Annonce",
  props<{ annonceId: string }>()
);

export const clearSelectedAnnonce = createAction(
  "[Annonces Page] Clear Selected Annonce"
);

export const createAnnonce = createAction(
  "[Annonces Page] Create Annonce",
  props<{ annonce: AnnonceRequiredProps }>()
);

export const updateAnnonce = createAction(
  "[Annonces Page] Update Annonce",
  props<{ annonceId: string; changes: AnnonceRequiredProps }>()
);

export const deleteAnnonce = createAction(
  "[Annonces Page] Delete Annonce",
  props<{ annonceId: string }>()
);