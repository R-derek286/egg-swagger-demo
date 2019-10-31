/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('users', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Account: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Role: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'users'
  });

  Model.associate = function() {

  }

  return Model;
};
