var mysql = require('mysql');
const settings = {
    host: 'localhost',
    user: 'root',
    password: 'qwe123',
    database: 'secret_stage'
};

var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(settings);

        db.connect(function (err) {
            if (!err) {
                console.log('Database is connected!');
            } else {
                console.log(err)

                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase(); 


