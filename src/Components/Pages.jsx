import './Pages.scss'

const Pages = ({offset})=>{

    const handleClick = ()=>{
        offset(prevOffset => prevOffset + 13)
    }

    return  <>
                <p onClick={handleClick} className="pages__container-p">Load more gifs</p>
            </>
}

export default Pages