import poster from './storyPoster.png'
const StoryVideo = ({children}) =>{

    return(
        <div class='story__video-item'>
            <img src={poster} alt="poster"/>
            <div class='story__controll'>
                {children}
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, consequuntur.</p> */}
                <div class='story__time'>
                    <span>0</span>:<span>26</span>
                </div>
            </div>
        </div>
    )
}

export default StoryVideo