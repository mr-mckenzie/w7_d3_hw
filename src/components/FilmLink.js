const FilmLink = ( {title, url} ) => {
    return(
        <>
            <a href={url}>{title}</a> 
        </>
    )
}

export default FilmLink