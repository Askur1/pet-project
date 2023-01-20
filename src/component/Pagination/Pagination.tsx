import './Pagination.css'

interface movi {
  countPerPage: number;
  totalFilms:number;
  currentPage:number;
  nextPage:() => void;
  backPage: () => void;
  firstPage:number;

}


function Pagination({countPerPage, totalFilms, currentPage, nextPage,backPage, firstPage}: movi){

  const finalPage = Math.ceil(totalFilms / countPerPage)

    return(
      <div className="pagination__block">
        <div className="pagination__buttons">
          <button onClick={backPage} disabled={ currentPage === firstPage && true} className="pagination__button pagination__button--left pagination__button--disabled">
            Назад
          </button>
          <button  disabled={ currentPage === finalPage && true} className="pagination__button pagination__button--right" onClick={nextPage}>
            Вперед
          </button>
        </div>
        <p className="pagination__text">
          {currentPage} of {finalPage}
        </p>
      </div>
    )
  }
  
  export {Pagination}