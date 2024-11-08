// routes/authRoutes.js
const express = require('express');
const { getAllProducts, createProduct, deleteProduct, updateProduct, getProduct } = require('../controllers/productController');
const { verifyToken, verifyAdmin } = require('../middlewares/authMiddlewares');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/',verifyAdmin ,createProduct);
router.put('/:id',verifyAdmin ,updateProduct);
router.delete('/:id',verifyAdmin ,deleteProduct);


module.exports = router;
