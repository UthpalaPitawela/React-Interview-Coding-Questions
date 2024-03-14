import React from "react";
import Pagination from 'react-bootstrap/Pagination';
import './paginationComponent.styles.scss';

export const PaginationComponent = (props) => {
  const { totalPages, currentPage, changeCurrentPage } = props;
  const loopPages = Array.from({length: totalPages}, (_, index) => index +1);
  console.log('loopPages', loopPages)
  return (
    <Pagination className="pagination-component">
      {loopPages && loopPages.length>0 && loopPages.map((pageNumber, index) => (
        
        <Pagination.Item key={index} active={currentPage === pageNumber} onClick={() => changeCurrentPage(pageNumber)}>{pageNumber}</Pagination.Item>

      ))}
    </Pagination>
  );
};
