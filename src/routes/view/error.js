const renderError = (req, res) => {
  res.render('index', {
    content: 'error',
    pageTitle: 'Error',
  })
}

module.exports = { renderError }
