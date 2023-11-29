var express = require('express');
const Elephant_controlers= require('../controllers/Elephant');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }

/* GET Elephant */
router.get('/', Elephant_controlers.Elephant_view_all_Page );
module.exports = router;

/* GET detail Elephant page */
router.get('/detail', Elephant_controlers.Elephant_view_one_Page);

/* GET create Elephant page */
router.get('/create', secured, Elephant_controlers.Elephant_create_Page);

/* GET update Elephant page */
router.get('/update', secured, 
 Elephant_controlers.Elephant_update_Page);

/* GET delete Elephant page */
router.get('/delete', secured, Elephant_controlers.Elephant_delete_Page);

