const multer = require('multer')
const fs = require('fs')

const getExt = (mimetype) => mimetype.split('/')[1]

const usploadsDir = 'uploads/'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(usploadsDir)) fs.mkdirSync(usploadsDir)
    cb(null, usploadsDir)
  },
  filename: (req, file, cb) => {
    cb(null, `${req.bookId}.${getExt(file.mimetype)}`)
  },
})

const fileFilter = (req, file, cb) => {
  const extensions = ['jpg', 'jpeg', 'png']
  const fileExtension = file.mimetype.split('/')[1]
  const needSave = extensions.includes(fileExtension)

  if (!needSave) {
    req.fileUploadError = `Alowed extensions: ${extensions.join(', ')}`
  }

  cb(null, needSave)
}

const upload = multer({ storage, fileFilter })

const setBookId = (req, res, next) => {
  req.bookId = String(Date.now())
  next()
}

module.exports = { upload, setBookId }
