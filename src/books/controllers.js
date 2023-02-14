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

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});

    const successResponse = {
      message: "success",
      books: allBooks,
    };
    res.status(200).json(successResponse);
  } catch (error) {
    const errorResponse = {
      message: "error",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

const updateBookAuthor = async (req, res) => {
  console.log(req.body);
  try {
    const result = await Book.updateOne(
      { title: req.body.title },
      { author: req.body.newAuthor }
    );
    console.log("result: ", result);
    const successResponse = {
      message: "success",
      result: result,
    };
    res.status(201).json(successResponse);
  } catch (error) {
    console.log("!!!!! error: ", error);
    const errorResponse = {
      message: "error",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

const deleteBook = async (req, res) => {
  try {
    const result = await Book.deleteOne({ title: req.body.title });
    console.log(result);
    const successResponse = {
      message: "successfully deleted",
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
  getAllBooks,
  updateBookAuthor,
  deleteBook,
};
