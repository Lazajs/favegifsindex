import './Header.css'
import Search from './Search'

const Header = ({topic, rating, form})=>{

    return ( 
        <>
            <header className="header shadows">
                <div className="header__text">
                    <h1 className="header__heading">faveGifs</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare tempus dapibus.</p>
                </div>
            </header>
            <Search topic={topic} rating={rating} form={form}  />
        </>
    )
}

export default Header