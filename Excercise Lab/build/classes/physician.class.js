"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Physician = void 0;
class Physician {
    firstName;
    lastName;
    specialization;
    constructor(firstName, lastName, specialization) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialization = specialization;
    }
    canTreat(pathology) {
        // return malattie.contiene(malattia)
        return this.specialization.treatablePathologies.includes(pathology);
    }
}
exports.Physician = Physician;
