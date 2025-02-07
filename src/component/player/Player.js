import { useRef, useEffect,useState} from "react"
import Preload from './Bitmap.png';


const Player = ({videoId,getDuratiom}) =>{
    const playerRef = useRef(null)
    const [videoDuration, setDuration] = useState(null);

    useEffect(() =>{
        window.onYouTubeIframeAPIReady = () =>{
         const player = new window.YT.Player(playerRef.current,{
               
                videoId: videoId,               
                  events: {
                    onReady: () =>{
                        const duration = player.getDuration();
                        setDuration(duration)                        
                    }
                  }
            });
            
            return () => {
              
                delete window.onYouTubeIframeAPIReady;
              };
        }
        getDuratiom(videoDuration);

    },[videoDuration])
    
    return(
        <div class='Finding__play-video'>
            <div class='Finding__video' ref={playerRef}></div>
            <img src={Preload} alt="" />
        </div>
    )
}

export default Player