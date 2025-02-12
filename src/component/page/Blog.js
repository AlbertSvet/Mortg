import './blog.scss';
import BlogItemVideo from '../blog-item-video/BlogItemVideo';
import ResourcesBlog from '../resources-blog/ResourcesBlog';
import EducationBlog from '../education-blog/EducationBlog';
const Blog = () => {
    return(
        <>
            <section clss='blog'>
                <div class="blog__container">
                    <img class='blog__img' src='/blog/blogFon.png' alt="fon" />
                </div>

                <div class='blog__block _container'>
                    <BlogItemVideo/>
                </div>
            </section>

            <section clss='resources-blog'>
                <div class='resources-blog__container _container'>
                    <ResourcesBlog/>
                </div>
            </section>
            <section clss='education-blog'>
                <div class='education-blog__container _container'>
                    <h2 class='education-blog__title title'>Education</h2>
                    <EducationBlog/>
                </div>
            </section>
        </>

    )
}

export default Blog