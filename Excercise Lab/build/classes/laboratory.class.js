"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laboratory = void 0;
class Laboratory {
    physicians;
    schedule;
    constructor(physicians = []) {
        this.physicians = physicians;
        this.schedule = [];
    }
    set addPhysician(physician) {
        this.physicians.push(physician);
    }
    findPhysician(pathology) {
        // Returns a list of physicians that can treat a particular pathology
        return this.physicians.filter((physician) => physician.canTreat(pathology));
    }
    scheduleAppointment(physician, patient, duration = 1) {
        // Search for a first available date
        // schedule and return the schedule
        if (this.schedule.length === 0) {
            const newAppointment = {
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
        const newAppointment = {
            hourOfDay: (lastAppointment.hourOfDay + lastAppointment.duration) % 24,
            duration: duration,
            physician: physician,
            patient: patient,
        };
        this.schedule.push(newAppointment);
        return newAppointment;
    }
}
exports.Laboratory = Laboratory;
