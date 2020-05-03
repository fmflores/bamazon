const connection = require('./config/connection.js');
const {prompt} = require('inquirer');

async function init(){

  const list = await connection.query("SELECT * FROM products");
  console.log(list);
  const listModified = {};
  list.forEach(item=> {
   listModified[item.product_name] = item.stock_quantity
  })
  console.log(listModified)
  
  //use list to display a table;

  const {buy} = await prompt({
    message: "What would you like buy?",
    type: "list",
    name: 'buy',
    choices:Object.keys(listModified)
  })

  const {quantity} = await prompt({
    message: "How many would you like to buy?",
    name: "quantity",
    validate: (input) => isNaN(input) ? 'Please input a number!' : Number(input)>listModified[buy] ? 
    `There's not enough in stock!` : true
  })

 const result = await connection.query(`UPDATE products SET ? WHERE ?`, [{stock_quantity:listModified[buy]-quantity},{product_name:buy}])

 console.log(result)
}

init()
