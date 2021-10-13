import { IPhysician } from "../interfaces/physician.interface";
import { ISpecialization } from "../interfaces/specialization.interface";

export class Physician implements IPhysician {
  constructor(
    public firstName: string,
    public lastName: string,
    public specialization: ISpecialization
  ) {}

  canTreat(pathology: string): boolean {
    // return malattie.contiene(malattia)
    return this.specialization.treatablePathologies.includes(pathology);
  }
}
