import {Finding, Getting, Story, StoryVideo, BtnAnimation,Rating,Slider,Education} from '../pages';
const MainPage = () =>{

    return(
        <>
             <Finding/>
            <section className='getting'>
              <div className='getting__container _container'>
                <h2 className='getting__titel title'>Getting a mortgage funded takes a village.</h2>
                <h3 className='getting__subTitle sub-title'>Well, not quite a village, but two of the villages best lending heroes!</h3>
                <div className='getting__grid'>
                    <Getting />                    
                </div>
              </div>
            </section>
            
            <section className='story'>
              <div className='story__container _container'>
                <h2 className='story__title title'>Your mortgage journey is a story...</h2>
                <h3 className='story__subTitle sub-title'>It’s not just about clicking a button.</h3>

                <div className='story__main'>
                    <div className='story__left-item'>
                          <Story/>
                    </div>
                    <div className='story__right-item'>

                      <div className='story__top-item'>
                        <StoryVideo>
                          <BtnAnimation/>
                            <p>The difference between «fixed rate»
                            and «adjustable»</p>
                        </StoryVideo>
                      </div>
                      <div className='story__grid-item'>
                      <StoryVideo>
                        <BtnAnimation/>
                            <p>What are points and credits?</p>
                        </StoryVideo>
                      </div>
                      <div className='story__grid-item'>
                      <StoryVideo>
                          <BtnAnimation/>
                            <p>What are points</p>
                        </StoryVideo>
                      </div>
                        
                       
                    </div>
                </div>

              </div>
            </section>

            <section className='customers'>
              <div className='customers__container _container'>
                <h2 className='customers__title title'>What our customers say</h2>
                <h3 className='customers__subtitle sub-title'>Truly reviews from our clients</h3>

                <div className='customers__grid'>

                  <div className='customers__rating-block'>
                      <Rating/>
                  </div>

                  <div className='customers__slider'>
                      <Slider/>
                  </div>
                </div>
                
              </div>
            </section>

            <section className='education'>
                <Education/>
            </section>


        </>
    )
}

export default MainPage