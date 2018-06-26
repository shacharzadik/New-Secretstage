
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var db = require('../db');

//API Ruotes url 
// save new user 
//update exist user  with specific id 
//delete user by id 
//---------------------------------------------------
//get all the data 
router.get('/', function (request, response, next) {
    let query = 'select * from users'
    db.query(query, function (error, result, fields) {
        if(error){
            console.log(`server side error can't get data from the server `,error);
            return  next(error);
        }
        response.send(result);
        console.log('**********************************');
        console.log(`data send to client successfully`);
        console.log('**********************************');
    });
});

//get singal user by id 
router.get('/:id',function(request,response,next){

    console.log(typeof(request.params.id));
    console.log(request.params.id);
    let query = `select * from users where user_id = ${request.params.id}`;
    db.query(query,function (error,result,fields) {
        if(error){
            console.log(`error while getting user by id`,error);
            return next(error);
        }
        response.send(result);

    });
});

//save new user 
router.post('/',function(request,response,next){
    let query = `INSERT INTO users SET ? `;
    console.log(request.body);
    let user = {
        user_first_name : request.body.firstName,
        user_last_name : request.body.lastName,
        user_email : request.body.email,
        user_password : request.body.password,
        user_phone_number : request.body.phone,
        user_image : request.body.imageUrl,
        user_type : request.body.userType,
        user_points : request.body.points,
        user_reviews : request.body.reviews,
        user_facebook : request.body.facebookUrl
    }
    db.query(query, user,function (error,result) {
        if(error){
            console.log('failed to add new user',error);
        }
        response.send(result);
    });
});

module.exports = router;
