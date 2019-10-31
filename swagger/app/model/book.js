/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('book', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    BookName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Author: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    Price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Typeid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CreateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UpdateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Stock: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    isSoldout: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    isDelete: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'book'
  });

  Model.associate = function() {

  }

  return Model;
};
