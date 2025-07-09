import shortId from 'shortid';
import ShortUrl from '../models/url.js';

const handleShortUrl = async (req, res) => {
  const  {url } = req.body;

  // Validate the URL
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  const shortIdGenerated = shortId.generate();

  const newUrl = await ShortUrl.create({
    shortId: shortIdGenerated,
    redirectUrl: url,
    visitedHistory: []
  });

  res.status(200).json({
    message: 'Short URL created successfully',
    shortUrl: shortIdGenerated,
  });
};

const handleredirectUrl = async (req, res) => {   
  const shortId = req.params.shortId;
  const entry = await ShortUrl.findOneAndUpdate(
    { shortId },
    { $push: { visitedHistory: new Date() } }
  )
  res.redirect(entry.redirectUrl)
}

const handleAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result= await ShortUrl.findOneAndUpdate({shortId})
  return res.json({
    totalclicks: result.visitedHistory.length,
    analytics:result.visitedHistory
  })
}

export { handleShortUrl, handleredirectUrl, handleAnalytics };
