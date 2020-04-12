// TODO: ASCII art

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employeeDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // querySong();
    start();
  });

  function start(){
      drawSplash();
      main();
  };

  function main(){
    inquirer
    .prompt({
      name: "AddorRemove",
      type: "list",
      message: "What would you like to do?",
      choices: ["View All Employees",
                "View All Employees by Department",
                "View All Employees by Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "View All Roles",
                "QUIT"
            ]
    })
    .then(function(answer) {
      // based on their answer, run the program
    //   if (answer.postOrBid === "POST") {
    //     postAuction();
    //   }
    //   else if(answer.postOrBid === "BID") {
    //     bidAuction();
    //   } else{
    //     connection.end();
    //   }

      switch (answer.AddorRemove) {
        case "View All Employees":
            
            console.log("View All Employees");
            viewAllEmployees();
            break;
        case "View All Employees by Department":
            console.log("View All Employees by Department");
            viewAllEmployeesbyDept();
            break;
        case "View All Employees by Manager":
            console.log("View All Employees by Manager");
            viewAllEmployeesByMgr();
            break;
        case "Add Employee":
            console.log("Add Employee");
            addEmp();
            break;
        case "Remove Employee":
            console.log("Remove Employee");
            remEmp();
            break;
        case "Update Employee Role":
            console.log("Update Employee Role");
            updateEmpRole();
            break;
        case "Update Employee Manager":
            console.log("Update Employee Manager");
            updateEmpMgr();
            break;
        case "View All Roles":
            console.log("View All Roles");
            viewRoles();
            break;
        case "QUIT":
            console.log("QUIT");
            connection.end();
            break;           
        default:
            break;
    }




    });
};

  function drawSplash(){
      console.log("Employee Manager");                  // replace with ASCII art
  };



  function viewAllEmployees(){
      console.log("View All Employees");
      connection.query("SELECT * FROM employees", function(err, results) {
        if (err) throw err;
        console.table(results);
        main();
  })};

  function viewAllEmployeesbyDept(){
      console.log("View All Employees by Department");
      connection.query("SELECT * FROM employees", function(err, results) {
        if (err) throw err;
        console.table(results);
        main();
  })};
  
  function viewAllEmployeesByMgr(){
    console.log("View All Employees by Manager");
    connection.query("SELECT * FROM employees", function(err, results) {
        if (err) throw err;
        console.table(results);
        main();
  })};

  function addEmp(){
      console.log("Add Emp");
  };

  function remEmp(){
    console.log("Rem Emp");
  };
  function updateEmpRole(){
    console.log("Upd Emp Role");
  };

  function updateEmpMgr(){
      console.log("Upd Emp Manager");
  };

  function viewRoles(){
    console.log("View All Roles");
    connection.query("SELECT * FROM roles", function(err, results) {
        if (err) throw err;
        console.table(results);
        main();
  })};