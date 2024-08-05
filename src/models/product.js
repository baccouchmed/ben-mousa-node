const mongoose = require('mongoose');

const { Schema } = mongoose;
const PriceSchema = new Schema({
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  discount: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
    default: 0
  }
}, { _id: false });
const Product = new Schema({
  subcategories: [{
    type: Schema.Types.ObjectId,
    ref: 'Subcategory',
  }],
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
  },
  fullDescription: {
    type: String,
  },
  rate: {
    type: Number,
    required: true,
    default: 0,
  },
  prices: [PriceSchema]
}, { timestamps: true });
module.exports = mongoose.model('Product', Product);
