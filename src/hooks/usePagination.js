import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { songs_data } from "../utils/constants";

const usePagination = (pageSize) => {
  const navigate = useNavigate();
  const [urlParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.floor(songs_data.length / pageSize);
  useEffect(() => {
    navigate(`/?page=${currentPage}`);
  }, [currentPage]);

  useEffect(() => {}, []);
  const setPage = (page) => {
    setCurrentPage(page);
  };
  const handleNextPage = () => {
    const next = currentPage + 1;
    if (next > pageCount) return;
    setCurrentPage(next);
  };
  const pageItems = songs_data.slice(
    pageSize * (currentPage - 1),
    pageSize * currentPage
  );
  const handlePrevPage = () => {
    const Previous = currentPage - 1;
    if (Previous < 1) return;
    setCurrentPage(Previous);
  };
  console.log(pageItems, currentPage);
  return {
    setPage,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
    currentPage,
    pageItems,
  };
};
export default usePagination;
