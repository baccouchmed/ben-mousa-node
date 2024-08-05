const express = require('express');
const { isAuth } = require('../middlewares/authorization');

const {
  getAll,
  createOne,
  readOne,
  updateOne,
  deleteOne,
} = require('../controllers/categories.controller');

const categoriesRoute = express.Router();

// ****************************** Get All ****************************** //
categoriesRoute.get('/',
    getAll);
// ****************************** Create One ****************************** //
categoriesRoute.post('/',
  createOne);
// ****************************** Read One ****************************** //
categoriesRoute.get('/:id',
    readOne);
// ****************************** Update One ****************************** //
categoriesRoute.patch('/:id',
  isAuth,
  updateOne);
// ****************************** Delete One ****************************** //
categoriesRoute.delete('/:id',
  isAuth,
  deleteOne);

module.exports = categoriesRoute;
