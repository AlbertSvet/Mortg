import './Finding.scss';
import Player from '../player/Player';
import { BtnAnimation } from '../page';
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
        <section class='Finding'>
            <div class='Finding__container _container'>
                <div class='Finding__flex'>
                    <div class='Finding__item-video'>
                        <Player 
                        getDuratiom = {getDuratiom}
                        videoId='SegcMrEB8yA'/>
                        <div class='Finding__block-play'>
                            <h4 class='Finding__video-title'>Why a mortgage is so much more 
                            than just a rate?</h4>
                            <div class='Finding__item-play'>
                                
                                <BtnAnimation link={'https://www.youtube.com/watch?v=SegcMrEB8yA'}/>
                                
                                <span class='Finding__sec'>{newFormat}</span>
                            </div>
                        </div>
                    </div>
                    <div class='Finding__item'>
                        <div>
                            <h1 class='Finding__title'>Finding a mortgage is so <span>much more</span> than <span>just a rate</span></h1>
                            <h3 class='Finding__subTitle'>Rates change, but every mortgage journey starts with a relationship.
                            (Pssst...it’s not just about clicking a button)</h3>
                        </div>
                        <div class ='Finding__subBlock'>
                            <p class='Finding__subText'>Let us help you create
                            your mortgage journey</p>
                            <button class='Finding__btn'>Get started</button>
                            <button class='Finding__btn Finding__btn--white'>Schedule a time</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Finding;