const User = require("./User");
const Note = require("./Note");

//User has many notes
User.hasMany(Note, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//Note belongs to one User
Note.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Note };
