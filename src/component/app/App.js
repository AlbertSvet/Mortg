import './App.scss';
import { Header, Footer, Finding } from '../page';

function App() {
  return (
    <div className="wrapper">
      
        <Header/>        
         

        <main className='page'>
            <Finding/>
        </main>


        <Footer/>
        

    </div>
  );
}

export default App;
