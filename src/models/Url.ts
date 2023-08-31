const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Url = sequelize.define("url", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  original_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  short_url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Url;

