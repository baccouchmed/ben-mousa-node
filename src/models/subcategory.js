const mongoose = require('mongoose');

const { Schema } = mongoose;

const Subcategory = new Schema({
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
  label: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Subcategory', Subcategory);
