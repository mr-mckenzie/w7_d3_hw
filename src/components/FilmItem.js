import FilmLink from "./FilmLink"

const FilmItem = ({title, url}) => {
        
    return(

        <article className="film-item">
            <FilmLink title={title} url={url}/>
        </article>
    )
}

export default FilmItem