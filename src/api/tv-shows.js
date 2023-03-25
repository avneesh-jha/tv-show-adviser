import axios from "axios";

// tv/popular
// 139b5937cebc1189586d71131548ece7
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY_PARAM = "?api_key=139b5937cebc1189586d71131548ece7";

export class TvShowApi {
  static async fetchPopulars() {
    //perform request
    console.log("test1");
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    console.log("response", response.data.results);
    //return the response
    return response.data.results;
  }
}
