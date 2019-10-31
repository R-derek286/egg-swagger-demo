/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('admin', {
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
    ConfirmPwd: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isDelete: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'admin'
  });

  Model.associate = function() {

  }

  return Model;
};
