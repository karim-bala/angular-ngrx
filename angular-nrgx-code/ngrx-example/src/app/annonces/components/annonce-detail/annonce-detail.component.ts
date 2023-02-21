import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AnnonceModel } from "src/app/shared/models";

@Component({
  selector: "app-annonce-detail",
  templateUrl: "./annonce-detail.component.html",
  styleUrls: ["./annonce-detail.component.css"]
})
export class AnnonceDetailComponent {
  originalAnnonce: AnnonceModel | undefined;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  annonceForm = new FormGroup({
    name: new FormControl(""),
    cityOut: new FormControl(""),
    cityIn: new FormControl(""),
    earnings: new FormControl(0),
    description: new FormControl("")
  });

  @Input() set annonce(annonce: AnnonceModel) {
    this.annonceForm.reset();
    this.originalAnnonce = undefined;

    if (annonce) {
      this.annonceForm.setValue({
        name: annonce.name,
        cityOut: annonce.cityOut,
        cityIn: annonce.cityIn,
        earnings: annonce.earnings,
        description: annonce.description
      });

      this.originalAnnonce = annonce;
    }
  }

  onSubmit(annonce: AnnonceModel) {
    this.save.emit({ ...this.originalAnnonce, ...annonce });
  }
}
