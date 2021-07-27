const connection = require('../util/db');

module.exports = class User {
    constructor(id_user, firstname, lastname, email, password, date_create) {
        this.id_user = id_user,
        this.firstname = firstname,
        this.lastname = lastname,
        this.email = email,
        this.password = password,
        this.date_create = date_create
    }

    // static fetchAll () {
    //     return connection.execute('SELECT * FROM users');
    // }

    // static VerifyEmailUser (email) {
    //     return connection.execute('SELECT email FROM users WHERE email = ?', [email]);
    // }

    // static fetchAddUser (firstname, lastname, email, password, date_create) {
    //     return connection.execute('INSERT INTO users (firstname, lastname, email, password, date_create) VALUES (?,?,?,?,?)', [firstname, lastname, email, password, date_create]);
    // }
}