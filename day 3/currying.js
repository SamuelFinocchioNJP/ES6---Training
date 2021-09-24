// Si definisce currying
// Una tecnica avanzata di operare con le funzioni 
// che consiste nella scomposizione di una funzione con n parametri
// richiamabile nella forma f(a,b,c,d)
// in una funzione f(a)(b)(c)(d)

// Funzione originale
function sum(a, b, c, d) {
  return a + b + c + d;
}

// Funzione equivalente
function _sum(a) {
  return function f1(b) {
    return function f2(c) {
      return function f3(d) {
        return a + b + c + d;
      };
    };
  };
}

// Chiamata della funzione
console.log(sum(1, 2, 3, 4));
console.log(_sum(1)(2)(3)(4));

// Esempio di utilizzo pratico del currying
function logger(date, title, description) {
  return "Date: " + date.toISOString() + ", " + title + " - " + description;
}

// Creazione di un logger personalizzabile con 3 parametri
function _logger(date) {
  return function f1(title) {
    return function f2(description) {
      return "Date: " + date.toISOString() + ", " + title + " - " + description;
    };
  };
}

// Utilizzo
console.log(logger(new Date()), "ciao", "Lorem ispusm dolro sit amet");
console.log(_logger(new Date())("ciao")("Lorem ispusm dolro sit amet"));

// Definiamo una funzione logger personalizzata
const logger_today = _logger(new Date())("Database");

// Funzione personalizzata tramite currying richiamabile con un singolo parametro
console.log(logger_today("Lorem ispusm dolro sit amet"));

// Nota bene i restanti parametri sono in scope della funzione finale grazie 
// alla tecnica di closure che l'interprete utilizza per conservare lo scope delle funzioni
// in memoria 
// ** vedi closure
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures?retiredLocale=it
