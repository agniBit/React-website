import React, {useState,useEffect,Component} from 'react';
import './Carousel.css'
function Carousel_(){
    const [isMobile, setisMobile] = useState(false);

    const checkView = () => {
        if (window.innerWidth <= 480) {
          setisMobile(true);
        } else {
          setisMobile(false);
        }
      };
    
      useEffect(() => {
        checkView();
      }, []);

    window.addEventListener('resize',checkView);

    return(
        <div id="demo" className="carousel slide slide1 cards_container" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
            </ul>

            <div className="carousel-inner">
              <div className="carousel-item active">
                  <img className="mx-auto d-block img-fluid" src={ isMobile ? 'images/banner-mobile4.jpg':'images/automotive-batteries-banner01.jpg'} />
                </div>
                <div className="carousel-item">
                  <img className="mx-auto d-block img-fluid" src={ isMobile ? 'images/banner-mobile5.jpg':'images/automotive-batteries-banner02.jpg'} />
                </div>
                <div className="carousel-item">
                  <img className="mx-auto d-block img-fluid" src={ isMobile ? 'images/banner-mobile6.jpg':'images/automotive-batteries-banner03.jpg' } />
                </div>
                <div className="carousel-item">
                  <img className="mx-auto d-block img-fluid" src={ isMobile ? 'images/banner-mobile7.jpg':'images/automotive-batteries-banner01.jpg' } />
                </div>
            </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
                </a>
            
            </div>
    );
}

export default Carousel_;