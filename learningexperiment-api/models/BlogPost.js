//model/shema of our database

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const BlogSchema = new Schema({
 titulo: {
 	type: String,
 	default: ''
 },
  categoria: {//name
    type: String,
    required: true,
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
    autor: {//message
    type: String,
    required: true,
  },
    photo: {//message
    type: String,
    required: true,
  },
})

const BlogPost = mongoose.model('Post', BlogSchema);
module.exports = BlogPost;