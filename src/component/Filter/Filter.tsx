import { Pagination } from "../Pagination/Pagination"
import "./Filter.css"
import box from "../../fileJson/listCheckbock.json"
console.log(box)
function Filter() {
    return (
        <div className="filter__block">
            <h3 className="filter__block-title">Фильтры:</h3>
            <button className="filter__button">Сбросить все Фильтры</button>
            <div className="select__block">
                <label htmlFor="sortSelect">Сортировать по:</label>
                <select id="sortSelect" className="filter__select">
                    <option value="Популярные по убыванию">Популярные по убыванию</option>
                    <option value="Популярные по возрастанию">Популярные по возрастанию</option>
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
            {/* <Pagination/> */}
        </div>
    )
}

export {Filter}