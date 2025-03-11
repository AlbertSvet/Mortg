import './resources-blog.scss';
import Resources from "../Education/Resources"


const ResourcesBlog = ()=>{
    return(
        <div class='resources-blog__block'>
            <h2 class='resources-blog__title title'>Resources</h2>
            <div class='resources-blog__grid'>
                <Resources/>
            </div>
        </div>
        
    )
}

export default ResourcesBlog