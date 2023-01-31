const mongoose = require("mongoose");

// Step 1
// Talk about a book being an object.
// Every book will have the following;
// title
// author
// genre

// As such, every book has these three things in common.
// They are the data that we are interested in.
// Therefore, we need to make a blueprint for a book.
// With our blueprint, we can store data of any book.
// The blueprint is reusable.
// We call this blueprint a 'Model'

// To make a model with Mongoose we;
//
// create a schema,
// add it to a model

//=================== https://mongoosejs.com/docs/models.html --- under 'Compiling your first model' ========

//This is the schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

// Explain about mongoose

// Mongoose os an ODM - Object Document Model.
// Mongoose is an eaiser way of using the MongoDB database technology
// MongoDB stores documents in collections.
// A document is a single instance of some data - for example, a single book
// would be a document.
// A collection is a grouping of documents that are about the same thing.
// So, we would store a book in a collection of books.
// We could store documents concerning actors in a collection of actors.

// Below is how we put our model, or blueprint, in to a document in a collection.

// mongoose.model - the functon that assigns our blueprint (in the form of a schema)
// to a collection

// "book" - the name of the collection - we write this will appear as a plural in the DB
// as "books"

// bookSchema - the blueprint that we want to be used the store data in the collection

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
