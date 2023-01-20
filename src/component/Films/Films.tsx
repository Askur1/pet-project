import { useState, useEffect } from 'react';
import './Films.css';
import { Film } from "../Film/Film";
import data from "../../fileJson/films.json"
import { Pagination } from '../Pagination/Pagination';


function Films () {

    const [films, setFilms] = useState(data)
    const [currentPage, SetCurrentPage] = useState(1)
    const [countPerPage] = useState(10)
    
    const firstPage = 1;
    const lastFilmIndex = currentPage * countPerPage;
    const firstFilmIndex = lastFilmIndex - countPerPage;

    const nextPage = () => SetCurrentPage( prev => prev + 1) 
    const backPage = () => SetCurrentPage( prev =>  prev - 1) 


    return (
        <div>
            <div className="movie__list-container">
                {films.slice(firstFilmIndex,lastFilmIndex).map(item =>(
                    <Film title={item.title} vote={item.vote_average}  imagePath = {item.poster_path} id={item.id} /> 
                ))}
            </div>
            <Pagination
                countPerPage={countPerPage}
                totalFilms={films.length}
                currentPage={currentPage}
                firstPage={firstPage}
                nextPage={nextPage}
                backPage={backPage}
            />
        </div>
    )
}
export {Films}