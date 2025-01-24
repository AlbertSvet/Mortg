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
    //             <li class='customers__li' key={i}>
    //                 <img src={Star} alt="star" />
    //             </li>
    //             )
    //     }else{
    //         ratingData.push( 
    //             <li class='customers__li' key={i}>
    //                 <img src={HalfStar} alt="star" />
    //             </li>
    //             )
    //     }
        
    // }
    const element = data.map((item,i)=>{
        const {name, reviews,stars,iconStar,halfStar,noneStar} = item
        return(
            <div class='customers__item' key={i}>
                <div class='customers__description'>
                    <h4 class='customers__subtitle-star'><span>{stars} stars rating</span></h4>
                    <p class='customers__brand'>{name}</p>

                    <div class='customers__line'></div>

                    <p class='customers__quantity'>Based on <span class='customers__border'>{reviews} reviews</span></p>
                </div>
                <div class='customers__star'>
                    
                    <ul class='customers__list'>
                       
                        {/* {ratingData} */}
                        <li class='customers__li'>
                            <img src={iconStar} alt="star" />
                        </li>
                        <li class='customers__li'>
                            <img src={iconStar} alt="star" />
                        </li>
                        <li class='customers__li'>
                            <img src={iconStar} alt="star" />
                        </li>
                        <li class='customers__li'>
                            <img src={iconStar} alt="star" />
                        </li>
                        <li class='customers__li'>
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