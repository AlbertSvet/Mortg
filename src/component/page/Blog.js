import './blog.scss';
import BlogItemVideo from '../blog-item-video/BlogItemVideo';

const Blog = () => {
    return(
        <section clss='blog'>
            <div class="blog__container">
                <img class='blog__img' src='/blog/blogFon.png' alt="fon" />
            </div>

            <div class='blog__block _container'>
                <BlogItemVideo/>
            </div>
        </section>
       
    )
}

export default Blog