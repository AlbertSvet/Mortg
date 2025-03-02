import { useParams,Link } from "react-router-dom"
import { useState, useEffect } from "react"
import './books.scss';
import Server from "../../service/Service";

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
                const {title, text, id, about, pageImg, autor} = item
                const {booksId} = urlBook
                     if(id === booksId){
                        return(
                            <div class='book__grid' key={id}>
                                
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
                        )
                     }
                   
                })}
        </>
    )
}
export default Book