import "./pagination.css";

function Pagination({
  handleNextPage,
  handlePrevPage,
  currentPage,
  page_lenght,
  pagination_size,
  setPage,
}) {
  const pageCount = [];
  for (let i = 0; i < pagination_size; i++) {
    pageCount.push(i + 1);
  }
  const pagecountLong = [];
  for (let i = 0; i < pagination_size; i++) {
    if (currentPage == page_lenght) {
      pagecountLong.push(i + (page_lenght - (pagination_size - 1)));
    } else {
      pagecountLong.push(i + (currentPage - 1));
    }
  }

  return (
    <div className="pagination-modal">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={handlePrevPage}>
            Previous
          </a>
        </li>

        {currentPage > pagination_size - 1 ? (
          <>
            <li class="page-item PaginationFirst" id="1">
              <span
                onClick={() => {
                  setPage(1);
                }}
                class="page-link PaginationFirst page-link-num"
              >
                1
              </span>
            </li>
            <li class="page-item PaginationFirst">...</li>
            {pagecountLong.map((page) => (
              <li className="page-item" id={page}>
                <span
                  onClick={() => {
                    setPage(page);
                  }}
                  className={`page-link page-link-num ${
                    page == currentPage ? "active" : ""
                  }`}
                >
                  {page}
                </span>
              </li>
            ))}
          </>
        ) : (
          <>
            {pageCount.map((page) => (
              <li className="page-item" id={page}>
                <span
                  onClick={() => {
                    setPage(page);
                  }}
                  className={`page-link page-link-num ${
                    page == currentPage ? "active" : ""
                  }`}
                >
                  {page}
                </span>
              </li>
            ))}
          </>
        )}

        {page_lenght > pagination_size && currentPage <= 10 && (
          <>
            <li className="page-item PaginationLenght">...</li>
            <li className="page-item PaginationLenght" id={page_lenght}>
              <span
                onClick={() => {
                  setPage(page_lenght);
                }}
                className="page-link PaginationLenght page-link-num"
              >
                {page_lenght}
              </span>
            </li>
          </>
        )}

        <li className="page-item">
          <span className="page-link" onClick={handleNextPage}>
            next
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
