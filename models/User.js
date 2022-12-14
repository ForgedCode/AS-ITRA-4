const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	lastLogin: {
		type: Date,
		default: Date.now,
	},
	isBlocked: {
		type: Boolean,
		default: false,
	},
});

module.exports = User = mongoose.model("users", UserSchema);
