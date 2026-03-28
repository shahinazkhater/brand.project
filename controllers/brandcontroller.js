const Brand = require('../models/brandmodel');
const slugify = require('slugify');


exports.createBrand = async (req, res) => {
  try {
    const { name, image } = req.body;

    // create brand (الـ slug هيتعمل تلقائي من pre-save)
    const brand = await Brand.create({ name, image });

    res.status(201).json({ data: brand });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBrands = async (req, res) => {
  try {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 5;
    const skip = (page - 1) * limit;

    const brands = await Brand.find().skip(skip).limit(limit);

    res.status(200).json({
      results: brands.length,
      page,
      data: brands
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};