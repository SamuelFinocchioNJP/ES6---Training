import { IPatient } from "./patient.interface";
import { IPhysician } from "./physician.interface";

export interface IAppointment {
  hourOfDay: number;
  duration: number;
  physician: IPhysician;
  patient: IPatient;
}
