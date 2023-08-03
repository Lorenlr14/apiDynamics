const router = require('express').Router();

router.get('/all', (req, res) => {
    res.json('Recupero todos los usuarios');
});

router.post('/new', (req, res) => {
    console.log(req.body);

    res.json('Se crea un nuevo usuario');
});

router.delete('/:userId', (req, res) => {
    const { userId } = req.params;

    res.json('Borramos el usuario ' + userId);
});

module.exports = router;