const connection = require('./config/connection.js');
const {prompt} = require('inquirer');

async function init(){
  const list = await connection.query("SELECT * FROM products");
  //console.table(list);
  const lowInv = list.filter(item => item.stock_quantity < 5);
  
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
  async function addToInv() {
    let inventoryUpdated = {};
    list.forEach(item=> {
     inventoryUpdated[item.product_name] = item.stock_quantity
    })
    const {item} = await prompt({
        message: "Which item would you like to update inventory for?",
        type: "list",
        name: 'item',
        choices:Object.keys(inventoryUpdated)
      })

      switch(item) {
          case "laptop": 
            updateInvQuantity();
            break;
          case "monitor":
            updateInvQuantity();
            break;
          case "tupperware":
            updateInvQuantity();
            break;
          case "nalgene bottle":
            updateInvQuantity();
            break;
          case "cups":
            updateInvQuantity();
            break;      
        }
        async function updateInvQuantity() {
          const {quantity} = await prompt({
            message: "How many would you liked to add?",
            name: "quantity",
            validate: (input) => isNaN(input) ? 'Please input a number!' : Number(input)>0 
          })
        
         const result = await connection.query(`UPDATE products SET ? WHERE ?`, [{stock_quantity:inventoryUpdated[item]+Number(quantity)},{product_name:item}])
        
         console.log(result)
        }
      }
    }


init()
