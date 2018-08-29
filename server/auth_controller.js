module.exports = {
    login: (req, res) => {
        req.session.user.id
        
        const db = req.app.get('db');
        db.userLogin().then((users) => res.status(200).send(users))
        // .catch( err => {
        //     res.status(500).send({errorMessage: "Oops!"})
        //     console.log(err)
        // })
    },
    register: (req, res) => {
        const db = req.app.get('db');
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}