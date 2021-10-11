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
  