// step 2a - import express, initilise router and export router
const { Router } = require("express");
const userRouter = Router();

const Book = require("./model");
const { addBook } = require("./controllers");

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

userRouter.post("/books/addbook", addBook);

module.exports = userRouter;
