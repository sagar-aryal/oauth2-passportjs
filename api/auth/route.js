import express from "express";
import passport from "./passport.js";

const router = express.Router();

const CLIENT_URL = "http://localhost:3000";

router.get(
  "auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "auth/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get(
  "auth/facebook",
  passport.authenticate("facebook", { scope: ["profile", "email"] })
);

router.get(
  "auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get(
  "auth/github",
  passport.authenticate("github", { scope: ["profile", "email"] })
);

router.get(
  "auth/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      // cookies: req.cookies,
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect(CLIENT_URL);
});

export default router;
