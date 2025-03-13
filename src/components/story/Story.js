import './story.scss';
import Server from '../../service/Service';
import { useState, useEffect } from 'react';

const Story = () =>{
    const [storyItem, setStoryItem] = useState([]);
    const stor = new Server();
    useEffect(()=>{
        stor.getData('http://localhost:5000/story')
        .then(res => setStoryItem(res))
        .catch(er => console.log(er))
    },[])


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
            <div onClick={()=> getId(i)} key={i} className={classNames}>
                <span className='story__span'>{id}</span>
                <h3 className='story__item-title'>{title}</h3>
                <p className='story__item-text'>{text}</p>
            </div>
        )
    })
    return(
        elemet
    )
}

export default Story