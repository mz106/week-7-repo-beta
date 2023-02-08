// Step 1 - Create /books/routes.js and /books/controllers.js
// Step 2 - Add POST /books/addbook to /books/routes and /books/controllers --- starts on /books/routes.js
// Step 3 - Add try catch and errorResponse to /books/addbook in books/controllers.js
// Step 4 - Student task to move following routes/functions to seperate files.

require("dotenv").config();
require("./db/connection");
const express = require("express");
const cors = require("cors");
const port = process.env.PORT;

const Book = require("./books/model");
const bookRouter = require("./books/routes");

const app = express();

app.use(cors());
app.use(express.json());

// step 2c - add userRouter
app.use(bookRouter);

// Step 2b - copy below POST /books/addbook and move to /books/routes.js

//=========== https://mongoosejs.com/docs/models.html --- under 'Constructing Documents' =================
// app.post("/books/addbook", async (req, res) => {
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

// Step 4 - Student Task - move following routes in similar manner to POST route

// app.get("/books/getallbooks", async (req, res) => {
//   //================ https://mongoosejs.com/docs/api.html#model_Model-find --- under 'Model.find()' ====

//   const allBooks = await Book.find({});
//   console.log("allBooks: ", allBooks);

//   const successResponse = {
//     message: "success",
//     books: allBooks,
//   };
//   res.status(200).json(successResponse);
// });

// app.put("/books/updatebookauthor", async (req, res) => {
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

// app.delete("/books/deletebook", async (req, res) => {
//   const result = await Book.deleteOne({ title: req.body.title });
//   console.log(result);
//   const successResponse = {
//     message: "successfully deleted",
//   };
//   res.status(201).json(successResponse);
// });

app.get("/health", (req, res) => {
  res.status(201).json({ message: "API is working" });
});

app.listen(port, () => console.log(`Server is listening on ${port}`));
