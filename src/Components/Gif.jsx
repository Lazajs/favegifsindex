import './Gif.scss'


const Gif = ({url, title})=>{
    return  <div className="gif-container">     
                <img onError={()=> <h2> Sorry, there was a problem loading the gif :(</h2>} alt={title} className="gif-img" src={url} />
                <p>{title}</p>
            </div>
}

export default Gif;