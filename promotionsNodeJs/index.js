const mysql = require("mysql");

const db = mysql.createConnection({
    host: "testpromotion.csz4lcf937uu.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "admin123",
    database: "promotions"
});

/*db.connect((err) => {
    if (err){
        console.log(err.message);
        return;
    }
    console.log("Connected");
});*/

exports.handler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const sql = "Select * from promos where fecha = ('"+event.fecha+"')";
    db.query(sql, (err, res) => {
      if (err) {
        throw err
      }
      callback(null, res);
    });
      
  };
  