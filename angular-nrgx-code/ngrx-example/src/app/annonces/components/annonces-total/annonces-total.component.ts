import { Component, Input } from "@angular/core";

@Component({
  selector: "app-annonces-total",
  templateUrl: "./annonces-total.component.html",
  styleUrls: ["./annonces-total.component.css"]
})
export class AnnoncesTotalComponent {
  @Input() total: number;
}
