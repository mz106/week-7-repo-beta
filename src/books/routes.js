// step 2a - import express, initilise router and export router
const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");
const {
  addBook,
  getAllBooks,
  updateBookAuthor,
  deleteBook,
} = require("./controllers");

// step 2b - paste POST /books/addbook here and change 'app.post' to 'userRouter.post'
// step 2c - add import to server.js and put in app.use

// NOTE --- after moving the route to routes.js and controllers.js, talk about seperation of concerns.

// test that /books/addbook works, then take function out and put in controllers
// test /books/addbook

// userRouter.post("/books/addbook", async (req, res) => {
//   console.log("req.body: ", req.body);
//   const newBook = await Book.create({
//     title: req.body.title,
//     author: req.body.author,
//     genre: req.body.genre,
//   });

//   const successResponse = {
//     message: "success",
//     newBook: newBook,
//   };

//   res.status(201).json(successResponse);
// });

// Student task

// bookRouter.get("/books/getallbooks", async (req, res) => {
//   //================ https://mongoosejs.com/docs/api.html#model_Model-find --- under 'Model.find()' ====

//   const allBooks = await Book.find({});
//   console.log("allBooks: ", allBooks);

//   const successResponse = {
//     message: "success",
//     books: allBooks,
//   };
//   res.status(200).json(successResponse);
// });

// bookRouter.put("/books/updatebookauthor", async (req, res) => {
//   const result = await Book.updateOne(
//     { title: req.body.title },
//     { author: req.body.newAuthor }
//   );
//   console.log("result: ", result);
//   const successResponse = {
//     message: "success",
//     updatedBook: updatedBook,
//   };
//   res.status(201).json(successResponse);
// });

// bookRouter.delete("/books/deletebook", async (req, res) => {
//   const result = await Book.deleteOne({ title: req.body.title });
//   console.log(result);
//   const successResponse = {
//     message: "successfully deleted",
//   };
//   res.status(201).json(successResponse);
// });

bookRouter.post("/books/addbook", addBook);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.put("/books/updatebookauthor", updateBookAuthor);
bookRouter.delete("/books/deletebook", deleteBook);

module.exports = bookRouter;
