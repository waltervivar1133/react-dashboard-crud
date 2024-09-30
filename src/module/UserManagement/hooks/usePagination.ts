import { useState } from "react";

export const usePagination = (totalRecords: number) => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalRecords / pageSize);

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  

  return {
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    changePage,
    setCurrentPage
  };
};
