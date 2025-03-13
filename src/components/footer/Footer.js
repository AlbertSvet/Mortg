import './footer.scss'
import Logo from './LogoFooter.svg'

const Footer = () =>{
    return(
        <div className='footer'>
            <div className='footer__container _container'>
                <div className='footer__top'>
                    <div className='footer__logo'>
                        <a href="#">
                            <img src={Logo} alt="Logo" />
                        </a>
                    </div>
                    <button className='footer__btn'>Schedule a time</button>
                </div>
                <div className='footer__body'>
                    <div className='footer__item-block'>
                        <ul className='footer__list'>
                            <li className="footer__li footer__li--title">Contact us</li>
                            <li className="footer__li">
                                <a href="">14511 Myford Road, Suite 100, Tustin, CA 92780</a>
                            </li>
                            <li className="footer__li">
                                <a href="">800-450-2010</a>
                            </li>
                            <li className="footer__li">
                                <a href="">customerservice@nafinc.com</a>
                            </li>
                        </ul>
                        <ul className='footer__list'>
                            <li className="footer__li footer__li--title">Education</li>
                            <li className="footer__li">
                                <a href="">Blog</a>
                            </li>
                            <li className="footer__li">
                                <a href="">Ebook</a>
                            </li>
                            <li className="footer__li">
                                <a href="">Webinar</a>
                            </li>
                        </ul>
                        <ul className='footer__list'>
                            <li className="footer__li footer__li--title">Legal</li>
                            <li className="footer__li">
                                <a href="">Terms of use</a>
                            </li>
                            <li className="footer__li">
                                <a href="">Privacy policy</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className='footer__item'>
                        <p className='footer__text'>New American Funding makes Customer Service our number one priority. We encourage you to call our Corporate Customer Service department at 800-450-2010 ext. 7100 between 8 am and 5:00 pm Pacific or email us anytime at customerservice@nafinc.com for any complaint resolution you may have regarding the origination of your loan.</p>
                        <p className='footer__text'>New American Funding makes Customer Service our number one priority. We encourage you to call our Corporate Customer Service department at 800-450-2010 ext. 7100 between 8 am and 5:00 pm Pacific or email us anytime at customerservice@nafinc.com for any complaint resolution you may have regarding the origination of your loan.</p>
                    </div>
                </div>
                <p className='footer__polic'>If you received a letter from New American Funding and would like to be removed from our mailing list, please call 800-450-2010.<br/>© 2018 Broker Solutions, Inc. DBA New American Funding. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer