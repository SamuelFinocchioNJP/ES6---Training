import { IAppointment } from "../interfaces/appointment.interface";
import { IPatient } from "../interfaces/patient.interface";
import { IPhysician } from "../interfaces/physician.interface";

export class Laboratory {
  public schedule: Array<IAppointment>;

  constructor(public physicians: Array<IPhysician> = []) {
    this.schedule = [];
  }

  set addPhysician(physician: IPhysician) {
    this.physicians.push(physician);
  }

  findPhysician(pathology: string): Array<IPhysician> {
    // Returns a list of physicians that can treat a particular pathology
    return this.physicians.filter((physician: IPhysician) =>
      physician.canTreat(pathology)
    );
  }

  scheduleAppointment(
    physician: IPhysician,
    patient: IPatient,
    duration: number = 1
  ): IAppointment {
    // Search for a first available date
    // schedule and return the schedule

    if (this.schedule.length === 0) {
      const newAppointment: IAppointment = {
        hourOfDay: 8,
        duration: duration,
        physician: physician,
        patient: patient,
      };

      this.schedule.push(newAppointment);

      return newAppointment;
    }

    const lastAppointment = this.schedule[this.schedule.length - 1];

    // lastAppointment parte alle 10 e dura 2 ore

    // il prossimo sarà alla 10 + 2 = 12
    const newAppointment: IAppointment = {
      hourOfDay: (lastAppointment.hourOfDay + lastAppointment.duration) % 24,
      duration: duration,
      physician: physician,
      patient: patient,
    };

    this.schedule.push(newAppointment);
    return newAppointment;
  }
}
