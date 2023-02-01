// Step 1 - Create /books/routes.js and /books/controllers.js
// Step 2 - Add POST /books/addbook to /books/routes and /books/controllers

require("dotenv").config();
require("./db/connection");
const express = require("express");
const port = process.env.PORT;
console.log("port: ", port, "typeof port: ", typeof port);
const Book = require("./books/model");

const app = express();

app.use(express.json());

// Step 1a - copy below POST route and

//=========== https://mongoosejs.com/docs/models.html --- under 'Constructing Documents' =================
app.post("/books/addbook", async (req, res) => {
  console.log("req.body: ", req.body);
  const newBook = await Book.create({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
  });

  const successResponse = {
    message: "success",
    newBook: newBook,
  };

  res.status(201).json(successResponse);
});

app.get("/books/getallbooks", async (req, res) => {
  //================ https://mongoosejs.com/docs/api.html#model_Model-find --- under 'Model.find()' ====

  const allBooks = await Book.find({});
  console.log("allBooks: ", allBooks);

  const successResponse = {
    message: "success",
    books: allBooks,
  };
  res.status(200).json(successResponse);
});

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

app.listen(port, () => console.log(`Server is listening on ${port}`));
