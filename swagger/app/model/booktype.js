/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('booktype', {
    Id: {
      type: DataTypes.INTEGER(10).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    isDeleted: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'booktype'
  });

  Model.associate = function() {

  }

  return Model;
};
