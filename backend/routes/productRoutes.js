// routes/authRoutes.js
const express = require('express');
const { getAllProducts, createProduct, deleteProduct } = require('../controllers/productController');
const { verifyToken } = require('../middlewares/authMiddlewares');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/',verifyToken ,createProduct);
router.delete('/:id',verifyToken ,deleteProduct);

module.exports = router;
