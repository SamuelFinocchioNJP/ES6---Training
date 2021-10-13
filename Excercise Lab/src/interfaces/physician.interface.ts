import { IPerson } from "./person.interface";
import { ISpecialization } from "./specialization.interface";

export interface IPhysician extends IPerson {
    specialization: ISpecialization;
    canTreat(pathology: string): boolean;
}