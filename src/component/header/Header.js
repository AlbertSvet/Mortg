import './header.scss'
import Logo from '../img/Logo.svg'
import {useState} from 'react'
import { Component } from 'react'

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
    // componentWillUnmount() {
    //     document.removeEventListener('click', this.changDocumentClass)
    // }
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
                    <a href="#"><img className='header__logo' src={Logo} alt="logo" /></a>
                </div>
            </div>
            <div class={clasNamesMenu}>               
                <nav class="header__body">
                    <ul class="header__list">
                        <li class="header__item"><a href="" class="header__link">Your teachers</a></li>
                        <li class="header__item"><a href="" class="header__link">Your mortgage journey</a></li>
                        <li class="header__item"><a href="" class="header__link">What our customers say</a></li>
                        <li class="header__item"><a href="" class="header__link">Blog</a></li>
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