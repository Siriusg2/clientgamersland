/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

import React from 'react'
import styles from './Pagination.module.css'

export default function Pagination ({
  cardPerPage,
  totalCards,
  paginate,
  currentPage
}) {
  if (Math.ceil(totalCards / cardPerPage) < currentPage) {
    paginate(1)
  }
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pageNumbers.push(i)
  }

  return totalCards > 15
    ? (
    <div className={styles.pagdiv}>

      <div className={styles.ul}>
        <button

          className={styles.pagbtn}
          onClick={() => (currentPage > 1 ? paginate(currentPage - 1) : null)}
        >
          {'<<'}
        </button>
        <div className={styles.divli}>
          {pageNumbers.length > 1 &&
          pageNumbers.map((p, i) => (p === currentPage
            ? (
            <button key={i} className={styles.pagbt} onClick={() => paginate(p)}>
              {p}
            </button>

              )
            : (

            <button key={i} className={styles.pagbtn} onClick={() => paginate(p)}>
              {p}
            </button>

              )))}
        </div>
        <button

          onClick={() => (currentPage !== pageNumbers.length ? paginate(currentPage + 1) : null)}
          className={styles.pagbtn}
        >
          {'>>'}
        </button>
      </div>

    </div>
      )
    : null
}
