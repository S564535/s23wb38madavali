var Elephant = require('../models/Elephant');
// List of all Elephant
exports.Elephant_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Elephant list');
};
// for a specific Elephant.
exports.Elephant_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Elephant.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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




// List of all Elephants
exports.Elephant_list = async function(req, res) {
    try{
    theElephant = await Elephant.find();
    res.send(theElephant);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   

// VIEWS
// Handle a show all view
exports.Elephant_view_all_Page = async function(req, res) {
    try{
    theElephants = await Elephant.find();
    res.render('Elephant', { title: 'Elephant Search Results', results: theElephants });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };


// Handle Elephant create on POST.
exports.Elephant_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Elephant();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Elephant_type":"goat", "cost":12, "size":"large"}
    document.Elephant_type = req.body.Elephant_type;
    document.Elephant_Size = req.body.Elephant_Size;
    document.Elephant_weight = req.body.Elephant_weight;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };



// Handle Elephant update form on PUT.
exports.Elephant_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Elephant.findById( req.params.id)
 // Do updates of properties
 if(req.body.Elephant_type) 
 toUpdate.Elephant_type = req.body.Elephant_type;
 if(req.body.Elephant_weight) toUpdate.Elephant_weight = req.body.Elephant_weight;
 if(req.body.Elephant_Size) toUpdate.Elephant_Size = req.body.Elephant_Size;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
 }
};

// Handle Elephant delete on DELETE.
exports.Elephant_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Elephant.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

// Handle a show one view with id specified by query
exports.Elephant_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Elephant.findById( req.query.id)
    res.render('Elephantdetail',{ title: 'Elephant Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   
// Handle building the view for creating a Elephant.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Elephant_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Elephantcreate', { title: 'Elephant Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for updating a Elephant.
// query provides the id
exports.Elephant_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Elephant.findById(req.query.id)
    res.render('Elephantupdate', { title: 'Elephant Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
     }
    };
// Handle a delete one view with id from query
exports.Elephant_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Elephant.findById(req.query.id)
    res.render('Elephantdelete', { title: 'Elephant Delete', toShow: 
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

