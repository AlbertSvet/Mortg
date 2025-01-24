import './slider.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';
import Server from '../service/Service';
import "swiper/css"; // Основные стили Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';

const Slider = () =>{
    const [useSlide, setSlide] = useState([]);

    // текущий слайд
    const [currentSlide, setCurrenSlide] = useState(1);
    
    useEffect(()=>{
            const slide = new Server();
            slide.getData('http://localhost:5000/slide')
            .then(res => {
                setSlide(res)
            })
            .catch(er => console.log(er))
        
    },[])


    const swiperRef = useRef(null);

    // кнопки
    const handlePrev = () =>{
        if(swiperRef.current){
            swiperRef.current.slidePrev();
        }
    }
    const handleNext = () =>{
        if(swiperRef.current){
            swiperRef.current.slideNext();
        }
    }

    return(
            <>
                <div class='customers__itemTwo'>
                        <div class='customers__pagin'><span class='customers__current'>{currentSlide}</span><span class='customers__total'>/{useSlide.length}</span></div>
                        <div class='customers__block-btn'>
                            <button class='customers__left' type='button' onClick={handlePrev}>+</button>
                            <button class='customers__right' type='button' onClick={handleNext}>-</button>
                        </div>
                </div>

                <Swiper className='custom-slider' 
                        slidesPerView={2} 
                        spaceBetween={25} 
                        loop={true}
                        onSwiper={(swiper) => {
                                swiperRef.current = swiper;                            
                        }}
                        onSlideChange={(swiper) => setCurrenSlide(swiper.realIndex + 1)}
                        modules={[Pagination]}
                        pagination={{
                            clickable: true, // Пагинация кликабельная
                            el: '.custom-pagination', // Кастомный контейнер для пагинации
                        }}
                        >

                    {useSlide.map((item,i)=>{
                        const{city,name,position,text,img,icon} = item
                        return(
                            <SwiperSlide className='custom-slider__slide custom-slide' key={i}>
                                <div className='custom-slide__block'>
                                    <div className='custom-slide__top'>
                                        <img src={img} alt="pic" />
                                        <div className='custom-slide__description'>
                                            <h3 className='custom-slide__city'>{city}</h3>
                                            <h2 className='custom-slide__name'>{name}</h2>
                                            <h4 className='custom-slide__job'>{position}</h4>
                                        </div>
                                    </div>
                                    <div className='custom-slide__bottom'>
                                        <img src={icon} alt="pic" />
                                        <p className='custom-slide__text'>{text}</p>
                                    </div>
                                </div>
                            </SwiperSlide> 
                        )
                    })}
                </Swiper>

                <div class="custom-pagination"></div>
            </>
    )
}

// const View = ({data}) =>{
   
//     return(
//         <>
//             {data.map((item,i)=>{
//                     return(
//                         <SwiperSlide key={i}>
//                             {item.name}
//                         </SwiperSlide> 
//                     )
//             })}
//         </>
//     )
// }

export default Slider