var mongoose = require("mongoose");
var Note = require("./Note");

var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: true
  },
  summary: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  notes: [{
     type: Schema.Types.ObjectId,
     ref: "notes"
  }]
});

var articles = mongoose.model("articles", ArticleSchema);

module.exports = articles;