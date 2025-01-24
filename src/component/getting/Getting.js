import './getting.scss';
import { BtnAnimation } from '../page';
import Server from '../service/Service';
import { useEffect, useState } from 'react';

const Getting = () =>{

    const [result, setData] = useState([])
    const data = new Server();

    useEffect(()=>{        
        data.getData('http://localhost:5000/mentors')
         .then(res => setData(res))
         .catch(er => console.log(er))
    },[])

    
    return(
        <View result={result}/>        
    )
}

const View = ({result}) =>{
        
            const element = result.map((item,i) =>{
                const {name,videoUrl,thumbs,title,text,skills } = item
                const nameAvtor = name.split(' ').slice(-1)
                
                return(
                    <div class='getting__item' key={i}>
                        <div class='getting__top'>
                            <img src={thumbs} alt="alt" />
                            <div class='getting__block'>
                                <BtnAnimation link={videoUrl}/>
                                {name}
                            </div>
                        </div>
                        <div class='getting__bootom'>
                            <div class='getting__sub-top'>
                                <h3 class='getting__nameTitle'>{title}</h3>
                                <p class='getting__name'>{nameAvtor}</p>
                                <p class='getting__text'>{text}</p>
                            </div>
                            <div class='getting__block-skill'>
                                <h3 class='getting__skills-title'>Skills</h3>
                                <div class='getting__icons'>
                                    {skills.map((item,i) => {
                                        return(                                            
                                            <div class='getting__block-icon' key={i}>
                                                <div class='getting__icon'><img src={item.icon} alt={item.name}/></div>
                                                <p class='getting__name-skill'>{item.name}</p>
                                            </div>
                                        )
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                )
            
            }).slice(0,2)
       
        
    

    return (
       element
    )
}

export default Getting