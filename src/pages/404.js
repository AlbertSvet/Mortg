
import { Link } from "react-router-dom"
const Page404 = () =>{
    return(
        <div className="container _container">
            <div class='page404'>
                <p class='page404__text'>Страницы не существует</p>
                <div class='page404__link'>
                    <Link to='/'>На главную</Link>
                </div>
            </div>
        </div>
    )
}

export default Page404