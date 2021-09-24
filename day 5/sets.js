// Si "definisce" un Set (insieme) una collazione distinta di oggetti
// In javascript il set implementato trammite funzione di hash garantisce prestazioni
// Migliori per l'accesso diretto

const set = new Set();
set.add(1);
set.add(2);
set.add(1);
set.add(3);

console.log(set);

// Il set non contiene 2 volte l'elemento duplicato (1)

// È possibile costruire un set a partire da un array
const set2 = new Set([1, 2, 3, 4, 5, 6, 1, 2, 32, 1, 4, 1, 3, 5]);
// Il risultato sarà un oggetto che non conterrà duplicati e permetterà accesso diretto
// In lettura e scrittura ai singoli elementi

console.log(set2.has(3));
console.log(set2.delete(3));
console.log(set2.has(3));
console.log(set2.entries());
console.log(set2.keys());
console.log(set2.values());
console.log(set2.size);

console.log("Foreach - Notare la proprietà di ordinamento");
set2.forEach((_) => console.log(_));

// Come implementeresti un set?
// Quali sono le implicazioni a livello di performance?

// È possibile riportare un set ad array ( i duplicati ovviamente saranno persi )
const arr = [...set2];
// Oppure
const arr2 = Array.from(set2);

console.log(arr);
console.log(arr2);
