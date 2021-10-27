function getGifs(keyword, rating, limit, offset) {
    const API_KEY = `https://api.giphy.com/v1/gifs/search?api_key=O9cAnmn23tqC7ImqbJ0J8jUsvW7DJpkV&q=${keyword}&limit=${limit}&offset=${offset}&rating=${rating}&lang=en`
    return fetch(API_KEY)
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