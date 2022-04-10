const { Schema, model } = require('mongoose');

// Schema to create user model
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
              // REGEX to validate correct email
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    },
    thoughts: [{
      type: Schema.Types.ObjectID,
      ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectID,
      ref: 'User'
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// getting total count of friends
UserSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });
  
// creating the User model using the User Schema
const User = model('User', UserSchema);

module.exports = User;
