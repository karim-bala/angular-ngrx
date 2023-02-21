import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  State,
  selectAllAnnonces,
  selectActiveAnnonce,
  // selectBooksEarningsTotals
} from "src/app/shared/state";
import { AnnonceModel, AnnonceRequiredProps } from "src/app/shared/models";
import { AnnoncesPageActions } from "../../actions";

@Component({
  selector: "app-annonces",
  templateUrl: "./annonces-page.component.html",
  styleUrls: ["./annonces-page.component.css"]
})
export class AnnoncesPageComponent implements OnInit {
  annonces$: Observable<AnnonceModel[]>;
  currentAnnonce$: Observable<AnnonceModel | null>;
  total$: Observable<number>;

  constructor(
    private store: Store<State>
  ) {
    this.annonces$=store.select(selectAllAnnonces);
    this.currentAnnonce$=store.select(selectActiveAnnonce);
    // this.total$=store.select(selectAnnoncesEarningsTotals);

  }
  ngOnInit() {
    this.store.dispatch(AnnoncesPageActions.enter());

  
  }

  
  onSelect(annonce: AnnonceModel) {
    this.store.dispatch(AnnoncesPageActions.selectAnnonce({ annonceId: annonce.id }));

  }

  onCancel() {
    this.removeSelectedAnnonce();
  }

  removeSelectedAnnonce() {
    this.store.dispatch(AnnoncesPageActions.clearSelectedAnnonce())
  
  }

  onSave(annonce: AnnonceRequiredProps | AnnonceModel) {
    if ("id" in annonce) {
      this.updateAnnonce(annonce);
    } else {
      this.saveAnnonce(annonce);
    }
  }

  saveAnnonce(annonceProps: AnnonceRequiredProps) {
    this.store.dispatch(AnnoncesPageActions.createAnnonce({ annonce: annonceProps }));


    
  }

  updateAnnonce(annonce: AnnonceModel) {
    this.store.dispatch(
      AnnoncesPageActions.updateAnnonce({ annonceId: annonce.id, changes: annonce })
    );


  }

  onDelete(annonce: AnnonceModel) {
    this.store.dispatch(AnnoncesPageActions.deleteAnnonce({ annonceId: annonce.id }));

    
  }
}
