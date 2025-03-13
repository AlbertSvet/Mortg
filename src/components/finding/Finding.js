import './Finding.scss';
import Player from '../player/Player';
import { BtnAnimation } from '../../pages';
import { useState } from 'react';
const Finding = () =>{
    const [duration, setDuration] = useState(null)
    const getDuratiom = (dur) =>{
        setDuration(dur)
    }
    const formatDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const newFormat = formatDuration(duration)
    return (
        <section className='Finding'>
            <div className='Finding__container _container'>
                <div className='Finding__flex'>
                    <div className='Finding__item-video'>
                        <Player 
                        getDuratiom = {getDuratiom}
                        videoId='SegcMrEB8yA'/>
                        <div className='Finding__block-play'>
                            <h4 className='Finding__video-title'>Why a mortgage is so much more 
                            than just a rate?</h4>
                            <div className='Finding__item-play'>
                                
                                <BtnAnimation link={'https://www.youtube.com/watch?v=SegcMrEB8yA'}/>
                                
                                <span className='Finding__sec'>{newFormat}</span>
                            </div>
                        </div>
                    </div>
                    <div className='Finding__item'>
                        <div>
                            <h1 className='Finding__title'>Finding a mortgage is so <span>much more</span> than <span>just a rate</span></h1>
                            <h3 className='Finding__subTitle'>Rates change, but every mortgage journey starts with a relationship.
                            (Pssst...it’s not just about clicking a button)</h3>
                        </div>
                        <div class ='Finding__subBlock'>
                            <p className='Finding__subText'>Let us help you create
                            your mortgage journey</p>
                            <button className='Finding__btn'>Get started</button>
                            <button className='Finding__btn Finding__btn--white'>Schedule a time</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Finding;