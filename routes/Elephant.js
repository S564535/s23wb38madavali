var express = require('express');
const Elephant_controlers= require('../controllers/Elephant');
var router = express.Router();
/* GET Elephant */
router.get('/', Elephant_controlers.Elephant_view_all_Page );
module.exports = router;

/* GET detail Elephant page */
router.get('/detail', Elephant_controlers.Elephant_view_one_Page);

/* GET create Elephant page */
router.get('/create', Elephant_controlers.Elephant_create_Page);

/* GET create update page */
router.get('/update', Elephant_controlers.Elephant_update_Page);

/* GET delete Elephant page */
router.get('/delete', Elephant_controlers.Elephant_delete_Page);

