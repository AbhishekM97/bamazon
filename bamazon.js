var mysql = require("mysql");
var inquirer = require("inquirer");
var StockQuantity;
var purchase;
var Quantity;
var command;

var connection = mysql.createConnection({
    host: "localhost",

    port:3306,
    user:"root",

    password:"October_10697",
    database: "bamazon"
});


connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id "+ connection.threadId);
    displayData();
});

function displayData(){
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        console.log(res);
        //connection.end();
        select();
    });
}

function select(){
    inquirer.prompt([
        {
        type: "input",
        name: "Purchase",
        message: "Type the name of the product you're going to purchase. type 'Quit' to stop buying stuff.\n",
        },

        {
        type: "input",
        name:"Amount",
        message:"Type the quantity of the selected item you'd like to select in digits.\n  Enter a number equal to or less than the quantity available.\n  If you want to Quit then just press enter."
        }
    ]).then(function(user){
        if(user.Purchase === "Quit"){
            connection.end();
        }
        else{
        purchase = user.Purchase;
        purchase = "'"+purchase+"'";
        Quantity = parseInt(user.Amount);
        command = "SELECT stock_quantity FROM products WHERE product_name="
        command = command.concat(purchase);
        connection.query(command, function(err,results){
            if (err) throw err;
            console.log(results[0].stock_quantity);
            StockQuantity = results[0].stock_quantity - Quantity;
            console.log(StockQuantity);
            purchase = user.Purchase;
            update();
            //connection.end();
        })
        }
    })
}

function update(){
    connection.query("UPDATE products SET? WHERE?",
    [
        {
            stock_quantity: StockQuantity
        },
        {
            product_name: purchase
        }
    ],
    function(err,res){
        if(err) throw err;
        console.log(res.affectedRows + " products updated! \n");
        displayData();
    }
    );
}



/*get the quantity from sql and temporarirly store in variable.
subtract the user input quantity from the variable.             Set the value after subtraction as the new quantity.
Recursivly call this function until the purchase value is "Quit".
If value quit exit the inquirer promp function.
Otherwise before each prompt display the data.
*/ 