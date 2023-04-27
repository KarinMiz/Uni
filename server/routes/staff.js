const express = require("express");
const router = express.Router();
const userUpload = require("../multer");
const bcrypt = require("bcryptjs");

const {
  getAllStaff,
  addStaff,
  updateStaff,
  getStaff,
  deleteStaff,
  getTeachers,
} = require("../api/staff");

router.post(
  "/upload/:id",
  userUpload.single("file"),
  async function (req, res, next) {}
);

router.get("/", async (req, res) => {
  try {
    const staff = await getAllStaff();
    res.send(staff.rows);
  } catch (error) {
    res.send(error);
  }
});

router.get("/getTeachers", async (req, res) => {
  try {
    const teachers = await getTeachers();
    res.send(teachers.rows);
  } catch (error) {
    res.send(error);
  }
});

router.post("/addStaff", async (req, res) => {
  try {
    //Hash the password and create a user
    // var salt = bcrypt.genSaltSync(10);
    // var hash = bcrypt.hashSync(req.body.password, salt);
    const values = [
      req.body.id,
      req.body.name,
      req.body.password,
      req.body.job,
      req.body.gender,
      req.body.birthday,
      req.body.picture,
    ];

    const newStaff = await addStaff(values);
    res.send(newStaff.rows);

    console.log("New staff member has been created successfully");
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.put("/updateStaff/:id", async (req, res) => {
  try {
    const values = [
      req.body.name,
      req.body.password,
      req.body.job,
      req.body.gender,
      req.body.birthday,
      req.body.picture,
      req.params.id,
    ];
    const newStaff = await updateStaff(values);
    res.send(newStaff);

    console.log(` ${req.body.name} details has been updated successfully`);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    console.log(id);
    const staff = await getStaff(id);
    res.send(staff.rows);
  } catch (error) {
    res.send(error);
  }
});

router.put("/deleteStaff/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const staff = await deleteStaff(id);
    res.send(staff.rows);
    console.log(`user ${id} deleted successfully`);
  } catch (error) {
    res.send(error);
  }
});

router.get("/getPicture/:id", async (req, res) => {
  try {
    const path =
      "C:/Users/Lev Hayam/Desktop/Karin/My-Uni/Uni/server/staff-images";
    res.send(path);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
