const express = require("express");
const router = express.Router();
const userUpload = require("../multer");
const bcrypt = require("bcryptjs");
const path = require("path");

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
    const newStaff = await addStaff(req.body);
    const userid = req.body.id;
    console.log(req.body.id);
    req.session.userid = userid;
    res.send(newStaff.rows);
    console.log("New staff member has been created successfully");
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

router.put("/updateStaff/:id", async (req, res) => {
  try {
    const newStaff = await updateStaff(req.body);
    res.send(newStaff);

    console.log(` ${req.body.name} details has been updated successfully`);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const staff = await getStaff(id);
    // console.log(staff.rows);
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

router.get("/getPicture/:id", function (req, res, next) {
  var options = { root: path.join() };
  const id = req.params.id;
  const usetPicture = `staff-images/${id}.png`;
  res.sendFile(usetPicture, options, function (err) {
    if (err) {
      const defaultPicture = "staff-images/default.png";
      res.sendFile(defaultPicture, options, function (err) {
        if (err) {
          next(err);
        }
      });
    }
  });
});

module.exports = router;
