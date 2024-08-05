const express = require('express');
const { isAuth } = require('../middlewares/authorization');

const {
  getAll,
  createOne,
  readOne,
  updateOne,
  deleteOne,
} = require('../controllers/products.controller');

const productsRoute = express.Router();

// ****************************** Get All ****************************** //
productsRoute.get('/',
    getAll);
// ****************************** Create One ****************************** //
productsRoute.post('/',
  createOne);
// ****************************** Read One ****************************** //
productsRoute.get('/:id',
    readOne);
// ****************************** Update One ****************************** //
productsRoute.patch('/:id',
  isAuth,
  updateOne);
// ****************************** Delete One ****************************** //
productsRoute.delete('/:id',
  isAuth,
  deleteOne);

module.exports = productsRoute;
