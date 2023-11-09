var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Elephant_controller = require('../controllers/Elephant');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Elephant ROUTES ///
// POST request for creating a Elephant. 
router.post('/Elephants', Elephant_controller.Elephant_create_post);
// DELETE request to delete Elephant.
router.delete('/Elephants/:id', Elephant_controller.Elephant_delete);
// PUT request to update Elephant.
router.put('/Elephants/:id', Elephant_controller.Elephant_update_put);
// GET request for one Elephant.
router.get('/Elephants/:id', Elephant_controller.Elephant_detail);
// GET request for list of all Elephant items.
router.get('/Elephants', Elephant_controller.Elephant_list);
module.exports = router;