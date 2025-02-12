import './App.scss';
import { Header, Footer, MainPage, Blog, Page404} from '../page';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

 
  return (
    <Router>
      <div className="wrapper">

          <Header/>       
            <main className='page'> 
              <Routes>
                 
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/blog' element={<Blog/>}/>              
                    <Route path='*' element={<Page404/>}/>
              </Routes>
            </main>
          <Footer/>

      </div>
    </Router>


  );
}

export default App;
