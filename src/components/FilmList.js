import FilmItem from "./FilmItem"

const FilmList = ({films}) => {

    const filmElements = films.map( filmInArray => {
        return (
            <FilmItem key={filmInArray.id} url={filmInArray.url} title={filmInArray.name}></FilmItem>
            )

    })



    return (
        <>
            {filmElements}
        </>
    )
}

export default FilmList