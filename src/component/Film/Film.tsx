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
                            // width="24"
                            // height="25"
                            fill="#fff" height="256" width="256"
                            viewBox="0 0 256 256"
                            // fill="none"
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



{/* <button className="film__info-button">
    <svg
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
            fill="black"
        />
    </svg>
</button> 


<button className="film__info-button">
                                <svg
                                    width="19"
                                    height="25"
                                    viewBox="0 0 19 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 25V2.34375C0 1.04932 1.04932 0 2.34375 0H16.4062C17.7007 0 18.75 1.04932 18.75 2.34375V25L9.375 19.5312L0 25Z"
                                        fill="black"
                                    />
                                </svg>
                            </button>

*/}