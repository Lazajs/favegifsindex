async function getGifs({topic, rating}, offset) {
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${topic}&limit=12&offset=${offset}&rating=${rating}&lang=en`

    const abortController = new AbortController()
    const signal = abortController.signal

    if (abortController.currrent) {
        console.log('aborted')
        abortController.abort()
    }

    return fetch(API_URL, signal)
        .then(res => res.json())
        .then(res => {
            const { data } = res
            const gif = data.map(img => {
                const info = {
                    url: img.images.downsized.url,
                    id: img.id,
                    title: img.title,
                }

               return info
            })
            return gif
        })
}

export default getGifs