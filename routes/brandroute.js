const express = require('express');
const { createBrand, getBrands } = require('../controllers/brandcontroller');

const router = express.Router();

router.route('/')
  .get(getBrands)
  .post(createBrand);

module.exports = router;