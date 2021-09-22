function main() {
    // Differenze tra const, let, var

    /**
     * Lo standard ES6+ impone all'interprete di assegnare una valore di inizializzazione alle variabili
     * le variabili dichiate con la keyword var e const vengono inizilizzate nell'entry point del blocco di appartenenza
     * con valore "undefined"
     * le variabili dichiarate con let vengono marchiate dall'interprete con un flag <undeclared>.
     * La differenza principale è che prima del primo assegnamento (var, let) la variabile con valore undefined permette l'accesso in lettura
     * senza sollevare un eccezione restituendo semplicmentre il valore undefined.
     *
     * L'interprete tuttavia alla lettura del flag <undeclared> solleva un eccezione in fase di runtime.
     * Esempi:
     */

    console.log("1) X contiene", x);
    var x;
    console.log("2) X contiene", x);
    x = 10;
    console.log("3) X contiene", x);

    // Solleva un eccezione per via della flag <undecladed>
    // console.log("1) Y contiene", y);
    let y;
    console.log("2) Y contiene", y);
    y = 10;
    console.log("3) Y contiene", y);

    // Scoping in una istruzione di selezione
    if (x + y > 0) {
        // La coppia di graffe all'interno del costrutto definisce un frame sullo stack, comunemente chiamato "blocco"
        let z = 10;
        console.log("Inside", z);
    }

    // Sollevo una eccezione poichè il blocco definito dal costrutto di selezione non esiste più
    // console.log("Outside", z);

    // Scoping in una istruzione di selezione
    if (x + y > 0) {
        // La coppia di graffe all'interno del costrutto definisce un frame sullo stack, comunemente chiamato "blocco"
        var t = 10;
        console.log("Inside", t);
    }

    // La variabile t esiste globalmente alla funzione quindi la seguente istruzione non solleva una eccezione
    console.log("Outside", t);

    // Scoping in una istruzione di selezione
    if (x + y > 0) {
        // console.log("Before", s);
        // La coppia di graffe all'interno del costrutto definisce un frame sullo stack, comunemente chiamato "blocco"
        const s = 11;
        console.log("Inside", s);
    }

    // La variabile s non essendo dichiarata con la keyword const NON 
    // esiste globalmente alla funzione quindi la seguente istruzione solleva una eccezione
    // console.log("Outside", s);

    const d = 10;
    // Istruzioni illegali
    // d = 12; // Assegnamento
    // d++; // Post-incremento
    // ++d; // Pre-incremento
    // d += 4; // Assegnamento con short notation equivalente a s = s + 4
};

main();