import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMEDATIONS } from "./fake_data";
import { BASE_URL, API_KEY_PARAM } from "../../config";
// tv/popular
// 139b5937cebc1189586d71131548ece7
// const BASE_URL = "https://api.themoviedb.org/3/";
// const API_KEY_PARAM = "?api_key=139b5937cebc1189586d71131548ece7";

export class TvShowApi {
  static async fetchPopulars() {
    //perform request
    // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    // console.log("response", response.data.results);
    //return the response
    // return response.data.results;
    return FAKE_POPULARS;
  }

  static async fetchRecommendations(tvShowId) {
    // perform request
    // const response = await axios.get(
    //   `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
    // );
    // console.log("response1", response.data.results);
    // return the response
    // return response.data.results;
    return FAKE_RECOMMEDATIONS;
  }
}
