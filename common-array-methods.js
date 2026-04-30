
// Task 1
const drinkOrders = ["Latte", "Tea", "Espresso"];
const pastryOrders = ["Croissant", "Danish", "Bagle"];


// Task 2
console.log(`
Total Drink Orders: ${drinkOrders.length}
Total Pastry Orders: ${pastryOrders.length}
 `);

// Task 3
console.log(`
First drink item:  ${drinkOrders[2]} and Second pastry item: ${pastryOrders[1]}, 

Second drink item: ${drinkOrders[0]} and Third pastry item: ${pastryOrders[2]},

Second drink item:  ${drinkOrders[1]} and First pastry item: ${pastryOrders[0]}
`);


// Task 4 Access Orders Dynamically with Variables
// Declare two variables and use them with bracket notation to log the selected order
// dynamically. (I assumed that these went together and werent separate tasks.)

 let drinkSelection = 1;
 let pastrySelection = 0;
    console.log(`You Selected: ${drinkOrders[drinkSelection]} and ${pastryOrders[pastrySelection]}`)


// Task 5
console.log("Current Orders:");
for (let i = 0; i < drinkOrders.length; i++){
    console.log(drinkOrders[i])
}

// Task 6 

drinkOrders.push("Flat White");
console.log(`
Current number of drink orders: ${(drinkOrders.length)} 
Current drink list: ${(drinkOrders)}
`);