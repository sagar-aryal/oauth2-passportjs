import express from "express";
import cookieSession from "cookie-session";
import cors from "cors";
import passport from "passport";

import authRoute from "./routes/auth.js";
import passportSetup from "./passport.js";

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["sagar"],
    maxAge: 24 * 60 * 60 * 100,
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

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});
