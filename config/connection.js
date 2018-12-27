
// DEPENDENCIES // 

var mysql = require('mysql');
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database:'burgers_db'
	});

// Make connection.
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

app.listen(process.env.PORT || 3000, function() {
	console.log("App listening on PORT " + PORT);
});

// Export connection for our ORM to use.
module.exports = connection;