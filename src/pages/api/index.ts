import { NextApiRequest, NextApiResponse } from 'next';
import SpotifyWebApi from 'spotify-web-api-node';

const redirectUri = process.env.ENV == "DEV" ? process.env.REDIRECT_URI_DEV : process.env.REDIRECT_URI_PROD;

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const scopes = ['user-library-read'];
    const state = "authorised";
    const authorizeUrl = spotifyApi.createAuthorizeURL(scopes, state);
    res.redirect(authorizeUrl);
  }
}