// routes/authRoutes.js
const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/productController');
const { verifyToken } = require('../middlewares/authMiddlewares');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/',verifyToken ,createProduct);

module.exports = router;
