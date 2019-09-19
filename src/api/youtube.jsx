import axios from 'axios';

const KEY = 'AIzaSyAkwXOMYbmzL_sXu9U22TwqfAZjjJCKvOQ';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
