import './Footer.css'
import twitter from '../images/twitter.svg'
import github from '../images/github.svg'
import instagram from '../images/instagram.svg'

const Footer = (props)=>{
    return  <footer className="footer">
                <div className="footer__text" >
                    <a target="_blank" href="https://giphy.com/" className="footer__text-p">Made with Giphy API</a>
                    <a target="_blank" href="https://github.com/Lazajs/faveGifs" className="footer__text-p">Browse the code on github</a>
                    <p className="footer__text-p">Thanks for visiting</p>
                </div>
                <div className="footer__social">
                    <a target="_blank" className="footer__social-a" href="https://twitter.com/holetih">
                        <img alt="twitter" src={twitter} />
                    </a>
                    <a target="_blank" className="footer__social-a" href="https://github.com/Lazajs">
                        <img alt="github" src={github} />
                    </a> 
                    <a target="_blank" className="footer__social-a" href="https://www.instagram.com/_lazaasw/">
                        <img alt="instagram" src={instagram} />
                    </a>
                </div>
            </footer>

}

export default Footer