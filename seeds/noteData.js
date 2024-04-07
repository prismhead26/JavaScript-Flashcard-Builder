// require associated model
const { Note } = require("../models");

const noteData = [
  {
    title: "Brock Hart",
    body: "hart2heart",
    user_id: 1,

  },
  {
    title: "Ronald Weezer",
    body: "mouthbreather",
    user_id: 1,

  },
  {
    title: "Jacob Bender",
    body: "bendomatic",
    user_id: 1,

  },
];

const seedNote = () =>
  Note.bulkCreate(noteData, { individualHooks: true });
module.exports = seedNote;
