const router = require('express').Router();

const User = require('../models/user.model');

router.get('/all', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ fatal: err.message });
    }
});

router.post('/new', async (req, res) => {
    try {
        const result = await User.create(req.body);
        res.json(result);
    } catch (err) {
        res.json({ fatal: err.message });
    }
});

router.delete('/:userId', (req, res) => {
    const { userId } = req.params;

    res.json('Borramos el usuario ' + userId);
});

module.exports = router;