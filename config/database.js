
var mysql = require('mysql');
module.exports.config = function(){
	var con = mysql.createConnection({
	  host: process.env.DB_HOST,
	  user: process.env.DB_USER,
	  password: process.env.DB_PASS,
	  database: process.env.DB_NAME,
		multipleStatements : true
	});

	con.connect(function(err) {
		if (err) throw err;
		console.log('Connected Successfull');
	});
	return con;
};
