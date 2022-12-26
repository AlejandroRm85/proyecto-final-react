import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./styles.css";

const Pagination = ({ pageNumber, info, setPageNumber }) => {
  let pageChange = (data) => {
    setPageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <ReactPaginate
        nextLabel="Siguiente"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Anterior"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </>
  );
};

export default Pagination;
