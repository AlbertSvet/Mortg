import './rating.scss';
import Star from './star.svg';
import HalfStar from './half_star.svg';
import NoneStar from './none_star.svg';

const Rating = () =>{
    const dataRating = [
        {
            name: 'Google',
            reviews: 85,
            stars: 4.5,
            iconStar: Star,
            halfStar: HalfStar,
            
        },
        {
            name: 'Zillow',
            reviews: 22,
            stars: 4,
            iconStar: Star,
            halfStar: HalfStar,
            noneStar: NoneStar
        },
    ]
   
    
    return(
       <View data={dataRating}/>
    )
}

const View = ({data}) =>{
    // const ratingData = [];

    // for(let i = 0; i < 5; i++){        
       
    //     if(i !== 4){
    //         ratingData.push( 
    //             <li className='customers__li' key={i}>
    //                 <img src={Star} alt="star" />
    //             </li>
    //             )
    //     }else{
    //         ratingData.push( 
    //             <li className='customers__li' key={i}>
    //                 <img src={HalfStar} alt="star" />
    //             </li>
    //             )
    //     }
        
    // }
    const element = data.map((item,i)=>{
        const {name, reviews,stars,iconStar,halfStar,noneStar} = item
        return(
            <div className='customers__item' key={i}>
                <div className='customers__description'>
                    <h4 className='customers__subtitle-star'><span>{stars} stars rating</span></h4>
                    <p className='customers__brand'>{name}</p>

                    <div className='customers__line'></div>

                    <p className='customers__quantity'>Based on <span className='customers__border'>{reviews} reviews</span></p>
                </div>
                <div className='customers__star'>
                    
                    <ul className='customers__list'>
                       
                        {/* {ratingData} */}
                        <li className='customers__li'>
                            <img src={iconStar} alt="star" />
                        </li>
                        <li className='customers__li'>
                            <img src={iconStar} alt="star" />
                        </li>
                        <li className='customers__li'>
                            <img src={iconStar} alt="star" />
                        </li>
                        <li className='customers__li'>
                            <img src={iconStar} alt="star" />
                        </li>
                        <li className='customers__li'>
                            <img src={i === 1 ? noneStar: halfStar} alt="star" />
                        </li>
                    </ul>
                </div>
            </div>
        )
    })

    return(
        element
    )
}

export default Rating