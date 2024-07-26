import './automate-slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function AutomateSlider() {
const settings = {
className: "center",
centerMode: true,
infinite: true,
centerPadding: "0px",
slidesToShow: 7,
slidesToScroll: 1,
autoplay: true,
speed: 700,
autoplaySpeed: 2000,
cssEase: "ease",
pauseOnHover: false,
responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

};
return (
<>

    <div class="automate-slider-main">
        <div className="slider-container automate-slider">
            <Slider {...settings}>
                <div>
                    <div class="automate-img">
                        <img src={require('../images/automate-1.png')} alt=""></img>
                        <div class="scanner-1"></div>
                        <div class="scanner-2"></div>
                    </div>
                </div>
                <div>
                    <div class="automate-img">
                        <img src={require('../images/automate-2.png')} alt=""></img>
                        <div class="scanner-1"></div>
                        <div class="scanner-2"></div>
                    </div>
                </div>
                <div>
                    <div class="automate-img">
                        <img src={require('../images/automate-3.png')} alt=""></img>
                        <div class="scanner-1"></div>
                        <div class="scanner-2"></div>
                    </div>
                </div>
                <div>
                    <div class="automate-img">
                        <img src={require('../images/automate-4.png')} alt=""></img>
                        <div class="scanner-1"></div>
                        <div class="scanner-2"></div>
                    </div>
                </div>
                <div>
                    <div class="automate-img">
                        <img src={require('../images/automate-5.png')} alt=""></img>
                        <div class="scanner-1"></div>
                        <div class="scanner-2"></div>
                    </div>
                </div>
                <div>
                    <div class="automate-img">
                        <img src={require('../images/automate-6.png')} alt=""></img>
                        <div class="scanner-1"></div>
                        <div class="scanner-2"></div>
                    </div>
                </div>
                <div>
                    <div class="automate-img">
                        <img src={require('../images/slider-1.png')} alt=""></img>
                        <div class="scanner-1"></div>
                        <div class="scanner-2"></div>
                    </div>
                </div>
                <div>
                    <div class="automate-img">
                        <img src={require('../images/slider-2.png')} alt=""></img>
                        <div class="scanner-1"></div>
                        <div class="scanner-2"></div>
                    </div>
                </div>
                <div>
                    <div class="automate-img">
                        <img src={require('../images/slider-3.png')} alt=""></img>
                        <div class="scanner-1"></div>
                        <div class="scanner-2"></div>
                    </div>
                </div>
                <div>
                    <div class="automate-img">
                        <img src={require('../images/slider-4.png')} alt=""></img>
                        <div class="scanner-1"></div>
                        <div class="scanner-2"></div>
                    </div>
                </div>
                <div>
                    <div class="automate-img">
                        <img src={require('../images/slider-5.png')} alt=""></img>
                        <div class="scanner-1"></div>
                        <div class="scanner-2"></div>
                    </div>
                </div>
            </Slider>
        </div>
        <div class="scanner-main">
        </div>
    </div>
</>
);
}

export default AutomateSlider;