import './header.scss'
import Logo from '../img/Logo.svg'
import {useState, useRef} from 'react'
import { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component{
   
    state = {
        active: false
    }

    changClass = (e) =>{
        e.stopPropagation();
        this.setState(({active})=>({
            active: !active
        }))
    }
    
    changLinkClass = (e) =>{
        if(e.target.classList.contains('header__link')){
            this.setState({
                active:false
            })
        }

    }
    changDocumentClass = (e) =>{
        if(!e.target.closest('.header__menu')){ 
            this.setState({
                active: false
            })
        }
    }
    componentDidMount() {
            document.addEventListener('click', this.changDocumentClass)
       
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.changDocumentClass)
    }
  
    render() {
        const{active} = this.state
        const body = document.querySelector('body')
        let clasNamesBtn = 'header__btn';
        let clasNamesMenu = 'header__menu';
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
                    
                    <button onClick={this.changClass} className={clasNamesBtn}>
                        <span></span>
                    </button>
                    <NavLink to='/'><img className='header__logo' src={Logo} alt="logo" /></NavLink>
                </div>
            </div>
            <div class={clasNamesMenu}>               
                <nav class="header__body">
                    <ul class="header__list" onClick={(e)=>this.changLinkClass(e)}>
                        <li class="header__item"><a href="" class="header__link">Your teachers</a></li>
                        <li class="header__item"><a href="" class="header__link">Your mortgage journey</a></li>
                        <li class="header__item"><a href="" class="header__link">What our customers say</a></li>
                        <li class="header__item"><NavLink to='/blog' className="header__link" style={({isActive}) => isActive ? {color:'rgb(39, 143, 180)'}:null}>Blog</NavLink></li>
                        <li class="header__item"><a href="" class="header__link">Ebook</a></li>
                        <li class="header__item"><a href="" class="header__link">Webinar</a></li>
                    </ul>
                </nav>
                <div class='header__block'>
                    <button class='header__start'>Get started</button>
                    <button class='header__time'>Schedule a time</button>
                </div>
            </div>
        </div>
        
    )
    }
}

export default Header