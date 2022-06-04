const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amenyu:amenyu@cluster0.ekw0c.mongodb.net/Library');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;