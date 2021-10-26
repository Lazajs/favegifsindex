import './DesktopSearch.css'

const DesktopSearch = ({topic, rating, form})=>{
    return <form ref={form} className="desktop__form" action="get">
                <input ref={topic} type="text" placeholder="Start finding your favourite gifs!"/>
                    <select alt="rating" ref={rating}>
                        <option value="g">g</option>
                        <option value="pg">pg</option>
                        <option value="pg-13">pg-13</option>
                        <option value="r">r</option>
                </select>
                <button className="search" >Find</button>
            </form>   
}

export default DesktopSearch