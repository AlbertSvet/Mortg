import './BlogItemVideo.scss';
import { useEffect,useState } from 'react';
import { BtnAnimation } from '../page';
import Server from '../service/Service';

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
                        <div class='blog__item' key={i}>
                            <img class='blog__pic' img src={img} alt="pic" />
                            <div class='blog__control'>
                                <BtnAnimation/>
                                <h3 class='blog__subTitle'>{subtitle}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </>
       
    )
}

export default BlogItemVideo;