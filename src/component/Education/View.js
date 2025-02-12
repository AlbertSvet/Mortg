
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Server from '../service/Service';

const Veiw = () =>{
    const [data, setData] = useState([]);
    const [activeIndex, setActive] = useState(null)

    const location = useLocation();
    const home = location.pathname === '/';

    useEffect(()=>{
        const education = new Server();
        education.getData('http://localhost:5000/education')
        .then(res => setData(res))
        .catch(er=> console.log(er))
    },[])

    const hoverActive = (i) =>{
        setActive(i)
    }

    let clssNames = 'education__item education__item--main';

    const element = data.map((item, i)=>{
        const {article, name, text,avtor,img,clas} = item;
        return(
            <div 
                key={i}   
                onMouseMove={()=>hoverActive(i)}
                // class={i == 0 ? clssNames : 'education__item'}
                className={`${!clas ? clssNames : "education__item"} ${
                    activeIndex === i && i > 0  ? "education__item hoverEffect" : ""
                }`}
                >

                {!clas ? <img class='education__img' src={img} alt="fon" /> : null}
                <div class='education__abs'>
                    <h3 class={clas ? 'education__subTitle active' : 'education__subTitle'}>Blog</h3>
                    <div class={clas ? 'education__subBLock active' : 'education__subBLock'}>
                        <h4 class={clas ? 'education__artTitle active' : 'education__artTitle'}>{article}</h4>
                        <p class={clas ? 'education__text active' : 'education__text'}>{text}</p>
                    </div>
                    <div class='education__avtor'>
                        <img src={avtor} alt="avatar" />
                        <p class={clas ? 'education__name active' : 'education__name'}><span>by</span>{name}</p>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <>
            {home ? element.slice(0,3) : element}
        </>
        
    )
}
export default Veiw