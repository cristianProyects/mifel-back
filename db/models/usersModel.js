const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,    
    primaryKey: true,
    type: DataTypes.UUID, 
    defaultValue: DataTypes.UUIDV4, 
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  googleId: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Users extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'Users',
      timestamps: false
    }
  }
}


module.exports = { USER_TABLE, UserSchema, Users }