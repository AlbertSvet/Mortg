import Server from '../../service/Service';
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

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
            <View data={data}
            oneClick={getClick}/>       
        
    )
}

const View = ({data,oneClick}) =>{
    const element = data.map((item,i)=>{
        const {text,book,title,file,hiddenBook,hidden,active,id} = item
        const btn = <button className='resources__btn'>
                        <a className='resources__link' href={file} download>Download</a>
                        <div className='resources__circl'></div>
                    </button>
        const hiddenBtn = <button onClick={()=>oneClick(i)} className='resources__hiddenBtn'>
                            <div className='resources__hiddenCircl'></div>
                          </button>
        const link = <Link to={`/books/${id}`} className='resources__text'>{text}</Link>                  

        return(
            
                <div className='resources__item' key={i}>
                    <div className='resources__top'>
                        <img src={active ? book : hiddenBook} alt="book" />
                        <div className='resources__blog'>
                            <h3 className='resources__title'>{title}</h3>
                           <div className='resources__text'>{active ? link : hidden}</div>
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