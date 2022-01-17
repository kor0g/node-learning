const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

passport.use(new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback',
  },
  ((accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile))
  }),
))

module.exports = passport
