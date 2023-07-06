import React from 'react';
import { usePagination, DOTS } from '../usePagination';
import {Section, Container, Item} from './styled';

const Pagination = ({onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, setAnimationContainer}) => {

  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize});

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }


  const onNext = () => {
    onPageChange(currentPage + 1);
    setAnimationContainer("10rem")
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
    setAnimationContainer("-10rem");

  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <Section>
    <Container>
      <Item onClick={onPrevious} disabled={currentPage === 1}>
        -
      </Item>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <Item>&#8230;</Item>;
        }
        return (
          <Item onClick={() => 
            onPageChange(pageNumber, 
            pageNumber > currentPage ? setAnimationContainer("10rem") : setAnimationContainer("-10rem"))} 
            selected={pageNumber === currentPage}>
            {pageNumber}
          </Item>
        );
        })}
        <Item disabled={currentPage === lastPage} onClick={onNext}>
          +
        </Item>
      </Container>
    </Section>
  );
};

export default Pagination;
