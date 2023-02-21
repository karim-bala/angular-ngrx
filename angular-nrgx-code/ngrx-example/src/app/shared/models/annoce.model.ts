export interface AnnonceModel {
  id: string;
  name: string;
  cityOut: String;
  cityIn: String;
  earnings:Number
  description?: string;
}

export type AnnonceRequiredProps = Pick<AnnonceModel, "name" | "cityOut" |"cityIn"|"earnings" >;

export function calculateBooksGrossEarnings(annonces: AnnonceModel[]) {
  return annonces.reduce((total, annonce) => {
    return total + parseInt(`${annonce.earnings}`, 10) || 0;
  }, 0);
}
