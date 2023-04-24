const express = require("express");
const router = express.Router();

const {
    register,
  } = require("../api/auth");

router.post("/register", async (req, res) => {
    try {
        const data = await register();
        if(data.length){
            return res.status(409).json("User already exists!")
        }

    } catch (error) {
      res.send(error);
    }
  });

  router.post("/login", async (req, res) => {
    try {

    } catch (error) {
      res.send(error);
    }
  });

  router.post("/logout", async (req, res) => {
    try {

    } catch (error) {
      res.send(error);
    }
  });