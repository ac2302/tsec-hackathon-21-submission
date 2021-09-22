const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
	user: {
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
	},
	likes: {
		type: [mongoose.Schema.Types.ObjectId],
		default: [],
	},
});

module.exports = mongoose.model(
	"CommentSection",
	new mongoose.Schema({
		slug: {
			type: String,
			required: true,
		},
		comments: {
			type: [commentSchema],
			default: [],
		},
	})
);
