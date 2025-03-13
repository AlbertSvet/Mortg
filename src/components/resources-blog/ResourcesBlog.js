import './resources-blog.scss';
import Resources from '../education/Resources';


const ResourcesBlog = ()=>{
    return(
        <div className='resources-blog__block'>
            <h2 className='resources-blog__title title'>Resources</h2>
            <div className='resources-blog__grid'>
                <Resources/>
            </div>
        </div>
        
    )
}

export default ResourcesBlog