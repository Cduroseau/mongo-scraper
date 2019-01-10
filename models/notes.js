var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var NoteSchema = new Schema({
    body: {
        type: String
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: "articles"
    }
});

var Note = mongoose.model("notes", NoteSchema);

module.exports = Note;