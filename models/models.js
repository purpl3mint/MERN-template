const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  id: {type: Number, primaryKey: true, autoIncrement: true},
  username: {type: String, unique: true},
  password: {type: String},
  level: {type: Number, require: true, defaultValue: 0},
  group_id: {type: Number}
}) 

const User = model('User', userSchema)

module.exports = {
  User
}