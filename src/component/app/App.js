import './App.scss';
import { Header, Footer, Finding, Getting, Story} from '../page';

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
            
            <section class='story'>
              <div class='story__container _container'>
                <h2 class='story__title'>Your mortgage journey is a story...</h2>
                <h3 class='story__subTitle'>It’s not just about clicking a button.</h3>

                <div class='story__main'>
                    <div class='story__left-item'>
                          <Story/>
                    </div>
                    <div class='story__right-item'></div>
                </div>

              </div>
            </section>
        </main>


        <Footer/>
        

    </div>
  );
}

export default App;
