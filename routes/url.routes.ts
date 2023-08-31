import { Router } from "express";

const router = Router();

const generateShortURL = () => {};

router.post("/shorten", (req, res) => {
  const originalURL = req.body.url;
  const shortURL = generateShortURL();

  // db call

  res.json({ url: `http://localhost:3000/${shortURL}` });
});

// Resolve a short URL
router.get("/:shortURL", (req, res) => {
  const shortURL = req.params.shortURL;
  const originalURL = ""; // get url from db

  if (originalURL) {
    res.redirect(originalURL);
  } else {
    res.status(404).json({ error: "Short URL not found" });
  }
});

export default router;
