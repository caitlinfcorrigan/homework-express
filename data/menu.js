// data/menu-db.js

const meals = [
    {meal: "Breakfast", food: "Smoothie", serving: false},
    {meal: "Lunch", food: "Sandwich", serving: true},
    {meal: "Snack", food: "Chips", serving: true},
    {meal: "Dinner", food: "Tacos", serving: false}
  ];

  module.exports = {
    getAll: function() {
        return meals;
    }
  }