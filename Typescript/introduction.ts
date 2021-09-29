// Si definisce Typescript come un superset di Javascript
// Questo implica che tutto il codice javascript è anche codice typescript, ovviamente non è vero il contrario
// Typescript definisce un insieme di regole di typechecking statiche
// Statico indica che il controllo viene fatto sul sorgente in fase di transpilazione
// Typscript infatti non aggiunge alcun controllo in runtime

// Definiamo traspilazione un particolare tipo di compilazione dove il risultato non è linguaggio a basso livello
// Ma un altro linguaggio ad alto livello

// Java -> C
// Python -> Javascript
// Ocaml -> Javascript
// Typescript -> Javascript

// Per consentire al transpilatore di Typescript di controllare i tipi staticamente
// è necessario specificare i tipi delle variabili dichiarate e dei parametri attuali

let x; // Qual'è il tipo??

let y: number; // Da ora in poi gli assegnamenti ad y vengono valutati tramite typechecking statico
// e ci assicuriamo che vengano assegnati solo valori numerici

// Se non specifichiamo un tipo di una variabile viene implicitamente permesso l'assegnamento di qualunque tipo
// Si definisce il tipo di una variabile senza una tipo particolare il tipo "any"

// È da evitare la presenza di variabili di tipo any, altrimenti si rischia immediatamente di incombere
// in problemi anche con operazioni banali

// y = x;
// Posso assegnare x ad y?
// Non posso saperlo perché non posso sapere il tipo di x
// Di conseguenza il transpilatore non è in grado di verificare il tipo di questa espressione
// E non ci permetterà di transpilare in Javascript il nostro sorgente typescript

// Una variabile può assumere più di un tipo
// Può essere ad esempio stringa oppure numero

let z: string | number;

z = 10;
z = "ciao";

let k: number;
k = 10;
z = k; // legale perché y è di tipo number

let h: number = z; // legale perché z è del tipo di k che è number quindi anche h sarà garantito number

// Altro tipo fondamentale è il tipo booleano
let t: boolean;
t = h > 4;

// t = undefined;
// Non possiamo assegnare ad undefined ne a null t

// La variabile t una volta assegnata non è più nullable
// Per rendere una variabile nullable:

let n: number | undefined | null;

// Ci è anche possibile creare un nostro tipo parametrizzato nullable:
type Nullable<T> = T | undefined | null;
let v1: Nullable<string>; // -> (T | undefined | null) ma T è string quindi (string | undefined | null)

// Come sappiamo possiamo anche assegnare oggetti
const obj1 = {
  name: "Mario",
  surname: "Rossi",
};

// Typescript ci permette di tipizzare anche gli oggetti:
interface IPerson {
  name: string;
  surname: string;
}

const obj2: IPerson = {
  name: "Giuseppe",
  surname: "Verdi",
};

// Illegale (manca surname)
// const obj3: Person = {
// name: "Giuseppe",
// };

// Illegale (age non è definito nel tipo IPerson)
// const obj4: IPerson = {
// name: "Giuseppe",
// surname: "Verdi",
// age: 17,
// };

// Possiamo definire anche attributi opzionali:

// Possiamo omettere il fuelType
interface Vehicle {
  year: number;
  model: string;
  fuelType?: string;
}

const vehicle1: Vehicle = {
  year: 2020,
  model: "Toyota Verso",
};

const vehicle2: Vehicle = {
  year: 2019,
  model: "Fiat 500",
  fuelType: "LPG",
};

// Possiamo anche rendere tutti i campi opzionali, mantendendo però le regole di tipo e impedendo
// attributi non definiti nel tipo
const vehicle3: Partial<Vehicle> = {
  year: 1992,
};

// È possibile nestare tipi:

interface VehicleOwner {
  identity: IPerson;
  vehicle: Vehicle;
  acquisitionDate: Date;
  price: number;

  sellingDate?: Date;
}

const vehicleOwner1: VehicleOwner = {
  identity: {
    name: "Mario",
    surname: "Del Verde",
  },
  vehicle: {
    model: "Mazda MX5",
    year: 1992,
  },
  acquisitionDate: new Date("2011-12-17"),
  price: 7000,
};
