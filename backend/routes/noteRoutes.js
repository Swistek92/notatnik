const express = require("express");
const { getNotes, createNote, getNoteById, updateNote, delateNote

} = require("../controllers/notesController");
const router = express.Router();
const { protect } = require("../middleweres/authMiddlewere")


router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router.route("/:id").get(getNoteById).put(protect, updateNote).delete(protect, delateNote);


module.exports = router


