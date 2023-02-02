// step 2a - import express, initilise router and export router
const { Router } = require("express");
const userRouter = Router();
const Book = require("./model");

// step 2b - paste POST /books/addbook here and change 'app.post' to 'userRouter.post'
// step 2c - add import to server.js and put in app.use

userRouter.post("/books/addbook", async (req, res) => {
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

module.exports = userRouter;
