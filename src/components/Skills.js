import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import {BsPatchCheckFill} from 'react-icons/bs'







export const Skills = () => {



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    
    <section className="skill" id="skills">
      
        <div className="container">
          
            <div className="row">
                <div className="col-12">
                  
           
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Technical Expertise</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="img" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="img" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="img" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="img" />
                                <h5>c++</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="img" />
                                <h5>SQL</h5>
                            </div>
                        </Carousel>
                    </div>

                    <div className="expertise row">

                        <div className="col-3">
                          <div className="contain">

                              <h3>Frontend </h3>
                              <div className="experience__content">
                                <article className='experience__details'>

                                  <BsPatchCheckFill className='experience__details-icon'/>
                                  <div>
                                    <h5>HTML</h5>
                                  <small className='text-light'>Experienced</small>
                                  </div>
                                </article>

                                <article className='experience__details'>
                                  <BsPatchCheckFill className='experience__details-icon' />
                                  <div> 
                                    <h5>CSS</h5>
                                  <small className='text-light'>Experienced</small>
                                  </div>
                                </article>

                                <article className='experience__details'>
                                  <BsPatchCheckFill className='experience__details-icon'/>
                                  <div>
                                    <h5>JavaScript</h5>
                                  <small className='text-light'>Experienced</small>
                                  </div>
                                </article>

                                <article className='experience__details'>
                                  <BsPatchCheckFill className='experience__details-icon' />
                                  <div> 
                                    <h5>React.JS</h5>
                                  <small className='text-light'>Intermediate</small>
                                  </div>
                                </article>

                                <article className='experience__details'>
                                  <BsPatchCheckFill className='experience__details-icon' />
                                  <div>
                                    <h5>BootStrap</h5>
                                  <small className='text-light'>Intermediate</small>
                                  </div>
                                </article>


                              </div>
                            </div>

                        </div>


                        <div className="col-3"> 
                          <div className="contain">
                          <h3>Backend</h3>
                                             
                              <div className="experience__content">
                                <article className='experience__details'>

                                  <BsPatchCheckFill className='experience__details-icon'/>
                                  <div>
                                    <h5>Python</h5>
                                  <small className='text-light'>Experienced</small>
                                  </div>
                                </article>

                                <article className='experience__details'>
                                  <BsPatchCheckFill className='experience__details-icon' />
                                  <div> 
                                    <h5>Node.JS</h5>
                                  <small className='text-light'>Intermediate
                                  </small>
                                  </div>
                                </article>

                                <article className='experience__details'>
                                  <BsPatchCheckFill className='experience__details-icon'/>
                                  <div>
                                    <h5>Spring</h5>
                                  <small className='text-light'>Intermediate</small>
                                  </div>
                                </article>

                              </div>
                              </div>
                        </div>


                        <div className="col-3">
                          <div className="contain">
                          <h3>Database</h3>
                          <div className="experience__content">
                                <article className='experience__details'>

                                  <BsPatchCheckFill className='experience__details-icon'/>
                                  <div>
                                    <h5>MySQL</h5>
                                  <small className='text-light'>Experienced</small>
                                  </div>
                                </article>

                                <article className='experience__details'>
                                  <BsPatchCheckFill className='experience__details-icon' />
                                  <div> 
                                    <h5>MongoDB</h5>
                                  <small className='text-light'>Experienced</small>
                                  </div>
                                </article>

                                <article className='experience__details'>
                                  <BsPatchCheckFill className='experience__details-icon'/>
                                  <div>
                                    <h5>PostgreSQL</h5>
                                  <small className='text-light'>Intermediate</small>
                                  </div>
                                </article>

                                <article className='experience__details'>
                                  <BsPatchCheckFill className='experience__details-icon'/>
                                  <div>
                                    <h5>SQLite</h5>
                                  <small className='text-light'>Intermediate</small>
                                  </div>
                                </article>

                              </div>
                              </div> 

                        </div>


                        <div className="col-3">
                          <div className="contain">
                          <h3>APIs</h3>
                          <div className="experience__content">
                                <article className='experience__details'>

                                  <BsPatchCheckFill className='experience__details-icon'/>
                                  <div>
                                    <h5>Rest</h5>
                                  <small className='text-light'>Experienced</small>
                                  </div>
                                </article>

                                <article className='experience__details'>
                                  <BsPatchCheckFill className='experience__details-icon' />
                                  <div> 
                                    <h5>Axios</h5>
                                  <small className='text-light'>Experienced</small>
                                  </div>
                                </article>

                                <article className='experience__details'>
                                  <BsPatchCheckFill className='experience__details-icon'/>
                                  <div>
                                    <h5>SOAP</h5>
                                  <small className='text-light'>Intermediate</small>
                                  </div>
                                </article>

                              </div>
                              </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="img" />
    </section>
  )
}
