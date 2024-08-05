const Product = require('../models/product');
const { errorCatch } = require('../shared/utils');

const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (e) {
    return errorCatch(e, res);
  }
};
const createOne = async (req, res) => {
  try {
    const { product } = req.body;
    const newOne = new Product({
      label: product.label,
      description: product.description,
      shortDescription: product.shortDescription || null,
      fullDescription: product.fullDescription || null,
      prices: product.prices,
      rate: product.rate,
    });
    await newOne.save();
    return res.status(201).json(newOne);
  } catch (e) {
    return errorCatch(e, res);
  }
};
const readOne = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(400).send({
        errors: [
          {
            msg: 'Category Id do not match',
            param: 'id',
            location: 'token',
          },
        ],
      });
    }

    return res.status(200).json(category);
  } catch (e) {
    return errorCatch(e, res);
  }
};
const updateOne = async (req, res) => {
  try {
    const {
      contact,
    } = req.body;
    const updatedOne = await Category.findByIdAndUpdate(req.params.id, contact);
    return res.status(201).json(updatedOne);
  } catch (e) {
    return errorCatch(e, res);
  }
};
const deleteOne = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    return res.status(201).json(true);
  } catch (e) {
    return errorCatch(e, res);
  }
};
module.exports = {
  getAll,
  createOne,
  readOne,
  updateOne,
  deleteOne,
};