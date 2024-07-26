import './developer.css';
import React from "react";
import Slider from "react-slick";
function Developer() {
const settings = {
dots: false,
infinite: false,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
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
const settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 3,
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
    <div class="developer-main" id='dev'>
        <div class="test-title-main" id='test'>
            <div class="test-title-left">
                <h2>Made for frontend developers</h2>
            </div>
            <div class="test-title-right">
                <div>
                    The top frontend engineering teams rely on Storybook to ship world-changing
                    products. Join our open source community to learn new techniques and get support.
                </div>
                <div class="dev-right-flex">
                    <div class="dev-right-btn">
                        <button>Get involved</button>
                    </div>
                    <div class="dev-community">
                        <div class="community-item phone-none">
                            <img src={require('../images/lazy-1.jpg')} alt=""></img>

                        </div>
                        <div class="community-item phone-none">
                            <img src={require('../images/lazy-2.jpg')} alt=""></img>
                        </div>
                        <div class="community-item">
                            <img src={require('../images/lazy-3.jpg')} alt=""></img>
                        </div>
                        <div class="community-item">
                            <img src={require('../images/lazy-4.jpg')} alt=""></img>
                        </div>
                        <div class="community-item">
                            <img src={require('../images/lazy-5.jpg')} alt=""></img>
                        </div>
                        <div class="community-item">
                            <img src={require('../images/lazy-6.jpg')} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="community-slider">
            <div className="slider-container">
                <Slider {...settings}>
                    <div class="dev-img">
                        <img src={require('../images/dev-1.jpg')} alt=""></img>
                        <div class="slider-title">
                            <span><img src={require('../images/monday.png')} alt=""></img></span>
                            <span>Monday.com</span>
                        </div>
                    </div>
                    <div class="dev-img">
                        <img src={require('../images/dev-2.jpg')} alt=""></img>
                        <div class="slider-title">
                            <span><img src={require('../images/microsoft.png')} alt=""></img></span>
                            <span>Microsoft</span>
                        </div>
                    </div>
                    <div class="dev-img">
                        <img src={require('../images/dev-3.jpg')} alt=""></img>
                        <div class="slider-title">
                            <span><img src={require('../images/d2.png')} alt=""></img></span>
                            <span>D2IQ</span>
                        </div>
                    </div>
                    <div class="dev-img">
                        <img src={require('../images/dev-4.jpg')} alt=""></img>
                        <div class="slider-title">
                            <span><img src={require('../images/drei.png')} alt=""></img></span>
                            <span>Drei</span>
                        </div>
                    </div>
                    <div class="dev-img">
                        <img src={require('../images/dev-5.jpg')} alt=""></img>
                        <div class="slider-title">
                            <span><img src={require('../images/shopify.png')} alt=""></img></span>
                            <span>Shopify</span>
                        </div>
                    </div>
                    <div class="dev-img">
                        <img src={require('../images/dev-6.jpg')} alt=""></img>
                        <div class="slider-title">
                            <span><img src={require('../images/kick.png')} alt=""></img></span>
                            <span>KickstartDS</span>
                        </div>
                    </div>
                    <div class="dev-img">
                        <img src={require('../images/dev-7.jpg')} alt=""></img>
                        <div class="slider-title">
                            <span><img src={require('../images/grommet.png')} alt=""></img></span>
                            <span>Grommet</span>
                        </div>
                    </div>
                    <div class="dev-img">
                        <img src={require('../images/dev-8.jpg')} alt=""></img>
                        <div class="slider-title">
                            <span><img src={require('../images/jstor.png')} alt=""></img></span>
                            <span>JSTOR</span>
                        </div>
                    </div>
                </Slider>
            </div>

        </div>
        <div class="brand-slider">
            <div className="slider-container">
                <Slider {...settings1}>
                    <div>
                        <img src={require("../images/brand-1.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../images/brand-2.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../images/brand-3.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../images/brand-4.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../images/brand-5.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../images/brand-6.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../images/brand-7.png")} alt="" />
                    </div>
                    
                </Slider>
            </div>



        </div>
    </div>
</>
);
}

export default Developer;