const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amenyu:amenyu@cluster0.ekw0c.mongodb.net/Library');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    id : String,  
    uid: String,
    pwd: String,
});

const userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;