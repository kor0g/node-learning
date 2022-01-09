const countViews = (req, res, next) => {
  const { } = req.params
  next()
}

const getViews = (req, res, next) => {
  next()
}

module.exports = { countViews, getViews }
