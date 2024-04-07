// ROUTES FOR HTML TEMPLATES
const router = require("express").Router();
const { User, Note } = require("../models");
const withAuth = require("../utils/auth");

// Route to get main HTML page
router.get("/", async (req, res) => {
  try {
    const noteData = await Note.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
  });

    const notes = noteData.map((note) => note.get({ plain: true }));
    // console.log('note data ========', notes)
    res.render("homepage", {
      notes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log('error =======', err)
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    return res.redirect("/");
  }
  res.render("login");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Note,
          attributes: ["title", "body", "id", "user_id"],
        },
      ],
    });
    const note = userData.get({ plain: true });

    res.render("dashboard", {
      ...note,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Oops, a server error!",
    });
  }
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;
