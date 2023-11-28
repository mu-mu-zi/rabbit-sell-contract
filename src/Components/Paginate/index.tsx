import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { up, down } from '../../utils/svgManage';

const MyReactPaginate = styled(ReactPaginate) <{ justify: string }>`
  display: flex;
  flex-direction: row;
  justify-content:${({ justify }) => justify || 'flex-end'};
  color: #fff;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
 
  li {
    list-style: none;
    background: #342C2859;
    width: 28px;
    height: 28px;
    line-height: 28px;
    border-radius: 14px;
  }
  img {
    width: 28px;
    height: 28px;
  }

  a {
    
    box-sizing: border-box;
    display: flex;
    text-decoration: none;
    cursor: pointer;
    width: 28px;
    height: 28px;
    user-select: none;
    text-align: center;
    justify-content: center;
    line-height: 28px;
    border-radius: 14px;
    span {
      display: flex;
      align-items: center;
    }
  }

  .selected {
    a {
      
      color: #FF9231;
    }
  }
`;

export default function Paginate(props: {
  page: number,
  total: number,
  pageSize: number,
  justify?: string,
  onPageChanged(page: number): void
}) {
  const {
    total, pageSize, page, onPageChanged, justify,
  } = props;
  const count = Math.ceil(total / pageSize);
  const handler = (event: any) => {
    onPageChanged(event.selected + 1);
  };

  return (
    <>
      {count > 1 && (
        <MyReactPaginate
          justify={justify || 'center'}
          forcePage={page - 1}
          breakLabel="..."
          nextLabel={<span dangerouslySetInnerHTML={{ __html: down || '' }} />}
          onPageChange={handler}
          pageCount={count}
          previousLabel={<span dangerouslySetInnerHTML={{ __html: up || '' }} />}
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}
          renderOnZeroPageCount={() => null}
        />
      )}
    </>
  );
}
