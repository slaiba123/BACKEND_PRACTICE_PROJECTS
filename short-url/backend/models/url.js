import mongoose from 'mongoose';

const shortUrlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  visitedHistory: [
    {
      timestamp: { type: Date, default: Date.now },
    },
  ],
}, { timestamps: true });

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);

export default ShortUrl;
