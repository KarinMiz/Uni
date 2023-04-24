const express = require("express");
const coursesRoutes = require("./routes/courses");
const professionsRoutes = require("./routes/professions");
const staffRoutes = require("./routes/staff");
const studentsRoutes = require("./routes/students");
const authRoutes = require("./routes/auth");
const db = require("./db");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());

app.use("/courses", coursesRoutes);
app.use("/professions", professionsRoutes);
app.use("/staff", staffRoutes);
app.use("/students", studentsRoutes);
// app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.json("backend!!!");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
