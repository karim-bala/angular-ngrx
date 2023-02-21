import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AnnonceModel } from "src/app/shared/models";

@Component({
  selector: "app-annonces-list",
  templateUrl: "./annonces-list.component.html",
  styleUrls: ["./annonces-list.component.css"]
})
export class AnnoncesListComponent {
  @Input() annonces: AnnonceModel[];
  @Input() readonly = false;
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();
}
