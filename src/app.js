const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');

const app = express();

const server = http.createServer(app);

const setupMongoServer = require('./middlewares/database');

// PORT
const port = process.env.PORT || 8000;
// Connecting mongoDB
setupMongoServer().then();

app.use(morgan('combined'));
// Setting up static directory
app.use('/api/public', express.static(path.join(__dirname, 'public')));
app.use('/api/private', express.static(path.join(__dirname, 'private')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// ******* ROUTES IMPORTS ******* //
const productsRoute = require('./routes/products.route');
const subcategoriesRoute = require('./routes/subcategories.route');
const categoriesRoute = require('./routes/categories.route');
// ******* ROUTES APIS ******* //
app.use('/api/categories', categoriesRoute);
app.use('/api/subcategories', subcategoriesRoute);
app.use('/api/products', productsRoute);

app.get('/', (req, res) => {
    res.status(404).send({ message: '404 not found' });
});

app.get('*', (req, res) => {
    res.status(404).json({ message: '404 not found' });
});

app.use((req, res) => {
    res.status(404).json({ message: '404 not found' });
});

server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.info(`Connected to port ${port}`);
});
