import { NextApiRequest, NextApiResponse } from "next";
import querystring from "querystring";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const code = req.query.code || null;
    const clientId = process.env.SPOTIFY_CLIENT_ID || "";
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || "";
    const redirectUri = process.env.SPOTY_REDIRECT_URI || "";
    const url = "https://accounts.spotify.com/api/token";
    const data = querystring.stringify({
      code: code,
      redirect_uri: redirectUri,
      grant_type: "authorization_code"
    });

    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${clientId}:${clientSecret}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded;application/json"
        }
      });
      const { access_token, refresh_token } = response.data;

      console.log(access_token, refresh_token);

      res.redirect("/home");
    } catch (error) {
      console.error((error as any).message);
      res.status(500).json({ error: error || "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
