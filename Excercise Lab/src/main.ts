import { Laboratory } from "./classes/laboratory.class";
import { Physician } from "./classes/physician.class";
import { IPatient } from "./interfaces/patient.interface";
import { ISpecialization } from "./interfaces/specialization.interface";

const cardiology: ISpecialization = {
  name: "cardiology",
  treatablePathologies: ["stemi", "nstemi", "angina", "vtach", "vfib"],
};

const internalMedicine: ISpecialization = {
  name: "internalMedicine",
  treatablePathologies: [
    "hemmoragic shock",
    "pnx",
    "hypertermia",
    "anaphilaxis",
  ],
};

const orthopedy: ISpecialization = {
  name: "orthopedy",
  treatablePathologies: ["fracture", "broken bone"],
};

const physicians: Array<Physician> = [
  new Physician("Mario", "Rossi", cardiology),
  new Physician("Giuseppe", "Verdi", cardiology),
  new Physician("Henry", "Muccini", orthopedy),
  new Physician("Eric", "Clapton", internalMedicine),
  new Physician("Elvis", "Presley", internalMedicine),
];

const myLab: Laboratory = new Laboratory(physicians);

const patient: IPatient = {
  pathology: "nstemi",
  firstName: "Paolo",
  lastName: "Grassi",
};

const foundPhysician = myLab.findPhysician(patient.pathology);

console.log("Patient:", patient);
console.log("Physicians:", foundPhysician);

if (foundPhysician.length !== 0) {
  // Se ho trovato un medico
  myLab.scheduleAppointment(foundPhysician[0], patient);
  console.log(myLab.schedule);
}
