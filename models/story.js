﻿var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/**
 * 存储知乎日报内容。
 */
var StorySchema = new Schema({
    /**
     * ID。
     * @type {Number}
     */
    id: { type: Number },
    
    /**
     * 日期。
     * @type {String}
     */
    date: { type: String },
    
    /**
     * 已读状态。
     * @type {Boolean}
     */
    read: { type: Boolean, default: false },
    
    /**
     * 日报内容。对终端来说即真正的 Story。
     * @type {Object}
     */
    content: { type: Object },
    
    /**
     * 是否已离线。
     * @type {Boolean}
     */
    cached: { type: Boolean, default: false }
});

StorySchema.index({ id: 1 }, { unique: true });
StorySchema.index({ date: -1 });

module.exports = mongoose.model("Story", StorySchema);
