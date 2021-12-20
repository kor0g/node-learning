const loginHandler = (_, res) => {
  res
    .status(201)
    .json({ data: { id: 1, mail: 'test@mail.ru' } })
}

module.exports = { loginHandler }
