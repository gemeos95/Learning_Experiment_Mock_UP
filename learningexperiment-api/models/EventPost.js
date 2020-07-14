//model/shema of our database

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const EventSchema = new Schema({
 titulo: {
 	type: String,
 	default: ''
 },
  data: {//message
    type: String,
    required: true,
  },
  /*
   timestamp:{
 	type: Date,
 	default:Date.now()  ?????????
 },*/
    photo: {//message
    type: String,
    required: true,
  },
})

const EventPost = mongoose.model('Event', EventSchema);
module.exports = EventPost;