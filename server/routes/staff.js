const express = require("express");
const router = express.Router();
const {
  getAllStaff,
  addStaff,
  updateStaff,
  getStaff,
} = require("../api/staff");

router.get("/", async (req, res) => {
  try {
    const staff = await getAllStaff();
    res.send(staff.rows);
  } catch (error) {
    res.send(error);
  }
});

router.post("/addStaff", async (req, res) => {
  try {
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

    const staff = await getStaff(id);
    res.send(staff.rows);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
