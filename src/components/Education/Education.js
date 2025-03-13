import './education.scss'
import View from './View'
import Resources from './Resources'
const Education = () =>{
    return(
        <div className='education__container _container'>
            <h2 className='education__title title'>Education</h2>
            <div className='education__main-grid'>
                <div className='education__block'>
                    <View/>
                </div>
                <div className='education__blo resources'>
                    <div className='resources__block'>
                        <Resources/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Education