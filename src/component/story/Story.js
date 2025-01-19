import './story.scss';
import Server from '../service/Service';
import { useState, useEffect } from 'react';

const Story = () =>{
    const [storyItem, setStoryItem] = useState([]);
    const stor = new Server();
    useEffect(()=>{
        stor.getData('story')
        .then(res => setStoryItem(res))
        .catch(er => console.log(er))
    },[])

    console.log(storyItem)

    const getId = (id) =>{
        setStoryItem((prev) =>{
            return(
                prev.map((item,i) =>({
                ...item, 
                active: i===id
             }))
            )
             
        })
    }

    

    return(
        <View 
        getId={getId}
        data={storyItem}/>
    )
}

const View = (props) =>{
    const {data,getId} = props;
    const elemet = data.map((item,i)=>{
        const {id,title,text,active} = item
        let classNames = 'story__item';
        if(active){
            classNames += ' active'
        }
        return(
            <div onClick={()=> getId(i)} key={i} class={classNames}>
                <span class='story__span'>{id}</span>
                <h3 class='story__item-title'>{title}</h3>
                <p class='story__item-text'>{text}</p>
            </div>
        )
    })
    return(
        elemet
    )
}

export default Story