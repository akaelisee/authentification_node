// const userModel = require('../models/User');
const db = require('../util/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../middleware/validation');

exports.getFindUser = async (req, res) => {
    db.query('SELECT * FROM users',  (error, results) => {
        if (error) throw error;
        res.send(results);
    });
    
};

exports.getFindByIdUser = async (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM users WHERE id_user= ${id}`,  (error, results) => {
        if (error) throw error;
        res.send(results);
    });
};

exports.postRegisterAddUser = async (req, res) => {

    // variable
    const { firstname, lastname, email, password } = req.body;
    const date_create = new Date(Date.now()).toISOString();

    try {
        // LETS VALIDATE THE DATA BEFORE WE A CLIENT
        const error  = registerValidation(req.body);
        if (error) return res.status(400).send(error);

        console.log('continue');
    
        // Checking if the user is already in the database
        // db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        //     if (error) throw error;
    
        //     if (results.length > 0) {
        //         return res.send('email deja utilisé');
        //     }
    
        //     // Hash passwords
        //     const salt = await bcrypt.genSalt(10);
        //     const hashPassword = await bcrypt.hash(password, salt);
            
        //     // CREATE NEW CLIENT
        //     db.query('INSERT INTO users SET ?', {firstname: firstname, lastname: lastname, email: email, password: hashPassword, date_create: date_create}, function (error, results) {
        //         if (error) throw error;
        //         return res.status(201).send('Client enregisté');
        //     })
        // });
        
    } catch (error) {
        console.log(error);
    }



}

exports.postLoginUser = async (req, res) => {
    const { email, password } = req.body;

    // LETS VALIDATE THE DATA BEFORE WE A user
    let { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Checking if the user is already in the database
    // db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
    //     if (error) throw error;

    //     if ( !results ) {
    //         return res.status(500).send('Email incorrect');
    //     }else {

    //         const validPass = await bcrypt.compare(password, results[0].password);
    //         if (!validPass) return res.status(400).send('Invalid password');

    //         const id = results[0].id_user;
    //         const token = await jwt.sign({ id }, process.env.TOKEN_SECRET);

    //         res.header('Access-Control-Expose-Headers', 'auth-token').set('auth-token', token).send({
    //             id       : results[0].id_user,
    //             firstname: results[0].firstname,
    //             lastname : results[0].lastname,
    //             email    : results[0].email
    //         });
    //     }
    // });
}
 