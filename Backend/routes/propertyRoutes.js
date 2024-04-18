const express = require('express');
const propertyShares = require('../controllers/propertyShares');
const router = express.Router();


router.route('/createProperty')
    .post(propertyShares.createProperty);

// Get all lands
router.route('/getProperty')
    .get(propertyShares.getProperty);

router.route('/createShare')
    .post(propertyShares.createShare);

module.exports = router;