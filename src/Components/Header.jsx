import './Header.css'
import Search from './Search'

const Header = ({topic, rating, form})=>{

    return ( 
        <>
            <header className="header shadows">
                <div className="header__text">
                    <h1 className="header__heading">faveGifs</h1>
                    <p>Find your favourite gifs and share them with your friends!</p>
                </div>
            </header>
            <Search topic={topic} rating={rating} form={form}  />
        </>
    )
}

export default Header