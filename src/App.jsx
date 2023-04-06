import s from "./style.module.css";
import { TvShowApi } from "./components/api/tv-shows";
import { useState } from "react";
import { useEffect } from "react";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import logoImg from "./Assets/Images/logo.png";
import { Logo } from "./components/Logo/Logo";
// import { TVShowListItems } from "./components/TVShowListItems/TVShowListItems";

import { TVShowList } from "./components/TVShowList/TVShowList";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendedList, setRecommendedList] = useState();
  async function fetchPopulars() {
    const popularTVShowList = await TvShowApi.fetchPopulars();
    if (popularTVShowList.length !== 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  async function fetchRecommendation(tvShowId) {
    const recommendedListResp = await TvShowApi.fetchRecommendations(tvShowId);
    if (recommendedListResp.length !== 0) {
      setRecommendedList(recommendedListResp.slice(0, 10));
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendation(currentTVShow.id);
    }
  }, [currentTVShow]);

  console.log(recommendedList);
  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title="Binge_Watch"
              subtitle="Your Daily Destination"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}{" "}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && <TVShowList tvShowList={recommendedList} />}
      </div>
    </div>
  );
}
