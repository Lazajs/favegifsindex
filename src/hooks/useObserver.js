import { useState } from "react";

function useObserver(el, setValue) {
    if (el) {
        const handleIntersection = (e)=>{
            if (e[0].isIntersecting) {
                observer.disconnect(e)
                setValue(true)
            }
        }

        const observer = new IntersectionObserver(handleIntersection,{rootMargin: "100px"})
        observer.observe(el)
    }
}

export default useObserver;
