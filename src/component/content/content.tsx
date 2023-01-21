import './content.css'
import { Films } from '../Films/Films'
import { Filter } from '../Filter/Filter'
import { FilmContext } from '../../Context/filmContext'
import {useContext, useState} from 'react'

const POPULAR_IN_DESCENDING_ORDER = 'Популярные по убыванию'
const POPULAR_IN_ASCENDING_ORDER = 'Популярные по возрастанию'
const RANKING_DISCENDING_ORDER = 'Рейтинг по убыванию'
const RANKING_ASCENDING_ORDER = 'Рейтинг по возрастанию'

function Main() {
  const dataContext = useContext(FilmContext)
  const {filmList, setFilmLinst} = dataContext
 
  const arrayCompression = (e) => {
    const VALUE = e.target.value
      console.log(VALUE)
      if(POPULAR_IN_DESCENDING_ORDER === VALUE){
        setFilmLinst([...filmList].sort((x,y) => y.popularity - x.popularity))
      }
      if(POPULAR_IN_ASCENDING_ORDER === VALUE){
        setFilmLinst([...filmList].sort((x,y) => x.popularity - y.popularity))
      }
      if(RANKING_DISCENDING_ORDER === VALUE){
        setFilmLinst([...filmList].sort((x,y) => y.vote_average - x.vote_average))
      }
      if(RANKING_ASCENDING_ORDER === VALUE){
        setFilmLinst([...filmList].sort((x,y) => x.vote_average - y.vote_average))
      }

      if (VALUE === '2020'){
        setFilmLinst(
        [...filmList].filter(function(obj){
          if(obj.release_date.substr(0,4)==='2020'){
              return obj.release_date
          }
        })
        )
      }

      if (VALUE === '2019'){
        setFilmLinst(
        [...filmList].filter(function(obj){
          if(obj.release_date.substr(0,4)==='2019'){
              return obj.release_date
          }
        })
        )
      }

      if (VALUE === '2018'){
        setFilmLinst(
        [...filmList].filter(function(obj){
          if(obj.release_date.substr(0,4)==='2018'){
              return obj.release_date
          }
        })
        )
      }

      if (VALUE === '2017'){
        setFilmLinst(
        [...filmList].filter(function(obj){
          if(obj.release_date.substr(0,4)==='2017'){
              return obj.release_date
          }
        })
        )
      }
  }
  return (
    <section className="content">
      <div className="container content__container">
        <Filter arrayCompression={arrayCompression} />
        <Films />
      </div>
    </section>
  )
}

export { Main }