import { NextApiRequest, NextApiResponse } from "next";
import { spotifyApi } from ".";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    const { code, state } = req.query;
    if (state !== "authorised") {
      res.status(400).send("Invalid state parameter");
      return;
    }
    try {
      const data = await spotifyApi.authorizationCodeGrant(code as string);
      const accessToken = data.body.access_token;
      const refreshToken = data.body.refresh_token;
      spotifyApi.setAccessToken(accessToken);
      spotifyApi.setRefreshToken(refreshToken);
      res.redirect("/play");
    } catch (err) {
      res.status(500).send('Failed to retrieve access token');
    }
  }
}
