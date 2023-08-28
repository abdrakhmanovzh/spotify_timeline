import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = req.query.code || null;
  const clientId = process.env.SPOTIFY_CLIENT_ID || "";
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || "";
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI || "";

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        code: code,
        redirect_uri: redirectUri,
        grant_type: "authorization_code"
      },
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(clientId + ":" + clientSecret).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );

    const { access_token, refresh_token } = response.data;

    res.setHeader("Set-Cookie", [
      "access_token=" + access_token + "; Path=/; Max-Age=3600",
      "refresh_token=" + refresh_token + "; Path=/; Max-Age=3600 * 24"
    ]);

    res.redirect("/home");
  } catch (error) {
    console.error((error as any).message);
    res.status(500).json({ error: error || "Internal Server Error" });
  }
}
