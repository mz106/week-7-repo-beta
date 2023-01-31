// Step 1 - Add html route
// Step 2 - Add get route /books

const express = require("express");

const app = express();

app.use(express.json());

// step 1a - Add the following variable with string
// explain that the browser will read this and convert it to html
const html = `
    <body>
        <header>
            <h2>Michael's Awesome Website</h2>
            <nav>
                <ul>
                    <li>About</li>
                </ul>
            </nav>
        </header>
        <main>
            <h1>Michael's Awesome Website!!!</h1>
            <p>Lot's of stuff here!!!</p>
        </main>
    </body>
`;

//step 1b - add the following route and show in browser.
// raise differences in using the static route the previous day
// State that previsouly, we just connected to the static files with Express,
// but now we are sending a response using the below code to send a string.

app.use("/html", (req, res) => {
  res.send(html);
});

// step 2a - write a get route /book
// send back below object and relate to previous day's slides on user/client/server
// Explain that this route is getting a request from the client (TC) and esnding back a response.
// Ask students what could happen here (hint at db operation)

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

app.listen(5001, () => console.log("Server is listening on port 5001"));
