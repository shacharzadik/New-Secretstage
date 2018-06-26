
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var db = require('../db');

//API Ruotes url 
// save new event 
//update exist event  with specific id 
//delete event by id 
//---------------------------------------------------
//get all the data 

const innerJoinQuery = "inner join venues on events.event_venue_id = venues.venue_id inner join artists on events.event_artist_id = artists.artist_id inner join users on events.event_host_id = users.user_id "

router.get('/', function (request, response, next) {
    let query = 'select * from events ' + innerJoinQuery;

    db.query(query, function (error, result, fields) {
        if(error){
            console.log(`error can't get data from the server `,error);
            return  next(error);
        }
        response.send(result);
        console.log('**********************************');
        console.log(`data send to client successfully`);
        console.log('**********************************');
    });
});

//get singal event by id 
router.get('/:id',function(request,response,next){

    console.log(typeof(request.params.id));
    console.log(request.params.id);
    let query = `select users.first_name as user_firstName, users.last_name as user_last, users.email as user_email ,users.password as user_password,  artists.first_name, artists.last_name, artists.email , artists.password from events ${innerJoinQuery} where events.id = ${request.params.id}` ;
    db.query(query,function (error,result,fields) {
        if(error){
            console.log(`error while getting event by id`,error);
            return next(error);
        }
        response.send(result);

    });
});

//save new event 
router.post('/',function(request,response,next){
    let query = `INSERT INTO events SET ? `;
    console.log(request.body);
    let event = {
        event_host_id : request.body.hostId,
        event_artist_id : request.body.artistId,
        event_cover_image : request.body.coverImage,
        event_description : request.body.description,
        event_date : request.body.date,
        event_title : request.body.title,
        event_type : request.body.eventType,
        event_genere_music : request.body.genereMusic,
        event_hospitality_options : request.body.hospitalityOptions,
        event_attendes : request.body.attendes,
        event_ticket_price : request.body.ticketPrice,
        event_is_public : request.body.isPublic
    }
    db.query(query, event,function (error,result) {
        if(error){
            console.log('failed to add new event',error);
        }
        response.send(result);
    });
});


module.exports = router;
