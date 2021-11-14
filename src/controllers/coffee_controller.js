const {coffeeService} = require('../services');

const getCoffee = async (req, res) => {
  const coffeeName = req.query.coffeeName;
  const coffee = coffeeService.getCoffee(coffeeName);
  res.json(coffee).status(200);
};

const coffeeLover = async (req, res) => {
  res.send('I like coffee!').status(200);
};

module.exports = {
  getCoffee,
  coffeeLover,
};
