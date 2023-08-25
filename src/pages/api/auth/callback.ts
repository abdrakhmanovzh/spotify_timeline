import { NextApiRequest, NextApiResponse } from "next";
import querystring from "querystring";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const code = req.query.code || null;
    const clientId = process.env.SPOTIFY_CLIENT_ID || "";

    const authOptions = {
      url: "https://accounts.spotify.com/api/token",
      method: "post",
      headers: {
        Authorization: `Basic ${Buffer.from(clientId).toString("base64")} `
      },
      data: querystring.stringify({
        code: code,
        redirect_uri: process.env.SPOTY_REDIRECT_URI,
        grant_type: "authorization_code"
      })
    };

    try {
      const response = await axios(authOptions);
      const { access_token, refresh_token } = response.data;

      console.log(access_token, refresh_token);

      res.redirect("/home");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
