function getGifs(keyword, rating, limit) {
    const API_KEY = `https://api.giphy.com/v1/gifs/search?api_key=O9cAnmn23tqC7ImqbJ0J8jUsvW7DJpkV&q=${keyword}&limit=${limit}&offset=0&rating=${rating}&lang=en`

    return fetch(API_KEY)
        .then(res => res.json())
        .then(res => {
            const { data } = res
            const gif = data.map(img => {
                const info = {
                    url: img.images.downsized.url,
                    id: img.id,
                    title: img.title
                }
                
               return info
            })
            return gif
        })
}

export default getGifs