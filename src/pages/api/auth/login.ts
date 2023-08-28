import { NextApiRequest, NextApiResponse } from "next";
import querystring from "querystring";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const queryParams = querystring.stringify({
    response_type: "code",
    client_id: process.env.SPOTIFY_CLIENT_ID,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    scope: "user-read-private user-read-email user-top-read"
  });

  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
}
