const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./staff-images/",
  filename :(req, file, cb)=>{
    cb(null, req.body.fileName + ".png");
  },
});

module.exports = multer({ storage: storage });