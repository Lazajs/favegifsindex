function getGifs(keyword, rating, limit, offset) {
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${keyword}&limit=${limit}&offset=${offset}&rating=${rating}&lang=en`
    return fetch(API_URL)
        .then(res => res.json())
        .then(res => {
            const { data } = res
            const gif = data.map(img => {
                const info = {
                    url: img.images.downsized.url,
                    id: img.id,
                    title: img.title,
                    width: img.images.downsized.width,
                    height: img.images.downsized.height
                }

               return info
            })
            return (gif.length > 0) ? gif : ''
        })
}

export default getGifs