const LinkButton = () => {

    const handleButtonPress = (evt) => {
        const buttonUrl = evt.target.value
        console.log(buttonUrl)
    }

    return (
        <button onClick={handleButtonPress} value="https://www.imdb.com/calendar/?region=gb">View more upcoming releases</button>
    )
}

export default LinkButton