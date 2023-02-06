// Step 1 - Add get route /books
// Step 2 - Add post route /books

const express = require("express");

const app = express();

app.use(express.json());

//step 1a - add the following route and show in browser.
// raise differences in using the static route the previous day
// State that previsouly, we just connected to the static files with Express,
// but now we are sending a response using the below code to send a string.
// The response is to a http GET request that will automatically be sent by the
// browser (the user agent)
// send back below object and relate to previous day's slides on user/client/server
// Explain that this route is getting a request from the client (TC) and sending back a response.
// Ask students what could happen here (hint at db operation)

// Again, go to the browser and navigate to http://localhost:5001/book and go to the network tab
// on inspection tools.
// Show students the GET request and the route (or file as it is shown).
// Ask about the 404 response for the favicon - there is no favicon found so a response of status 404
// 'Not found' is sent from the server.

// Then use TC to get the response and explain that TC is like a bargain basement browser where we can send requests
// and get responses.

app.get("/book", (req, res) => {
  const book = {
    title: "lord of the rings",
    author: "tolkein",
    genre: "fantasy",
  };

  const successResponse = {
    message: "response sent successfully",
    book: book,
  };

  res.status(200).json(successResponse);
});

// step 3a - write post route /book

// Use TC to send a body and get a response. Explain how our route (or the callback) has manipulated the
// data brought in the body and sent it back in a response.

// Ask students to take note of the structure of the

app.post("/book", (req, res) => {
  console.log("/src/server.js POST /book req.body: ", req.body);

  // this is just simple manipulation of the body.

  // refer back to slides.

  const bookStringObj = {
    titleString: `I really like ${req.body.title}`,
    authorString: `${req.body.author} is a good author`,
    genreString: `${req.body.genre} is a great genre`,
  };

  const successResponse = {
    message: "success",
    bookStringObj: bookStringObj,
  };

  res.status(201).json(successResponse);
});

app.listen(5001, () => console.log("Server is listening on port 5001"));
