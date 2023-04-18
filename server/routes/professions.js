const express = require("express");
const router = express.Router();
const { 
    getAllProfessions,
    getProfession 
} = require("../api/professions");

router.get("/", async (req, res) => {
  try {
    const professions = await getAllProfessions();
    res.send(professions.rows);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const profession = await getProfession(id);
    res.send(profession.rows);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
