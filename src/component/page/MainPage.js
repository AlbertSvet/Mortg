import {Finding, Getting, Story, StoryVideo, BtnAnimation,Rating,Slider,Education} from '../page';

const MainPage = () =>{

    return(
        <>
             <Finding/>
            <section class='getting'>
              <div class='getting__container _container'>
                <h2 class='getting__titel title'>Getting a mortgage funded takes a village.</h2>
                <h3 class='getting__subTitle sub-title'>Well, not quite a village, but two of the villages best lending heroes!</h3>
                <div class='getting__grid'>
                    <Getting />                    
                </div>
              </div>
            </section>
            
            <section class='story'>
              <div class='story__container _container'>
                <h2 class='story__title title'>Your mortgage journey is a story...</h2>
                <h3 class='story__subTitle sub-title'>It’s not just about clicking a button.</h3>

                <div class='story__main'>
                    <div class='story__left-item'>
                          <Story/>
                    </div>
                    <div class='story__right-item'>

                      <div class='story__top-item'>
                        <StoryVideo>
                          <BtnAnimation/>
                            <p>The difference between «fixed rate»
                            and «adjustable»</p>
                        </StoryVideo>
                      </div>
                      <div class='story__grid-item'>
                      <StoryVideo>
                        <BtnAnimation/>
                            <p>What are points and credits?</p>
                        </StoryVideo>
                      </div>
                      <div class='story__grid-item'>
                      <StoryVideo>
                          <BtnAnimation/>
                            <p>What are points</p>
                        </StoryVideo>
                      </div>
                        
                       
                    </div>
                </div>

              </div>
            </section>

            <section class='customers'>
              <div class='customers__container _container'>
                <h2 class='customers__title title'>What our customers say</h2>
                <h3 class='customers__subtitle sub-title'>Truly reviews from our clients</h3>

                <div class='customers__grid'>

                  <div class='customers__rating-block'>
                      <Rating/>
                  </div>

                  <div class='customers__slider'>
                      <Slider/>
                  </div>
                </div>
                
              </div>
            </section>

            <section class='education'>
                <Education/>
            </section>
        </>
    )
}

export default MainPage