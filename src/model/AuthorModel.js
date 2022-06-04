const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amenyu:amenyu@cluster0.ekw0c.mongodb.net/Library');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;