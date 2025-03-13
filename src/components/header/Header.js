import './header.scss'
import Logo from './Logo.svg'
import WhiteLogo from './whiteLogo.svg'
import { useState, useEffect } from 'react'
import { NavLink, useLocation} from 'react-router-dom'


const Header = () =>{
    const [active, setActive] = useState(false)
    const {pathname} = useLocation()
    

    const changeClass = (e) =>{
        e.stopPropagation();
        setActive((prev)=>!prev)
    }
    
    
    const changeLinkClass = (e) =>{
        if(e.target.classList.contains('header__link')){
            setActive(false)
        }

    }

    const changeDocumentClass = (e) =>{
        if(!e.target.closest('.header__menu')){ 
            setActive(false)
        }
    }
     useEffect(()=>{
        document.addEventListener('click', changeDocumentClass)
        return  ()=>{
            document.removeEventListener('click',changeDocumentClass)
        }
    },[])
  
  
      
        const body = document.querySelector('body')
        let clasNamesBtn = 'header__btn';
        let clasNamesMenu = 'header__menu';
        const local = (pathname === '/' || pathname === '/blog') ? Logo : WhiteLogo;
        if(active){
            clasNamesBtn += ' active'
            clasNamesMenu += ' active'
            body.style.overflow = 'hidden'
        }else{
            body.style.overflow = null

        }
    return (
        <div className='header'>
            <div className ='header__container'>
                <div className='header__flex'>
                    
                    <button onClick={(e)=>changeClass(e)} className={clasNamesBtn}>
                        <span></span>
                    </button>
                    <NavLink to='/'><img className='header__logo' src={local} alt="logo" /></NavLink>
                </div>
            </div>
            <div className={clasNamesMenu}>               
                <nav className="header__body">
                    <ul className="header__list" onClick={(e)=>changeLinkClass(e)}>
                        <li className="header__item"><a href="" className="header__link">Your teachers</a></li>
                        <li className="header__item"><a href="" className="header__link">Your mortgage journey</a></li>
                        <li className="header__item"><a href="" className="header__link">What our customers say</a></li>
                        <li className="header__item"><NavLink to='/blog' className="header__link" style={({isActive}) => isActive ? {color:'rgb(39, 143, 180)'}:null}>Blog</NavLink></li>
                        <li className="header__item"><NavLink to='/books/1' className="header__link" style={({isActive})=>isActive?{color:'rgb(39, 143, 180)'}:null}>Ebook</NavLink></li>
                        <li className="header__item"><a href="" className="header__link">Webinar</a></li>
                    </ul>
                </nav>
                <div className='header__block'>
                    <button className='header__start'>Get started</button>
                    <button className='header__time'>Schedule a time</button>
                </div>
            </div>
        </div>
        
    )
    
}

export default Header