var Elephant = require('../models/Elephant');
// List of all Elephant
exports.Elephant_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Elephant list');
};
// for a specific Elephant.
exports.Elephant_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Elephant detail: ' + req.params.id);
};
// Handle Elephant create on POST.
exports.Elephant_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Elephant create POST');
};
// Handle Elephant delete form on DELETE.
exports.Elephant_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Elephant delete DELETE ' + req.params.id);
};
// Handle Elephant update form on PUT.
exports.Elephant_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Elephant update PUT' + req.params.id);
};
