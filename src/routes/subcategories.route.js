const express = require('express');
const { isAuth } = require('../middlewares/authorization');

const {
  getAll,
  createOne,
  readOne,
  updateOne,
  deleteOne,
} = require('../controllers/subcategories.controller');

const subcategoriesRoute = express.Router();

// ****************************** Get All ****************************** //
subcategoriesRoute.get('/',
    getAll);
// ****************************** Create One ****************************** //
subcategoriesRoute.post('/',
  createOne);
// ****************************** Read One ****************************** //
subcategoriesRoute.get('/:id',
    readOne);
// ****************************** Update One ****************************** //
subcategoriesRoute.patch('/:id',
  isAuth,
  updateOne);
// ****************************** Delete One ****************************** //
subcategoriesRoute.delete('/:id',
  isAuth,
  deleteOne);

module.exports = subcategoriesRoute;
