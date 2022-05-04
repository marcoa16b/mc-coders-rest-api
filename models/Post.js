const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  { 
    title: {
      type: String,
      required: true,
      unique: true
    },
    date:{ 
      type: String,
      required: false,
    },
    desc:{
      type: String,
      required: true,
    },
    username:{
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
    slug: {
      type: String,
      required: true,
      unique: true
    }
  }, {timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);