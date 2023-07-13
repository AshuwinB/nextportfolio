import mongoose from "mongoose";

const { Schema } = mongoose;

const psotSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    startdate: {
      type: String,
      required: true,
    },
    enddate: {
      type: String,
      required: true,
    },
    websiteurl: {
      type: String,
      required: true,
    },
    imageurl: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    githuburl: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email:{
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

mongoose.models = {};

const Post = mongoose.model.Post || mongoose.model("Post", psotSchema);

export default Post;
