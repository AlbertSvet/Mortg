import './footer.scss'
import Logo from '../img/LogoFooter.svg'

const Footer = () =>{
    return(
        <div class='footer'>
            <div class='footer__container _container'>
                <div class='footer__top'>
                    <div class='footer__logo'>
                        <a href="#">
                            <img src={Logo} alt="Logo" />
                        </a>
                    </div>
                    <button class='footer__btn'>Schedule a time</button>
                </div>
                <div class='footer__body'>
                    <div class='footer__item-block'>
                        <ul class='footer__list'>
                            <li class="footer__li footer__li--title">Contact us</li>
                            <li class="footer__li">
                                <a href="">14511 Myford Road, Suite 100, Tustin, CA 92780</a>
                            </li>
                            <li class="footer__li">
                                <a href="">800-450-2010</a>
                            </li>
                            <li class="footer__li">
                                <a href="">customerservice@nafinc.com</a>
                            </li>
                        </ul>
                        <ul class='footer__list'>
                            <li class="footer__li footer__li--title">Education</li>
                            <li class="footer__li">
                                <a href="">Blog</a>
                            </li>
                            <li class="footer__li">
                                <a href="">Ebook</a>
                            </li>
                            <li class="footer__li">
                                <a href="">Webinar</a>
                            </li>
                        </ul>
                        <ul class='footer__list'>
                            <li class="footer__li footer__li--title">Legal</li>
                            <li class="footer__li">
                                <a href="">Terms of use</a>
                            </li>
                            <li class="footer__li">
                                <a href="">Privacy policy</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div class='footer__item'>
                        <p class='footer__text'>New American Funding makes Customer Service our number one priority. We encourage you to call our Corporate Customer Service department at 800-450-2010 ext. 7100 between 8 am and 5:00 pm Pacific or email us anytime at customerservice@nafinc.com for any complaint resolution you may have regarding the origination of your loan.</p>
                        <p class='footer__text'>New American Funding makes Customer Service our number one priority. We encourage you to call our Corporate Customer Service department at 800-450-2010 ext. 7100 between 8 am and 5:00 pm Pacific or email us anytime at customerservice@nafinc.com for any complaint resolution you may have regarding the origination of your loan.</p>
                    </div>
                </div>
                <p class='footer__polic'>If you received a letter from New American Funding and would like to be removed from our mailing list, please call 800-450-2010.<br/>© 2018 Broker Solutions, Inc. DBA New American Funding. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer