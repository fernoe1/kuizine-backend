const Food = require('../model/food');

const foods = [];

function initialize() {
  foods.push(new Food(
    0,
    'template',
    'Kuyrdak',
    '— A hearty Kazakh dish made from roasted offal (usually liver, heart, and kidneys) cooked with onions, potatoes, and spices; rich, savory, and rustic.'
  ));

  foods.push(new Food(
    1,
    'template',
    'Kazy',
    '— A traditional horse meat sausage seasoned with garlic and black pepper, then air-dried or boiled; prized for its deep, smoky flavor.'
  ));

  foods.push(new Food(
    2,
    'template',
    'Shelpek',
    '— Thin, fried flatbread made from simple dough; golden and slightly chewy, commonly served with tea or on special Fridays.'
  ));
}

initialize();

module.exports = {
  getFoods: () => foods
};
