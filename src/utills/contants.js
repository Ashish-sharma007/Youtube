const GOOGLE_API_KEY = "AIzaSyD0gSbj_a_uyHRxUqNZlAXa5YB_1ko2va0";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;


  export const YOUTUBE_AUTO_SUGGESTION = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' ;