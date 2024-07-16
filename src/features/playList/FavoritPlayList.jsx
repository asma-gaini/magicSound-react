import usePagination from "../../hooks/usePagination";
import CustomModalSong from "./CustomModalSong";
import PlaylistItem from "./PlaylistItem";
import { favoritList } from "../../utils/constants";
import "./pagination/pagination.css";
import Pagination from "./pagination/Pagination";

function FavoritPlayList() {
  const {
    setPage,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
    page_lenght,
    currentPage,
    songItemList,
    pagination_size,
  } = usePagination(2, favoritList);

  return (
    <>
      <div id="playerList">
        <CustomModalSong songItemList={songItemList} />
        <div className="music-app">
          <div className="content">
            <ul className="playList">
              {songItemList.map((item) => (
                <PlaylistItem
                  item={item}
                  key={item.id}
                  songItemList={songItemList}
                />
              ))}
            </ul>
          </div>
        </div>
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          currentPage={currentPage}
          page_lenght={page_lenght}
          pagination_size={pagination_size}
          setCurrentPage={setCurrentPage}
          setPage={setPage}
        />
      </div>
    </>
  );
}

export default FavoritPlayList;
