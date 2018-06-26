
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var db = require('../db');

//API Ruotes url 
// save new artist 
//update exist artist  with specific id 
//delete artist by id 
//---------------------------------------------------
//get all the data 
router.get('/', function (request, response, next) {
    let query = 'select * from artists'
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

//get singal artist by id 
router.get('/:id',function(request,response,next){

    console.log(typeof(request.params.id));
    console.log(request.params.id);
    let query = `select * from artists where id = ${request.params.id}`;
    db.query(query,function (error,result,fields) {
        if(error){
            console.log(`error while getting artist by id`,error);
            return next(error);
        }
        response.send(result);

    });
});

//save new artist 
router.post('/',function(request,response,next){
    let query = `INSERT INTO artists SET ? `;
    console.log(request.body);
    let artist = {
        artist_first_name : request.body.firstName,
        artist_last_name : request.body.lastName,
        artist_email : request.body.email,
        artist_password : request.body.password,
        artist_cover_photo : request.body.cover_photo,
        artist_description : request.body.description,
        artist_facebook : request.body.facebookUrl,
        artist_instagram : request.body.instagramUrl,
        artist_spotify : request.body.spotifyUrl,
        artist_youtube : request.body.youtubeUrl,
        artist_event_type : request.body.eventType,
        artist_genere_music : request.body.genereMusic
    }
    db.query(query, artist,function (error,result) {
        if(error){
            console.log('failed to add new artist',error);
        }
        response.send(result);
    });
});

module.exports = router;
