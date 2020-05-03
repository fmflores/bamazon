var mysql = require('mysql');
var util = require('util');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bamazon',
  port: 3306
});
connection.query = util.promisify(connection.query)
connection.connect((err)=>{
    if(err) throw err;
    console.log('success!')
});

module.exports = connection;