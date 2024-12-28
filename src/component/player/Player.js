import { useRef, useEffect,useState} from "react"

const Player = ({videoId,getDuratiom}) =>{
    const playerRef = useRef(null)
    const [videoDuration, setDuration] = useState(null);

    useEffect(() =>{
        window.onYouTubeIframeAPIReady = () =>{
         const player = new window.YT.Player(playerRef.current,{
                height: "100%",
                width: "100%",
                videoId: videoId,
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    rel: 0,
                  },
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

    },[])
    
    return(
        <div class='Finding__play-video' ref={playerRef}></div>
    )
}

export default Player