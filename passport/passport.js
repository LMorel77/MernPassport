const passport = require("passport");

// Luis: Original Franklin Code...
// const LocalStrategy = require("passport-local");

// Luis: Updated code...
const LocalStrategy = require("passport-local").Strategy;
const router = require("express").Router();

const db = require("../models");

// Luis: Original Franklin code...
// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// Luis: Updated code...
passport.serializeUser(function (user, done) {
  done(null, user);
});

// Luis: Original Franklin code...
// passport.deserializeUser(function (id, done) {
//   db.User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

// Luis: Updated code...
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Luis: Original Franklin code...
// passport.use(new LocalStrategy({
//     usernameField:"email"
//   },
//   function(username, password, done) {
//     db.User.findOne({ email: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }));

// Updated code...
passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function (email, password, done) {
    db.User.findOne({
      where: { email: email }
    })
      .then((error, dbUser) => {

        if (error) return done(error);
        if (!dbUser) return done(null, false, { message: 'Incorrect username.' });
        if (!dbUser.validPassword(password)) return done(null, false, { message: 'Incorrect password.' });

        // If login successful, return user info
        return done(null, {
          id: dbUser.id,
          name: dbUser.name,
          email: dbUser.email,
          occupation: dbUser.occupation,
          relationshipType: dbUser.relationshipType,
          location: dbUser.location,
          imageUrl: dbUser.imageUrl,
          bio: dbUser.bio
        });

      });
  }));

module.exports = passport;