const { Schema, model } = require('mongoose');
const dayjs = require('dayjs')
const thoughtSchema = new Schema({

    thoughtText: {
        type: String,
        require: true,
        minLength: 1,
        maxLength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get:() => dayjs().format("MM/DD/YYYY")
      },
      username: {
        type: String,
        required: true
      },

      reactions: [reactionSchema]
    },
    {
      toJSON: {
        getters: true
      },
      id: false
    }
  );
  
  thoughtSchema
    .virtual('reactionCount')
    .get(function () {
      return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;