import fs from 'fs';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });
  const data = await response.json();
  return data.access_token;
}

async function getNowPlaying(accessToken) {
  const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: { 'Authorization': `Bearer ${accessToken}` },
  });

  if (response.status === 204 || response.status > 400) {
    return { isPlaying: false };
  }

  const data = await response.json();

  return {
    isPlaying: data.is_playing,
    song: data.item.name,
    artist: data.item.artists.map((a) => a.name).join(', '),
    albumArt: data.item.album.images[0].url,
    progress: Math.round((data.progress_ms / data.item.duration_ms) * 100),
  };
}

const accessToken = await getAccessToken();
const nowPlaying = await getNowPlaying(accessToken);

fs.writeFileSync('src/data/now-playing.json', JSON.stringify(nowPlaying, null, 2));
console.log('now-playing.json actualizado:', nowPlaying);