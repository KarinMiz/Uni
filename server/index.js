const express = require("express");
const coursesRoutes = require("./routes/courses");
const professionsRoutes = require("./routes/professions");
const staffRoutes = require("./routes/staff");
const studentsRoutes = require("./routes/students");
const authRoutes = require("./routes/auth");
const db = require("./db");
const cors = require("cors");
const app = express();
const jwt = require("express-jwt");
const jsonwebtoken = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const { getStaff } = require("./api/staff");
const bcrypt = require ('bcrypt');
// a variable to save a session
var session;

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());

app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

app.use("/courses", coursesRoutes);
app.use("/professions", professionsRoutes);
app.use("/staff", staffRoutes);
app.use("/students", studentsRoutes);
// app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.json("backend!!!");
});

app.get("/currentUser", (req, res) => {
  console.log(req.session);
  if (req.session.userid) {
    res.send(`Welcome User with id: ${req.session.userid} `);
  } else res.send(`error with session`);
});

app.post("/login", async (req, res) => {
  // check if id exsiting
  const id = req.body.id;
  const isExist = await getStaff(id);
  if (isExist.rows[0]) {
    const nothashpassword = req.body.password;
    const hashpassword = isExist.rows[0].password;
    // check password
      const match = await bcrypt.compare(nothashpassword, hashpassword);
      if(match) {
           // write the user id on the session
          //  console.log(match);
           req.session.userid = isExist.rows[0].id;
           
           res.send("ok")
      }else{
        res.send("wrong password")
      }
   
  }else{
    console.log("user doesnt exist");
    res.send("user doesnt exist")
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
