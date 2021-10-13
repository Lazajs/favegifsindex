const getGifs = (keyword = 'panda', limit = 1, rating = 'g')=>{
    const API_KEY = `https://api.giphy.com/v1/gifs/search?api_key=O9cAnmn23tqC7ImqbJ0J8jUsvW7DJpkV&q=${keyword}&limit=${limit}&offset=0&rating=${rating}&lang=en`
    return fetch(API_KEY)
            .then(res => res.json())
            .then(res => {
                const {data} = res
                const gifs = data.map(img => img.images.downsized.url)
                return gifs
            }
        )
}

export default getGifs