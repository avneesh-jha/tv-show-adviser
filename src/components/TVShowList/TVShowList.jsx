import { TVShowListItems } from "../TVShowListItems/TVShowListItems";
import s from "./style.module.css";

export function TVShowList({ tvShowList, onClickItems }) {
  return (
    <div>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {tvShowList &&
          tvShowList.map((tvShow) => {
            return (
              <span className={s.tv_show_item} key={tvShow.id}>
                <TVShowListItems tvShow={tvShow} onClick={onClickItems} />
              </span>
            );
          })}
      </div>
    </div>
  );
}
