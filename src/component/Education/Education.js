import './education.scss'
import Veiw from './View'
import Resources from './Resources'
const Education = () =>{
    return(
        <div class='education__container _container'>
            <h2 class='education__title title'>Education</h2>
            <div class='education__main-grid'>
                <div class='education__block'>
                    <Veiw/>
                </div>
                <div class='education__blo resources'>
                    <Resources/>
                </div>
            </div>
        </div>
    )
}


export default Education