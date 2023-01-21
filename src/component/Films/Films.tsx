import { useState, useContext } from 'react'
import './Films.css'
import { Film } from "../Film/Film"
import { Pagination } from '../Pagination/Pagination'
import { FilmContext } from '../../Context/filmContext'

function Films () {
    const [currentPage, SetCurrentPage] = useState(1)
    const [countPerPage] = useState(10)
    const dataContext = useContext(FilmContext)
    const {filmList, setFilmLinst} = dataContext
    
    const firstPage = 1
    const lastFilmIndex = currentPage * countPerPage
    const firstFilmIndex = lastFilmIndex - countPerPage
    const pageFilmeCard = filmList.slice(firstFilmIndex,lastFilmIndex)


    const nextPage = () => SetCurrentPage( prev => prev + 1) 
    const backPage = () => SetCurrentPage( prev =>  prev - 1) 
    return (
        <div>
            <div className="movie__list-container">
                {filmList.map(item =>(
                    <Film 
                        title={item.title}
                        vote={item.vote_average}  
                        imagePath = {item.poster_path} 
                        id={item.id}
                        popularity={item.popularity}
                     /> 
                ))}
            </div>
            <Pagination
                countPerPage={countPerPage}
                totalFilms={filmList.length}
                currentPage={currentPage}
                firstPage={firstPage}
                nextPage={nextPage}
                backPage={backPage}
            />
        </div>
    )

}
export {Films,}