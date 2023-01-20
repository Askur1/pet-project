// import img from "../../../public/1610055-1581274.jpeg"
import "./Film.css"
interface MOVIE_LISTINGS{
    title: string;
    vote: number;
    imagePath: string;
    id: number;
    
}

function Film({vote,title,imagePath, id}: MOVIE_LISTINGS) {
    return (
       <div className="movie__block" key={id}>
            <div className="movie__block-image">
                <img src={`https://image.tmdb.org/t/p/w500/${imagePath}`} style={{height:400}} alt="обложка фильма"  />
            </div> 
            <div className="movie__block-data">
                <div className="movie__block-data-information">
                    <p className="movie__block-data-information-rating">Рейтинг: {vote}</p>
                    <button className="movie__block-data-information-star">
                        <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.54"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
                                stroke="black"
                                strokeWidth="2"
                            />
                     </svg>
                    </button>

                    <button className="movie__block-data-information-star">
                        <svg
                            fill="#fff" height="256" width="256"
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
                                fill="none"
                                stroke="#000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            />
                     </svg>
                    </button>
                    
                </div>
                <h4 className="movie__block-data-title">{title}</h4>
                <a className="about_movie" href="/">Подробнее</a>
            </div>

        </div>
    )
}

export {Film}
