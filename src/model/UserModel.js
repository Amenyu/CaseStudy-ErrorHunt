const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    id : String,  
    uid: String,
    pwd: String,
});

const userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;