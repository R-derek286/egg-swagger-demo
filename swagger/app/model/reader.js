/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('reader', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Sex: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Contact: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CreateTime: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    UpdateTime: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'reader'
  });

  Model.associate = function() {

  }

  return Model;
};
