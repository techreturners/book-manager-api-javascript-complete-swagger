const express = require('express');

const {coffeeController} = require('../controllers');

const router = new express.Router();

router.get('/coffee', coffeeController.getCoffee);
router.get('/coffeelover', coffeeController.coffeeLover);

module.exports = router;
