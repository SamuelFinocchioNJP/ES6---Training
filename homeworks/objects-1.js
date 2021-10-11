// Array di negozi
// Ogni negozio ha un array di alimenti
// ogni alimento ha un array di allergeni

// Una persona, con un array di cosa a cui è allergico
const result = [
  {
    name: "Sisa",
    address: "Via cincinnato 23",
    groceries: [
      { name: "bread", price: 2.5, trigger: ["gluten"] },
      { name: "milk", price: 1.7, trigger: ["pprotein", "lactose"] },
    ],
  },
  {
    name: "Lidl",
    address: "Via roma 11",
    groceries: [
      { name: "Ham", price: 8, trigger: ["sulfates"] },
      { name: "milk", price: 1.7, trigger: [] },
      { name: "Beans", price: 3, trigger: ["tuna"] },
    ],
  },
];

const person = { name: "Mario", allergicTo: ["gluten", "pprotein"] };

// Returns the shops to witch person has no allergens to
function getViableShops (shops, person) {
    const shopsToAvoid = [];

    for(let shop of shops) {
        for(let grocery of shop.groceries) {
            for(let personAllergen of person.allergicTo) {
                if(grocery.trigger.includes(personAllergen)) {
                    shopsToAvoid.push(shop);
                }
            }
        }
    }

    const shopsViable = [];
    for(let shop of shops) {
        if(!shopsToAvoid.find((shopToAvoid) => shopToAvoid.name === shop.name)) {
            shopsViable.push(shop);
        }
    } 

    return shopsViable;
}

console.log(getViableShops(result, person));

// Returns the shops to witch person has no allergens to
function getViableShops(shops, person) {
    // Per ogni negozio
    const shopsToAvoid = shops.filter((shop) =>
      // Almeno uno degli alimenti
      shop.groceries.some((grocery) =>
        // Almeno uno degli allergeni della persona tra l'alimento corrente
        person.allergicTo.some((personAllergen) =>
          // Contiene un allergene
          grocery.trigger.includes(personAllergen)
        )
      )
    );
  
    // Filtro tutti gli shop non presenti tra quelli da cancellare
    return shops.filter(
      (shop) =>
        !shopsToAvoid.find((shopToAvoid) => shopToAvoid.name === shop.name)
    );
  }
