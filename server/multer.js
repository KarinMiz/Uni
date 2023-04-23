const multer = require("multer");

const userStorage = multer.diskStorage({
  // destination: "./staff-images/",
  destination: "C:/Users/Lev Hayam/Desktop/Karin/My-Uni/Uni/server/staff-images/",
  filename :(req, file, cb)=>{
    cb(null, req.params.id + ".png");
  },
});

module.exports = multer({ storage: userStorage });