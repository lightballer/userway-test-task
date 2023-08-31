import { Router, Request, Response } from "express";
import { generateShortURL } from "src/services/url.service";

const router = Router();

router.post("/shorten", (req: Request, res: Response) => {
  const originalURL = req.body.url;
  const shortURL = generateShortURL();

  // db call

  const host = "http://localhost:3000";

  res.json({ url: `${host}/${shortURL}` });
});

// Resolve a short URL
router.get("/:shortURL", (req: Request, res: Response) => {
  const shortURL = req.params.shortURL;
  const originalURL = ""; // get url from db

  if (originalURL) {
    res.redirect(originalURL);
  } else {
    res.status(404).json({ error: "Short URL not found" });
  }
});

export default router;
