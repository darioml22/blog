import fs from 'fs';

const apiKey = process.env.YOUTUBE_API_KEY;
const channelId = process.env.YOUTUBE_CHANNEL_ID;

async function getUploadsPlaylistId() {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.items[0].contentDetails.relatedPlaylists.uploads;
}

async function getVideos(playlistId) {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=12&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  return data.items.map((item) => ({
    title: item.snippet.title,
    videoId: item.snippet.resourceId.videoId,
    thumbnail: item.snippet.thumbnails.high.url,
    publishedAt: item.snippet.publishedAt,
  }));
}

const playlistId = await getUploadsPlaylistId();
const videos = await getVideos(playlistId);

fs.writeFileSync('src/data/videos.json', JSON.stringify(videos, null, 2));
console.log(`videos.json actualizado con ${videos.length} videos`);