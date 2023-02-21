import { createAction, props } from "@ngrx/store";
import { AnnonceModel } from "src/app/shared/models";

export const annoncesLoaded = createAction(
    "[Annonces API] Annonces Loaded Success",
    props<{ annonces: AnnonceModel[] }>()
  );
  
  export const annonceCreated = createAction(
    "[Annonces API] annonce Created",
    props<{ annonce: AnnonceModel }>()
  );
  
  export const annonceUpdated = createAction(
    "[Annonces API] annonce Updated",
    props<{ annonce: AnnonceModel }>()
  );
  
  export const annonceDeleted = createAction(
    "[Annonces API] annonce Deleted",
    props<{ annonceId: string }>()
  );