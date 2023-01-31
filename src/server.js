// STEP 1 - go to /books/model.js and make Book model
// Step 2 - go to /db/connection and make connection
// Step 3 - make post route for create
// Step 4 - make get all books route
// Step 5 - student task - make delete and update route

require("dotenv").config();
require("./db/connection");
const express = require("express");
const port = process.env.PORT;
console.log("port: ", port, "typeof port: ", typeof port);
const Book = require("./books/model");

const app = express();

app.use(express.json());

// step 3a - post route for create
// make function async and explain why

//=========== https://mongoosejs.com/docs/models.html --- under 'Constructing Documents' =================
app.post("/books/addbook", async (req, res) => {
  console.log("req.body: ", req.body);
  // import Book from /books/model.js

  // At this point, before writing create method, look at Mongoose
  // docs and talk through.

  // Write out longform rather than just use req.body in create for clarity
  // In later sessions this can be shortened.
  const newBook = await Book.create({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
  });

  const successResponse = {
    message: "success",
    newBook: newBook,
  };

  // step 3b - now, refer to the create data design and user story diagram.
  // talk about the design and show how the code matches up to the data design.
  // mention how successResponse is mentioned in the docs and how we have constructed it.

  res.status(201).json(successResponse);
});

// step 4a - look at the read data design and user story diagram.
// talk about how the data is designed and what we want.

// step 4b - write getallbooks route - check mongoose docs for Model.find({})
app.get("/books/getallbooks", async (req, res) => {
  //================ https://mongoosejs.com/docs/api.html#model_Model-find --- under 'Model.find()' ====

  const allBooks = await Book.find({});
  // log allBooks and show that it is an array, and the return from Book.find({}) is an array and
  // that allBooks is the array that we want for the array in SuccessResponse in the design
  console.log("allBooks: ", allBooks);

  const successResponse = {
    message: "success",
    books: allBooks,
  };
  res.status(200).json(successResponse);
});

// Step 5 - give links to Model.updateOne() and Model.deleteOne()

// https://mongoosejs.com/docs/api.html#model_Model-updateOne
// https://mongoosejs.com/docs/api.html#model_Model-deleteOne

// Task is to follow the designs given and make an update route to update the books author with find by title,
// and to delete one book by title.

// ========================== NOTE!!!!!!!! =================================

// The follwoing examples will not allow for error responses nor allow for update/deletion of
// a non-existant DB document. Multiple responses have been left out to limit complexity and therefore
// confusion for the students. Multiple responses will be visited in the day's second session.

app.put("/books/updatebookauthor", async (req, res) => {
  const result = await Book.updateOne(
    { title: req.body.title },
    { author: req.body.newAuthor }
  );
  console.log("result: ", result);
  const successResponse = {
    message: "success",
    updatedBook: updatedBook,
  };
  res.status(201).json(successResponse);
});

app.delete("/books/deletebook", async (req, res) => {
  const result = await Book.deleteOne({ title: req.body.title });
  console.log(result);
  const successResponse = {
    message: "successfully deleted",
  };
  res.status(201).json(successResponse);
});

// working examples given below.

// Step 2b - add port to .env and add import at the top.
// app.listen(80, () => console.log("Server is listening on 3000"));
app.listen(port, () => console.log(`Server is listening on ${port}`));
