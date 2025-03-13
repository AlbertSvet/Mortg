import './blog.scss';
import BlogItemVideo from '../../components/blog-item-video/BlogItemVideo';
import ResourcesBlog from '../../components/resources-blog/ResourcesBlog';
import EducationBlog from '../../components/education-blog/EducationBlog';
const Blog = () => {
    return(
        <div className='main-blog' style={{paddingBottom:"60px"}}>
            <section clss='blog'>
                <div className="blog__container">
                    <img className='blog__img' src='/blog/blogFon.png' alt="fon" />
                </div>

                <div className='blog__block _container'>
                    <BlogItemVideo/>
                </div>
            </section>

            <section clss='resources-blog'>
                <div className='resources-blog__container _container'>
                    <ResourcesBlog/>
                </div>
            </section>
            <section clss='education-blog'>
                <div className='education-blog__container _container'>
                    <h2 className='education-blog__title title'>Education</h2>
                    <EducationBlog/>
                </div>
            </section>
        </div>

    )
}

export default Blog