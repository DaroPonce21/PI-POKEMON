const { Router } = require('express');
const router = Router();

const pokemons = require ('./pokemons');
const type = require ('./types');

router.use('/pokemons', pokemons)
router.use('/types', type)


module.exports = router;
