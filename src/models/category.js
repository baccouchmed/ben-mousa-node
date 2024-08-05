const mongoose = require('mongoose');

const { Schema } = mongoose;

const Category = new Schema({
  label: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Category', Category);
