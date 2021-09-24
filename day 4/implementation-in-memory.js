// La funzione di intepretazione di un identificatore
// è così definita:
// eval(identifier, memory)
// dove identifier è un nome di una variabile
// e memory è una coppia (ENV, STORE)
// Nell'atto pratico sono rispettivamente (STACK, HEAP)
// ENV è a sua volta una funzione che assegna ad un identificatore un valore
// Questo valore può essere un valore immediato un
// indirizzo di memoria a STORE
// store è una funzione che associa ad una locazione un array di byte

// Un oggetto viene salvato così in memoria

// const obj = { ... }

// ENV: { obj: 'ADDRESS_1'}
// STORE: { 'ADDRESS_1': {...} };

// Un oggetto nestato sarà quindi così definito
// ENV
// obj1 = 'ADDRESS_1';

// STORE
// 'ADDRESS_1': {
//   a: 'immediato_1',
//   b: 'immediato_2',
//   c: 'ADDRESS_2',
//   d: 'ADDRESS_3',
// }

// Effettuata una copia con spread su obj1
// definiamo un nuovo oggetto obj2

// const obj2 = { ...obj1 }
// IL risultato in memoria è il seguente

// STORE
// 'ADDRESS_1': {
//   a: 'immediato_1',
//   b: 'immediato_2',
//   c: 'ADDRESS_3',
//   d: 'ADDRESS_4',
// }

// 'ADDRESS_2': {
//   a: 'immediato_1',
//   b: 'immediato_2',
//   c: 'ADDRESS_3',
//   d: 'ADDRESS_4',
// }

// Se modifichiamo quindi obj2 facciamo riferimento ad ADDRESS_2
// modificando quindi a e b modifichiamo segmenti di memoria diversi
// se accediamo invece agli oggetti c e d
// facciamo rifermento agli stessi indirizzi ADDRESS_3 e ADDRESS_4
// di conseguenza non avremo garantito l'immutabilità dell'oggetto anche se spreaddato

// Si definisce per questo motivo il risultato dello spread come
// copia soffice (shallow copy)

// Per garantire l'immutabilità degli oggetti nestati è necessario fare una copia profonda
// è necessario visitare tutti gli oggetti e ripetere lo spread degli stessi ricorsivamente

// Esempi:
// JSON.parse(JSON.stringify(obj))
// _.cloneDeep (https://lodash.com/docs/#cloneDeep)


// Definizione ricorsiva di copia penetrante
// Deep copy
const cloneDeep = (obj) => {
  const _newObj = { ...obj };

  Object.keys(_newObj)
    .filter((_) => typeof _newObj[_] === "object")
    .forEach((key) => {
      // console.log("INTERNAL", key, _newObj[key]);
      _newObj[key] = cloneDeep(_newObj[key]);
    });

  return _newObj;
};

const nested_obj = {
  a: 10,
  b: {
    c: {
      d: 10
    },
  },
};

const copy = cloneDeep(nested_obj);
nested_obj.b.c.d = -9999;
console.log(JSON.stringify(nested_obj));
console.log(JSON.stringify(copy));

// Utilizzare il doppio o triplo uguale nella comparazione degli oggetti 
// ha come risultato di comparare gli indirizzi di memoria
// 2 oggetti identici ma dististi non saranno uguali secondo la logica del == e del ===

// una tecnica semplice per comparare oggetti è comparare la stringa risultante
// dallo stringify oppure utilizzare una chiave univoca nell'oggetto

// JSON.stringify(obj1) === JSON.stringify(obj2); 4*O(N)
// obj1.id === obj2.id (preferibile perché più prestante) O(1)