import { NextApiRequest, NextApiResponse } from "next";
import { generateRandomString } from "@/features/auth";
import querystring from "querystring";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = generateRandomString();

  const queryParams = querystring.stringify({
    response_type: "code",
    client_id: process.env.SPOTIFY_CLIENT_ID,
    redirect_uri: "https://spotify-timeline-one.vercel.app/home",
    state: state
  });

  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
}
