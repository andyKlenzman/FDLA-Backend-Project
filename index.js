import cors from "cors";
import express from "express";
import mainRoute from "./routes/mainRoute.js";
import createHttpError from "http-errors";
import initdb from "./utils/initdb.js";
import morgan from "morgan";

//Create our server, add our packages, and turn it on
let app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
initdb();

const server = app.listen("4000", () => {
  console.log("App is listening at http://localhost:4000");
});

app.use("/", mainRoute);
// error handler
app.use((err, req, res, next) => {
  console.error("+++ERROR+++", err.message);

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json({ error: err });
});

app.use(function (req, res, next) {
  next(createHttpError(404));
});

export default server;
