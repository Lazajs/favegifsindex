async function getTrendings() {
    return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=24&rating=g`)
        .then(res => res.json())
        .then(res => {
            const {data} = res
            const gifs = data.map(gif => {
                return {
                    title: gif.title,
                    url: gif.images.downsized.url,
                    id: gif.id
                }
            })
            return gifs
        })
}

export default  getTrendings