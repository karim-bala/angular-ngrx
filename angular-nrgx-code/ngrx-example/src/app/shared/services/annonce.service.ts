import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as uuid from "uuid/v4";
import { AnnonceModel, AnnonceRequiredProps } from "../models";

const BASE_URL = "http://localhost:3000/annonces";
const HEADER = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})

export class AnnoncesService {
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<AnnonceModel[]>(BASE_URL);
  }

  load(id: string) {
    return this.http.get<AnnonceModel>(`${BASE_URL}/${id}`);
  }

  create(annonceProps: AnnonceRequiredProps) {
    const Annonce: AnnonceModel = {
      id: uuid(),
      ...annonceProps
    };

    return this.http.post<AnnonceModel>(
      `${BASE_URL}`,
      JSON.stringify(Annonce),
      HEADER
    );
  }

  update(id: string, updates: AnnonceRequiredProps) {
    return this.http.patch<AnnonceModel>(
      `${BASE_URL}/${id}`,
      JSON.stringify(updates),
      HEADER
    );
  }

  delete(id: string) {
    return this.http.delete(`${BASE_URL}/${id}`);
  }
}
