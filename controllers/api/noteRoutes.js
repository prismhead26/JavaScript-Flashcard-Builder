const router = require("express").Router();
const { Note, User } = require("../../models");
const withAuth = require("../../utils/auth");

// Create a note
router.post("/", withAuth, async (req, res) => {
  try {
    const noteData = await Note.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(noteData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});

// Update a note
router.put("/:id", withAuth, async (req, res) => {
  try {
    const noteData = await Note.update(
      {
        title: req.body.title,
        body: req.body.body,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );
    res.status(200).json(noteData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});

// Delete a note
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const noteData = await Note.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(noteData);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, an error has occured",
    });
  }
});


// get note by id
router.get("/:id", async (req, res) => {
  try {
    const noteData = await Note.findByPk(req.params.id);

    const note = noteData.get({ plain: true });
    res.render("note", {
      note,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
