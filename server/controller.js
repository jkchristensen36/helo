const bcrypt = require('bcrypt');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.create_user([username, hash])
        req.session.user = {
            userId: newUser.user_id,
            username: newUser.username,
        }
        res.status(200).send(req.session.user)
        


    }
}