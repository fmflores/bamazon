const connection = require('./config/connection.js');
const {prompt} = require('inquirer');

async function init(){
  const list = await connection.query("SELECT * FROM products");
  console.table(list);
  const lowInv = list.filter(item => item.stock_quantity < 5);
  let listUpated = {};
  //use list to display a table;

  const {menu} = await prompt({
    message: "Hello manager what would you like to do?",
    type: "list",
    name: 'menu',
    choices:['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product']
  })

  switch(menu){
      case "View Products for Sale":
        console.log('--- The following items are for sale ---')
        console.table(list)
        break;
      case "View Low Inventory":
          console.log('--- The following items have low inventory ---')
          console.table(lowInv)
          console.log('-'.repeat(30))
          break;
      case "Add to Inventory":
            addToInv();
            break;
  }
}

function addToInv() {
    const {quantity} = await prompt({
        message: "How many would you like to add?",
        name: "quantity",
        validate: (input) => isNaN(input) ? 'Please input a number!' : Number(input)>listModified[buy]
      })
    
     const result = await connection.query(`UPDATE products SET ? WHERE ?`, [{stock_quantity:listModified[buy]+quantity},{product_name:buy}])
    
     console.log(result)
    }
    let updateInv = await connection.query("SELECT * FROM products");
}
init()
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();