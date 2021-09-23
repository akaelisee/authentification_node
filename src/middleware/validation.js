const Joi = require('joi');

const registerValidation = data => {

    let message = '';

    const { firstname, lastname, email, password } = data;  

    if (!firstname || !lastname || !email || !password) {
        if (!firstname) {
            return message= 'Entrez un prénom'

        }else if (!lastname) {
            return message= 'Entrez un Nom'

        }else if (!email) {
            return message= 'Entrez un mail'

        }else if (!password) {
            console.log(password)
            return message= 'Entrez un mot de passe'
        }
    }

    if (email) {

        let emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        let result = emailRegexp.test(email);

        if (result === false) {
            return message= 'Entrez un email respectant la structure exemple@gmail.com'
        }

    } 
    
    if (password.length <= 6) {
        return message= 'Entrez un mot de passe superieur à 5'
    }


    // console.log(firstname);

    // const schema = Joi.object ({
    //     firstname: Joi.string()
    //         .required(),
    //     lastname: Joi.string()
    //         .required(),
    //     email: Joi.string()
    //         .required()
    //         .email(),
    //     password: Joi.string()
    //         .min(6)
    //         .required()
    // });
}

// const registerValidation = data => {
//     const schema = Joi.object ({
//         firstname: Joi.string()
//             .required(),
//         lastname: Joi.string()
//             .required(),
//         email: Joi.string()
//             .required()
//             .email(),
//         password: Joi.string()
//             .min(6)
//             .required()
//     });

//     return schema.validate(data);
// }

const loginValidation = data => {
    const schema = Joi.object ({
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });

    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;