import { Link, useParams,useLocation } from "react-router-dom"
import { useState, useEffect,useContext } from "react"
import './books.scss';
import Server from "../../service/Service";
import BtnAnimation from "../../components/btnAnim/BtnAnimation";
import dataContext from "../../context/context";
import Cat from '../../components/player/Bitmap.png';
import MacBook from './top-macbook.png'

const Book = ()=>{
    const {pathname} = useLocation()
    const urlBook = useParams();
    const [book, setBook] = useState([]);        
    useEffect(()=>{
        const getBook = new Server();
        getBook.getData('http://localhost:5000/resources')
        .then(res => setBook(res))
        .catch(er => console.log(er))
    },[urlBook.booksId])
    
    return(
        <div className='book'>
            {pathname == '/books/1' ? 
                <div className='book__fon'>
                    <img className='book__img' src='/books/fon.png' alt="fon" />
                </div>
            :
            <SecondAvtor/>            
            }
            <div className='book__container _container'>
                <View book={book} urlBook={urlBook} pathname={pathname} />
            </div> 
        </div>
    )
}

const View = ({book,urlBook,pathname}) =>{
    return(
        <>
            {book.map((item,i)=>{
                const {title, text, id, about, pageImg, autor, blockAutor} = item
                const {name,autorText,image} = blockAutor
                const {booksId} = urlBook
                     if(id === booksId){
                        return(
                            <div key={id}>
                               {pathname == '/books/1' ? 
                                 <div className='book__grid'>                                    
                                    <div className='book__item'>
                                        {pageImg ? <img src={pageImg} alt="book1" /> :  <p style={{ color: 'white', fontSize: '35px' }}>No picture of book</p>}                                    
                                    </div>
                                    <div className='book__item'>
                                        <h2 className='book__title'>{text}</h2>
                                        <p className='book__name-autor'>{autor ? autor : 'Author not specified'}</p>

                                        <div className='book__about'>
                                            <h3 className='book__subTitle'>About the book</h3>
                                            <p className='book__text'>{about}</p>
                                        </div>
                                        <BlockInput/>
                                    </div>
                                    
                                </div>
                             :
                             null
                            
                            }
                               

                                <div className='book__main-block main-block'>
                                    <h2 className='main-block__title title'>What’s in the report</h2>
                                    <div className='main-block__grid'>                    
                                        <Main/>
                                    </div>
                                </div>
                                
                                <div className='book__block-author block-author'>
                                <h2 className='block-author__title title'>About author</h2>
                                    <div className='block-author__grid'>
                                        <div className='block-author__item'><img src={image} alt="autor" /></div>
                                        <div className='block-author__item'>
                                            <p className='block-author__subText'>The master mind</p>
                                            <h3 className='block-author__subTitle'>{name.split(' ')[1]}</h3>
                                            <p className='block-author__text'>{autorText}</p>
                                            <div className='block-author__block-btn'>
                                                <BtnAnimation/>
                                                <p className='block-author__name'>{name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className='book__get-started get-started'>
                                    <div className='get-started__grid'>
                                        <div className='get-started__item'>
                                            <div>
                                                <h2 className='get-started__title title'>Get started with us</h2>
                                                <p className='get-started__text'>Rates change, but every mortgage journey starts with a relationship.
                                                (Pssst...it’s not just about clicking a button)</p>
                                            </div>
                                            <div className='get-started__block'>
                                                <Link to={`${name.split(' ').slice(1)}`} className='get-started__btn get-started__btn--blue' type="button">Get started</Link >
                                                <button className='get-started__btn' type="button">Schedule a time</button>
                                            </div>
                                        </div>                                        
                                        <div className='get-started__item'>
                                            <img src={Cat} alt="cat" />
                                        </div>                                        
                                    </div>

                                </div>

                            </div>
                        )
                     }
                   
                })}
        </>
    )
}

const Main = () =>{ 
    const myContextBook = useContext(dataContext)
    const [main, setMain] = useState(myContextBook);
    const elemnt = main.map((item,i)=>{
        const {subTitle, subText, img} = item
        return(
            <div key={i} className='main-block__item'>
                <div className='main-block__pic'>
                    <img src={img} alt="icon" />
                </div>
                <h3 className='main-block__subTitle'>{subTitle}</h3>
                <p className='main-block__subText'>{subText}</p>
            </div>
        )
    })
    return(
        elemnt
    )
}
const SecondAvtor = () =>{
    return(
        <div className='book__second-grid second-block'>
                <div className='second-block__grid'>
                    <div className='second-block__item'>
                        <h2 className='second-block__title title'>Webinar name</h2>
                        <h3 className='second-block__name'>Scott Johnson</h3>
                        <p className='second-block__text'>So you’re about to get into the world of homeownership. It’s okay...everyone feels lost during this process, but the more preparation you do upfront, the smoother your journey will be.</p>
                        <BlockInput/>
                    </div>
                    <div className='second-block__item'>
                        <img src={MacBook} alt="macbook" />
                        <div className='second-block__btn'>
                            <BtnAnimation/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
const BlockInput = () =>{
    return(
        <div className='book__block-input'>
            <input className='book__input' type="text" placeholder="Your Email"/>
            <button type="button" className='book__btn'>Get the eBook</button>
        </div>
    )
}
export default Book

