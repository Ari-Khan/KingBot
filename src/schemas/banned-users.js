import mongoose from "mongoose";

const bannedUserSchema = new mongoose.Schema({
  discordId: {
    type: String,
    required: true,
    unique: true,
  },
  reason: {
    type: String,
    default: "No reason provided.",
  },
  bannedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("BannedUser", bannedUserSchema);
