import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Car Pooling";
  links = [{ path: "/annonces", icon: "annonces", label: "Annonces" }];
}
