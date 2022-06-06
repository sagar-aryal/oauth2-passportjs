import GoogleStrategy from "passport-google-oauth20";
import FacebookStrategy from "passport-facebook";
import GithubStrategy from "passport-github2";
import passport from "passport";
import dotenv from "dotenv";

dotenv.config();
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

// Google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },

    function (request, accessToken, refreshToken, profile, done) {
      /*  User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user); 
      }); */
      done(null, profile);
    }
  )
);

/* // Facebook strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:5000/auth/facebook/callback",
    },

    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

// Github strategy
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
); */

passport.serializeUser = (user, done) => {
  return done(null, user);
};

passport.deserializeUser = (user, done) => {
  return done(null, user);
};

export default passport;
