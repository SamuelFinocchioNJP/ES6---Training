// Definiamo un array in JS una struttura dati lineare ma non necessariamente contigua
// Con accesso diretto, dato l'indice
// Un array è un oggetto di tipo Array, e può essere dichiarato utilizzando la chiamata a costruttore o 
// l'operatore []

function main() {
    let arr = [];
    let arr2 = Array();

    // Un oggetto di tipo array ha definita una funzione toString richiamata automaticamente dal console log
    console.log('arr', arr);
    console.log('arr2', arr2);

    // Dichiariamo un array con la keyword const
    // Si potrebbe pensare che ogni mutazione sull'array arr3 sia considerata illegale dall'interprete
    const arr3 = [];

    // Da errore?
    arr3.push(10);
    console.log('arr3', arr3);

    // Il valore assegnato all'identificatore arr3 non viene mutato
    // Dichiarando un oggetto ( array dinamico, oggetto, set, ecc...) 
    // Viene allocato uno spazio di memoria in HEAP
    // Viene restituito l'indirizzo del segmento di memoria, push va a modificare il contenuto nella HEAP
    // Lasciando quindi inalterato il riferimento salvato nella variabile arr3 su stack
    // Il che rende legale la chiamata a push e pop
    arr3.push(777);
    console.log('arr3', arr3);
    let poppato = arr3.pop();
    console.log('poppato', poppato);
    console.log('arr3', arr3);

    // Tutti i metodi che modificano in loco l'array sono legali
    const arr_test = [...Array(10).keys()];
    arr_test.reverse();
    arr_test;
    arr_test.sort();
    arr_test;
    arr_test.shift();
    arr_test;
    arr_test.unshift([1,2,3]);
    arr_test;
    console.log('arr_test', arr_test);
    console.log('arr_test.includes(3)', arr_test.includes(3));
};

main();