import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { songs_data } from "../utils/constants";
import "../features/playList/pagination/pagination.css";

const usePagination = (pageSize) => {
  const navigate = useNavigate();
  const [urlParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const page_lenght = Math.floor(songs_data.length / pageSize);
  useEffect(() => {
    navigate(`/?page=${currentPage}`);
  }, [currentPage]);

  useEffect(() => {}, []);
  const setPage = (page) => {
    setCurrentPage(page);
  };
  const songItemList = songs_data.slice(
    pageSize * (currentPage - 1),
    pageSize * currentPage
  );
  const pagination_size = 3;
  const handleNextPage = () => {
    const next = currentPage + 1;
    if (next > page_lenght) return;
    setCurrentPage(next);
  };
  const handlePrevPage = () => {
    const Previous = currentPage - 1;
    if (Previous < 1) return;
    setCurrentPage(Previous);
  };
  return {
    setPage,
    setCurrentPage,
    page_lenght,
    currentPage,
    songItemList,
    handleNextPage,
    handlePrevPage,
    pagination_size,
  };
};
export default usePagination;
