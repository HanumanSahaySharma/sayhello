import mongoose, { Schema } from "mongoose";

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "Uncategorised",
  },
  media: {
    type: Array,
  },
  content: {
    type: String,
  },
  numberOfComments: {
    type: Number,
    default: 0
  },
  numberOfLikes: {
    type: Number,
    default: 0
  },
});

const Article = mongoose.models.Article || mongoose.model("Article", articleSchema);
export default Article;
