import Server from "../service/Service"
import { useState, useEffect } from "react"

const Resources = () =>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        const getRes = new Server();
        getRes.getData('http://localhost:5000/resources')
        .then(res => setData(res))
        .catch(er => console.log(er))
    },[])

    const getClick = (id) =>{
        setData((prev)=>{
            return(
                prev.map((item,i)=>{
                    if(i === id){
                        return{
                            ...item, active:!item.active
                        }
                    }
                    return item
                })
            )
             
        })
    }

    return(
        <div class='resources__block'>
             <View data={data}
             oneClick={getClick}/>
        </div>
    )
}

const View = ({data,oneClick}) =>{
    const element = data.map((item,i)=>{
        const {text,book,title,file,hiddenBook,hidden,active} = item
        const btn = <button class='resources__btn'>
                        <a class='resources__link' href={file} download>Download</a>
                        <div class='resources__circl'></div>
                    </button>
        const hiddenBtn = <button onClick={()=>oneClick(i)} class='resources__hiddenBtn'>
                            <div class='resources__hiddenCircl'></div>
                          </button>

        return(
            
                <div class='resources__item' key={i}>
                    <div class='resources__top'>
                        <img src={active ? book : hiddenBook} alt="book" />
                        <div class='resources__blog'>
                            <h3 class='resources__title'>{title}</h3>
                            <p class='resources__text'>{active ? text : hidden}</p>
                        </div>
                    </div>
                    {active ? btn : hiddenBtn}
                </div>
            
        )
    })
    return(
        element
    )
}
export default Resources