import axios from 'axios';

const KEY = 'AIzaSyBbwMV6mNuRuapkE0J2OehEytdpc_qXsnY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});