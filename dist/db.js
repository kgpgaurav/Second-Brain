"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkModel = exports.ContentModel = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
mongoose_1.default.connect("mongodb+srv://kgp:bgI0Qdc2LlyGmJPM@cluster0.udvik.mongodb.net/brainly");
const ObjectId = Schema.Types.ObjectId;
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
exports.UserModel = mongoose_1.default.model("User", userSchema);
const contentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose_1.default.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose_1.default.Types.ObjectId, ref: 'User', required: true }
});
exports.ContentModel = mongoose_1.default.model("Content", contentSchema);
const LinkSchema = new Schema({
    hash: String,
    userId: { type: mongoose_1.default.Types.ObjectId, ref: 'User', required: true }
});
exports.LinkModel = mongoose_1.default.model("Links", LinkSchema);
