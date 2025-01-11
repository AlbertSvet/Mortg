import './App.scss';
import { Header, Footer, Finding, Getting } from '../page';

function App() {
  return (
    <div className="wrapper">
      
        <Header/>        
         

        <main className='page'>
            <Finding/>
            <section class='getting'>
              <div class='getting__container _container'>
                <h2 class='getting__titel'>Getting a mortgage funded takes a village.</h2>
                <h3 class='getting__subTitle'>Well, not quite a village, but two of the villages best lending heroes!</h3>
                <div class='getting__grid'>
                    <Getting />                    
                    
                </div>
              </div>
            </section>
            
        </main>


        <Footer/>
        

    </div>
  );
}

export default App;
