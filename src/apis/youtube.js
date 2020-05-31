import axios from "axios";
const KEY = 'AIzaSyC1k5-qR5sWM14Fz-62C3HaeA-zNcy969E';
 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type:'video',
    maxResults: 5,
    key: KEY
  }
});