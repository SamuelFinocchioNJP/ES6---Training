import { IPerson } from "./person.interface";

export interface IPatient extends IPerson {
  pathology: string;
}
