// require associated model
const { User } = require("../models");

const userData = [
  {
    name: "Brock Hart",
    username: "hart2heart",
    password: "hart1234",

  },
  {
    name: "Ronald Weezer",
    username: "mouthbreather",
    password: "weezer12",

  },
  {
    name: "Jacob Bender",
    username: "bendomatic",
    password: "bender12",

  },
  {
    name: "Frank Skinner",
    username: "smoothskinner",
    password: "skinner1",

  },
  {
    name: "Shelly Kidd",
    username: "kidd4ever",
    password: "kidd1234",

  },
  {
    name: "Xander Raymond",
    username: "xray",
    password: "raymond1",

  },
  {
    name: "Natalie Knight",
    username: "knightnight",
    password: "knight12",

  },
  {
    name: "Samantha Whitecell",
    username: "redorwhite",
    password: "whitecell",

  },
  {
    name: "Robyn Sprinkles",
    username: "rsprink",
    password: "sprinkles",

  },
  {
    name: "Wendy Daigh",
    username: "wdaigh",
    password: "daigh123",

  },
  {
    name: "Lucinda Crain-Eyumm",
    username: "brainchild",
    password: "crain123",

  },
];

const seedUser = () =>
  User.bulkCreate(userData, { individualHooks: true });
module.exports = seedUser;
