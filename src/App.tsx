import { Header } from "./component/header/header"
import "./App.css"
import { Main } from "./component/content/content"
import { FilmContext } from "./Context/filmContext"
import { listfilms } from "./fileJson/movieListings"
import { useState } from "react"

function App() {

  const [filmList, setFilmLinst] = useState(listfilms)
  const dataContext = {
    filmList,
    setFilmLinst,
  }

  return (
    <div className="App">
      <Header/>
      <FilmContext.Provider value={dataContext}>
        <Main />
      </FilmContext.Provider>
    </div>
  )
}

export {App, }
