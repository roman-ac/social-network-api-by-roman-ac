const { Schema, model, Types } = require('mongoose');
const moment = require('moment');


const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: string,
      required: true,
      minlength: 1,
      maxlength: 280,

    },
    createdAt: {
      type: Date,
      default: Date.now,
      //moment
      get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
      type: string,
      required: true,
    },
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// getting total count of reactions
ThoughtsSchema.virtual('reactionCount')

.get(function() {
  return this.reactions.length;
});

// creating the Thoughts model using the Thoughts Schema
const Thought = model('Thought', ThoughtSchema);

// Exporting Thoughts Module
module.exports = Thought;