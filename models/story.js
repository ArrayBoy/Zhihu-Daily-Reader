﻿var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StorySchema = new Schema({
    id: { type: String },
    date: { type: String },
    content: { type: String },
    read: { type: Boolean, default: false },
});

StorySchema.index({ id: 1 }, { unique: true });

module.exports = mongoose.model("Story", StorySchema);
