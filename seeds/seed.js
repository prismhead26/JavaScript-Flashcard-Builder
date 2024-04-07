require("dotenv").config();
const sequelize = require("../config/connection");

const seedUser = require("./userData");
const seedNote = require("./noteData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedNote();

  process.exit(0);
};

seedDatabase();
