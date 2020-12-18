const express = require("express");

const app = express();
const path = require("path");

app.use(express.json());

const apiRouter = require('server/routes/api.js');

// statically serve everything in the build folder on the route '/build'
if (process.env.NODE_ENV === "production") {
  app.use("/build", express.static(path.join(__dirname, "../build")));
  // serve index.html on the route '/'
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
}

app.use('/api', apiRouter);

app.use("*", (req, res) =>
  res.status(404).send("Unable to find the requested resource!")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error wackamole",
    status: 400,
    message: { err: "An error occurred, holy moly" },
  };

  const errObj = Object.assign(defaultErr, err);
  console.log(errObj.log);
  res.status(errObj.status).send(errObj.message);
});

console.log("server is running");
app.listen(3000); // listens on port 3000 -> http://localhost:3000/
