//model/shema of our database

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const signatureSchema = new Schema({
 userId: {
 	type: String,
 	default: ''
 },
  guestSignature: {//name
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  message: {//message
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
})

const Signature = mongoose.model('Signature', signatureSchema);
//first argument is the singular name of the collection your model is for. 
//Mongoose automatically looks for the plural version of your model name
module.exports = Signature;