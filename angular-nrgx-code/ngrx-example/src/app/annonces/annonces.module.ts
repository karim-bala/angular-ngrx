import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { MaterialModule } from "src/app/material.module";
import { AnnoncesPageComponent } from "./components/annonces-page/annonces-page.component";
import { AnnonceDetailComponent } from "./components/annonce-detail/annonce-detail.component";
import { AnnoncesListComponent } from "./components/annonces-list/annonces-list.component";
import { AnnoncesTotalComponent } from "./components/annonces-total/annonces-total.component";
import { AnnoncesApiEffects } from "./annonces-api.effects";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([{ path: "annonces", component: AnnoncesPageComponent }]),
    EffectsModule.forFeature([AnnoncesApiEffects])
  ],
  declarations: [
    AnnoncesPageComponent,
    AnnonceDetailComponent,
    AnnoncesListComponent,
    AnnoncesTotalComponent
  ]
})
export class AnnoncesModule {}
