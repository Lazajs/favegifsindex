import {useEffect} from 'react'

function useLocalStorage([data, gifList]) {
    if (!localStorage.getItem(data.topic)) {
        localStorage.setItem(data.topic, JSON.stringify(gifList))
    }
    
    useEffect(()=>{
        gifList.forEach((e,i) => {
            if (e !== localStorage.getItem(data.topic)[i]) {
                let val = JSON.parse(localStorage.getItem(data.topic))
                val.push(e)
                localStorage.setItem(data.topic, JSON.stringify(val))
            }
        });
    },[gifList])
    
}

export default useLocalStorage