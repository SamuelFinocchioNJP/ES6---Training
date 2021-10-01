// Non sempre ci è dato sapere tutte le possibili chiavi di un oggetto (attributi)
// Per questo motivo ci è permesso definire chiavi dinamiche:

interface Checklist {
  [key: string]: boolean;
}

const takeoff: Checklist = {
  "Altimeter": true,
  "Auxiliary fuel pump": true,
  "Directional gyro": true,
  "Engine idle": true,
  "Flaps": true,
  "Flight controls": false,
  "Fuel gauges": true,
  "Instruments and radios": false,
  "Landing gear position lights": true,
  "Magnetos": false,
  "Parking brake": true,
  "Propeller": true,
  "Seat belts/shoulder harnesses": true,
  "Trim": true,
};

// Altra feature utile è utilizzare il valore di una variabile come chiave
// In lettura l'operazione è scontata:

const toRed: string = "Tri"