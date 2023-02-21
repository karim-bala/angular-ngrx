import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import {mergeMap, map, exhaustMap, concatMap} from "rxjs/operators";
import { AnnoncesService } from "../shared/services";
import { AnnoncesPageActions, AnnoncesApiActions } from "./actions";
@Injectable()
export class AnnoncesApiEffects {
  constructor(private annoncesService: AnnoncesService, private actions$: Actions) {}

  loadAnnonces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AnnoncesPageActions.enter),
      exhaustMap(() =>
        this.annoncesService
          .all()
          .pipe(map(annonces => AnnoncesApiActions.annoncesLoaded({ annonces })))
      )
    )
  );

  createAnnonces$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AnnoncesPageActions.createAnnonce),
    concatMap(action =>
      this.annoncesService
        .create(action.annonce)
        .pipe(map(annonce => AnnoncesApiActions.annonceCreated({ annonce })))
    )
  )
);

updateAnnonce$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AnnoncesPageActions.updateAnnonce),
    concatMap(action =>
      this.annoncesService
        .update(action.annonceId, action.changes)
        .pipe(map(annonce => AnnoncesApiActions.annonceUpdated({ annonce })))
    )
  )
);

deleteAnnonce$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AnnoncesPageActions.deleteAnnonce),
    mergeMap(action =>
      this.annoncesService
        .delete(action.annonceId)
        .pipe(
          map(() => AnnoncesApiActions.annonceDeleted({ annonceId: action.annonceId }))
        )
    )
  )
);
}