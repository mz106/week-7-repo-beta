//Step 2a - Go through getting the connection string from Atlas

// Common issues;

// 1. No allowing computer ip address on Atlas whitelist
// 2. Issues with password - explain to students that a user needs to be added and a
//    password issued to user different from the account password.

//

const mongoose = require("mongoose");

async function connection() {
  try {
    // Connection string like this first.
    // Ask about security
    // Talk about the need for a .env file to secure things.
    // Install dotenv and add string to .env and add .env to gitignore
    // Require dotenv in server.js
    // OPTIONAL - port can be added to .env in server.js
    // await mongoose.connect(
    //   "mongodb+srv://michael:lLCTEYwFn4ZOQWvF@cluster0.ntmsxeg.mongodb.net/?retryWrites=true&w=majority"
    // );

    //========================== https://mongoosejs.com/docs/connections.html --- under 'Connections' ========

    await mongoose.connect(process.env.MONGO_URI);
    console.log("succesfully connected");
  } catch (error) {
    console.log("!!!!!!!!!!!!!!");
    console.log(error);
  }
}

connection();
