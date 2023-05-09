const express = require("express");
const router = express.Router();

const {
    getAllAuthorities,
    addAuthority,
    updateAuthority,
    getTeacherAuthority,
    isExistAuthority,
  } = require("../api/authorities");

  router.get("/", async (req, res) => {
    try {
      const authorities = await getAllAuthorities();
      res.send(authorities.rows);
    } catch (error) {
      res.send(error);
    }
  });

  router.post("/addAuthority", async (req, res) => {
    try {
      const newAuthority = await addAuthority(req.body);
      res.send(newAuthority);
      console.log("New authority has been created successfully");
    } catch (error) {
      res.send(error);
      console.log(error);
    }
  });

  router.put("/updateAuthority", async (req, res) => {
    try {
      const values = [
        values.isAvaliable,
        values.profession_id,
        values.teacher_id,
      ];
      const newAuthority = await updateAuthority(values);
      res.send(newAuthority);
  
      console.log(` Authority details has been updated successfully`);
    } catch (error) {
      res.send(error);
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const authority = await getTeacherAuthority(id);
      res.send(authority.rows);
    } catch (error) {
      res.send(error);
    }
  });

  router.get("/isExist", async (req, res) => {
    try {
      const authority = await isExistAuthority(req.body);
      res.send(authority.rows);
    } catch (error) {
      res.send(error);
    }
  });

  module.exports = router;