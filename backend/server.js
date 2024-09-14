import express from "express";
import config from "./config/config.js";
import db from "./config/db.js";
import router from "./router/contact.routes.js";
import morgan from "morgan";
import cors from "cors";

const whitelist = [
  "http://localhost:5173",
  "http://localhost:8080",
  "https://portfolio-org.onrender.com",
];

var corsOptions = {
  origin: function (origin, callback) {
    if (!origin) {
      //for bypassing postman req with  no origin
      return callback(null, true);
    }
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use("/", router);
app.use(morgan("tiny"));

db.then(() => {
  console.log("DATABASE CONNECTED");
}).catch((err) => {
  console.log(err);
});

app.listen(
  config.PORT,
  console.log(`SERVER IS RUNNING AT PORT ${config.PORT}`)
);
