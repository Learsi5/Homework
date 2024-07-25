//Pizza Place Functions
//Create an array of pizzaToppings with at least four different toppingspi

let pizzaToppings = ["bacon", "onion", "green pepper", "pineapple"];


//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)

function greetCustomer() {
console.log("Welcome to Learsi's Pizza, our toppings are:");
for (let topping of pizzaToppings) {
    console.log(topping);
}
// Function to get the pizza order
function getPizzaOrder(size,crust, ...toppings) {
console.log(`One ${size} ${crust} crust pizza with ${toppings.join(", ")} coming up!`)
return [size, crust, toppings];

}

// Function to prepare the pizza

function preparePizza(orderArray) {
    console.log("...Cooking pizza...");
    let pizza ={
     size: orderArray[0],
     crust: orderArray[1],
     toppings: orderArray[2]
    };
    return pizza;
}

// Function to serve the pizza

function servePizza(pizza) {
    console.log(`Order up! Heres's your ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings.join(",")}. Enjoy!`);
return pizza;
}
// Call each function and use the returned value from the previous function as its input

greetCustomer();
let order = getPizzaOrder("large", "thick", "bacon", "onion", "green pepper");
servePizza(preparedPizza(order));


