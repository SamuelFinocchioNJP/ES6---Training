"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const laboratory_class_1 = require("./classes/laboratory.class");
const physician_class_1 = require("./classes/physician.class");
const cardiology = {
    name: "cardiology",
    treatablePathologies: ["stemi", "nstemi", "angina", "vtach", "vfib"],
};
const internalMedicine = {
    name: "internalMedicine",
    treatablePathologies: [
        "hemmoragic shock",
        "pnx",
        "hypertermia",
        "anaphilaxis",
    ],
};
const orthopedy = {
    name: "orthopedy",
    treatablePathologies: ["fracture", "broken bone"],
};
const physicians = [
    new physician_class_1.Physician("Mario", "Rossi", cardiology),
    new physician_class_1.Physician("Giuseppe", "Verdi", cardiology),
    new physician_class_1.Physician("Henry", "Muccini", orthopedy),
    new physician_class_1.Physician("Eric", "Clapton", internalMedicine),
    new physician_class_1.Physician("Elvis", "Presley", internalMedicine),
];
const myLab = new laboratory_class_1.Laboratory(physicians);
const patient = {
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
