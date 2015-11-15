'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
  name: String,
  date: Date,
  amount: Number,
  comments: String,
  category: String
});

module.exports = mongoose.model('Expense', ExpenseSchema);