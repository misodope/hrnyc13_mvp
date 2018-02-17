const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mvp_db'
});

connection.connect((error) => {
  if (error) {
    console.log('There\'s an error', error);
  }
  console.log('Database successfully connected');
});

let users = `CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE(username)
)`;

let images = `CREATE TABLE IF NOT EXISTS images (
  id INT NOT NULL AUTO_INCREMENT,
  filename VARCHAR(255) NOT NULL,
  path VARCHAR(5000) NOT NULL,
  tag VARCHAR(255) NOT NULL,
  user_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
)`;

connection.query(users, (error) => {
  if (error) {
    console.log("There was an error creating the table", error);
  }
});

connection.query(images, (error) => {
  if (error) {
    console.log("There was an error creating the table", error);
  }
});

module.exports = connection;
