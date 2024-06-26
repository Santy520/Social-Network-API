const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(), 
    },

    reactionBody: {
      type: String,
      required: true,
      maxlength: 280 
    },

    username: 
        {
        type: String,
        required: true
        }
    ,
    
    createdAt: { 
            type: Date,
            get:() => dayjs().format("MM/DD/YYYY")
            
      } 
    
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  });


module.exports = reactionSchema;