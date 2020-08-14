const bcrypt = require('bcrypt');

module.exports = {
    register: (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)
        const newUser = ([username, hash])
        res.status(200).send(req.newUser)
        


    }
}