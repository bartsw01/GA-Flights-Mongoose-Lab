var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// POST /flights
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);

router.get("/:id", flightsCtrl.show);
router.post('/', flightsCtrl.create);
/* GET users listing. */


module.exports = router;
