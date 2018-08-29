module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db');
        db.getListings().then(listings => res.send(listings));
    },
    create: (req, res) => {
        const db = req.app.get('db');
    },
    remove: (req, res) => {
        const db = req.app.get('db');
    }
}