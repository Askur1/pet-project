import { Pagination } from "../Pagination/Pagination"
import "./Filter.css"
import box from "../../fileJson/listCheckbock.json"
import { useContext, useState } from "react"
import { FilmContext } from "../../Context/filmContext"
import { listfilms } from "../../fileJson/movieListings"

interface fun{
    arrayCompression: () => void
}

function Filter( {arrayCompression}: fun) {

    const dataContext = useContext(FilmContext)
    const {setFilmLinst} = dataContext

    function ResetFilmsButton(){
        setFilmLinst(listfilms)
    }

    return (
        <div className="filter__block">
            <h3 className="filter__block-title">Фильтры:</h3>
            <button onClick={ResetFilmsButton} className="filter__button">Сбросить все Фильтры</button>
            <div className="select__block">
                <label htmlFor="sortSelect">Сортировать по:</label>
                <select onChange={arrayCompression}  id="sortSelect" className="filter__select">
                    <option  value="Популярные по убыванию">Популярные по убыванию</option>
                    <option value="Популярные по возрастанию">Популярные по возрастанию</option>
                    <option value="Рейтинг по убыванию">Рейтинг по убыванию</option>
                    <option value="Рейтинг по возрастанию">Рейтинг по возрастанию</option>
                </select>

                <select onChange={arrayCompression} id="sortSelect" className="filter__select">
                    <option  value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
            </div>
            <div className="checkboxes__block">
                {box.map((item: any) =>
                    <div key={item.id} className="checkbox__block">
                        <input  type="checkbox" className="checkbox" />
                        <label htmlFor="checkbox1">{item.name}</label>
                    </div>
                )}
            </div>
        </div>
    )
}

export {Filter}