const Book = require("./model");

// step 2c - add function addBook and import Book and test

// step
const addBook = async (req, res) => {
  console.log("req.body: ", req.body);
  try {
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
  } catch (error) {
    const errorResponse = {
      message: "error",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

module.exports = {
  addBook,
};
