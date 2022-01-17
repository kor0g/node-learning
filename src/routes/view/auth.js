const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next()
  res.redirect('/login')
}

const renderAccount = (req, res) => {
  res.render('index', {
    content: 'account',
    pageTitle: 'My GitHub account data',
    user: req.user,
  })
}

const logout = (req, res) => {
  req.logout()
  res.redirect('/')
}

module.exports = {
  ensureAuthenticated, renderAccount, logout,
}
