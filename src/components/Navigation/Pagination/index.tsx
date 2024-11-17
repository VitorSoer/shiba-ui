import * as S from './styles';
import React, { useState } from 'react';
import TextDisplay from '../../TextElements/TextDisplay';
import Icon from '../../Feedback/Icon';
import { IPagination } from './types';
import { withTheme } from 'styled-components';

const Pagination: React.FC<IPagination> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  maxVisiblePages,
  selectPageText = 'Page:',
}) => {
  if (totalItems <= itemsPerPage) return null;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [inputValue, setInputValue] = useState(currentPage.toString());

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let start = Math.max(currentPage - halfVisible, 1);
    const end = Math.min(start + maxVisiblePages - 1, totalPages);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(end - maxVisiblePages + 1, 1);
    }

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push('...');
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;

      onPageChange(newPage);
      setInputValue(newPage.toString());
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;

      onPageChange(newPage);
      setInputValue(newPage.toString());
    }
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number') {
      onPageChange(page);
      setInputValue(page.toString());
    }
  };

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handlePageInputBlur = () => {
    const page = parseInt(inputValue);

    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    } else {
      setInputValue(currentPage.toString());
    }
  };

  return (
    <S.MainContainer data-testid="pagination-control">
      <S.ControlWrapper>
        <S.ButtonControl
          onClick={handlePreviousPage}
          $disabled={currentPage === 1}
        >
          <Icon icon="LeftTwoIcon" $iconColor="content" $iconSize={12} />
        </S.ButtonControl>

        {getPageNumbers()?.map((page) => (
          <S.ButtonControl
            key={page}
            $isSelected={page === currentPage}
            onClick={() => handlePageClick(page)}
          >
            <TextDisplay
              text={String(page)}
              $fontSize="sm"
              $fontWeight="strong"
            />
          </S.ButtonControl>
        ))}

        <S.ButtonControl
          onClick={handleNextPage}
          $disabled={currentPage === totalPages}
        >
          <Icon icon="RightTwoIcon" $iconColor="content" $iconSize={12} />
        </S.ButtonControl>
      </S.ControlWrapper>

      <S.ControlWrapper>
        <TextDisplay
          text={selectPageText}
          $fontSize="sm"
          $fontWeight="strong"
        />

        <S.PageInput
          type="number"
          min={1}
          max={totalPages}
          value={inputValue}
          onChange={handlePageInputChange}
          onBlur={handlePageInputBlur}
        />

        <TextDisplay
          $fontSize="sm"
          $fontWeight="strong"
          text={`/${totalPages || 0}`}
        />
      </S.ControlWrapper>
    </S.MainContainer>
  );
};

export default withTheme(Pagination) as React.FC<IPagination>;
