import './getting.scss';
import { BtnAnimation } from '../page';
import Server from '../service/Service';
import { useEffect, useState } from 'react';

const Getting = () =>{

    const [result, setData] = useState([])
    const data = new Server();

    useEffect(()=>{        
        data.getData()
         .then(res => setData(res))
         .catch(er => console.log(er))
    },[])

    console.log(result)
    
    return(
        <View result={result}/>
        
    )
}

const View = ({result}) =>{
        
            const element = result.map((item,i) =>{
                return(
                    <div class='getting__item' key={i}>
                        <div class='getting__top'>
                            <img src={item.thumbs} alt="alt" />
                            <div class='getting__block'>
                                <BtnAnimation link={item.videoUrl}/>
                                {item.name}
                            </div>
                        </div>
                        <div class='getting__bootom'>
        
                        </div>
                    </div>
                )
            
            }).slice(0,2)
       
        
    

    return (
       element
    )
}

export default Getting