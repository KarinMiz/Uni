const multer = require("multer");

const userStorage = multer.diskStorage({
  // destination: "./staff-images/",
  destination: "C:/Users/karin/Desktop/Study/jobInterviews/NGSOFT/UNI/Uni/server/staff-images",
  filename :(req, file, cb)=>{
    cb(null, req.params.id + ".png");
  },
});

module.exports = multer({ storage: userStorage });