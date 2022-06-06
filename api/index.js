import express from "express";
import session from "express-session";
import cors from "cors";
import passport from "passport";

import authRoute from "./auth/route.js";
import { isLoggedIn } from "./middleware/isLoggedIn.js";

const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", isLoggedIn, authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});
