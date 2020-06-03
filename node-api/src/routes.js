const express = require("express");
const routes = express.Router();

const ProductsController = require('./controllers/ProductController');

routes.get("/products", ProductController.index);

module.exposts = routes;