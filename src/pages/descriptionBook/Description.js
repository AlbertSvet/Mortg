import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Server from "../../service/Service";
import './descr.scss'
import Fon from './fon.png'
const Description = () =>{
   const {descriptionId} = useParams()
   const [data, setData] = useState([])
  
   useEffect(()=>{
    const myData = new Server()
    myData.getData('http://localhost:5000/description')
    .then(res=>setData(res))
    .catch(er => console.log(er))
   },[descriptionId])

    return(
        <section className='description'>            
            <View data={data} descriptionId={descriptionId}/>
        </section>
    )
}

const View = ({data,descriptionId}) =>{
    const element = data.map((item,i)=>{
        const {name,title,firstThing,secondThing,firstImg,secondImg} = item
        const names = name.split(' ').slice(0,1);
        if(descriptionId == names) {
            return(
                <>
                    <div className='description__fon'>
                        <img src={Fon} alt="fon" />
                        <div className='description__blockTitle'>
                            <h2 className='description__title title'>
                                {title}
                            </h2>
                            <h3 className='description__subTitle'>
                                {name}
                            </h3>
                        </div>
                       
                    </div>
                    <div className='description__container'>
                        <div className='description__block main-description'>
                            <h2 className='main-description__title title'>What’s in the report</h2>
                            <p className='main-description__subtext'>So you’re about to get into the world of homeownership. It’s okay...everyone feels lost during this process, but the more preparation you do upfront, the smoother your journey will be.</p>
                            <h2 className='main-description__title title'>1st thing</h2>
                            <p className='main-description__text'>{firstThing}</p>
                            <img src={secondImg} alt="fon" />
                            <h2 className='main-description__title title'>2nd thing</h2>
                            <p className='main-description__text'>{secondThing}</p>
                            <img src={firstImg} alt="fon" />
                        </div>
                    </div>
                </>
            )
        }
    })

    return(
        element
    )
}

export default Description