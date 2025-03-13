import './BlogItemVideo.scss';
import { useEffect,useState } from 'react';
import { BtnAnimation } from '../../pages';
import Server from '../../service/Service';

const BlogItemVideo = () =>{
    const [blogData, setBlog] = useState([])
    useEffect(()=>{
        const blog = new Server();
        blog.getData('http://localhost:5000/blog')
        .then(result => {
            setBlog(result)
        })
        .catch(error => console.log(error))

    },[])

    return(
        <>
            {
                blogData.map((item,i)=>{
                    const {subtitle,img} = item
                    return(
                        <div className='blog__item' key={i}>
                            <img className='blog__pic' img src={img} alt="pic" />
                            <div className='blog__control'>
                                <BtnAnimation/>
                                <h3 className='blog__subTitle'>{subtitle}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </>
       
    )
}

export default BlogItemVideo;