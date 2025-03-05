import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import './books.scss';
import Percent from './percent.svg';
import Clip from './clipboard.svg';
import User from './users.svg';
import Server from "../../service/Service";
import BtnAnimation from "../../btnAnim/BtnAnimation";

const mainBlock = [
    {
        subTitle: 'Rate',
        subText: 'Yes. Rate is important, but it’s not everything. Understanding your rate, is more important.',
        img: Percent
    },
    {
        subTitle: 'Relationships',
        subText: 'Build a solid relationship with a realtor a lender and never look back!',
        img: User
    },
    {
        subTitle: 'Pre-Approved',
        subText: 'Getting pre-approved early will play a key part in finding your dream home.',
        img: Clip
    },
]

const Book = ()=>{
    const urlBook = useParams();
    const [book, setBook] = useState([]);    

    useEffect(()=>{
        const getBook = new Server();
        getBook.getData('http://localhost:5000/resources')
        .then(res => setBook(res))
        .catch(er => console.log(er))
    },[urlBook.booksId])

    return(
        <div class='book'>
            <div class='book__fon'>
                    <img class='book__img' src='/books/fon.png' alt="fon" />
            </div>

            <div class='book__container _container'>
                <View book={book} urlBook={urlBook} />
            </div> 
        </div>
    )
}

const View = ({book,urlBook}) =>{
    return(
        <>
            {book.map((item,i)=>{
                const {title, text, id, about, pageImg, autor, blockAutor} = item
                const {name,autorText,image} = blockAutor
                const {booksId} = urlBook
                     if(id === booksId){
                        return(
                            <div key={id}>
                                <div class='book__grid'>                                    
                                    <div class='book__item'>
                                        {pageImg ? <img src={pageImg} alt="book1" /> :  <p style={{ color: 'white', fontSize: '35px' }}>No picture of book</p>}                                    
                                    </div>
                                    <div class='book__item'>
                                        <h2 class='book__title'>{text}</h2>
                                        <p class='book__name-autor'>{autor ? autor : 'Author not specified'}</p>

                                        <div class='book__about'>
                                            <h3 class='book__subTitle'>About the book</h3>
                                            <p class='book__text'>{about}</p>
                                        </div>
                                        <div class='book__block-input'>
                                            <input class='book__input' type="text" placeholder="Your Email"/>
                                            <button type="button" class='book__btn'>Get the eBook</button>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div class='book__main-block main-block'>
                                    <h2 class='main-block__title title'>What’s in the report</h2>
                                    <div class='main-block__grid'>                    
                                        <Main/>
                                    </div>
                                </div>
                                
                                <div class='book__block-author block-author'>
                                <h2 class='block-author__title title'>About author</h2>
                                    <div class='block-author__grid'>
                                        <div class='block-author__item'><img src={image} alt="autor" /></div>
                                        <div class='block-author__item'>
                                            <p class='block-author__subText'>The master mind</p>
                                            <h3 class='block-author__subTitle'>{name.split(' ')[1]}</h3>
                                            <p class='block-author__text'>{autorText}</p>
                                            <div class='block-author__block-btn'>
                                                <BtnAnimation/>
                                                <p class='block-author__name'>{name}</p>
                                            </div>
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
    const [main, setMain] = useState(mainBlock);

    const elemnt = main.map((item,i)=>{
        const {subTitle, subText, img} = item
        return(
            <div key={i} class='main-block__item'>
                <div class='main-block__pic'>
                    <img src={img} alt="icon" />
                </div>
                <h3 class='main-block__subTitle'>{subTitle}</h3>
                <p class='main-block__subText'>{subText}</p>
            </div>
        )
    })
    return(
        elemnt
    )
}
export default Book

