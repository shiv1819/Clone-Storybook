import './community.css';
function Community() {
return (
<div class="community-main">
    <div class="community-video">
        <div class="community-video-left">

        </div>
        <div class="community-video-right">
            <div class="video-main">
                <video muted aria-controls="video" autoplay="true" loop>
                    <source src={require('../images/video-1.mp4')} type="video/mp4" />
                </video>
            </div>
            <div class="video-main">
                <video muted aria-controls="video" autoplay="true" loop>
                    <source src={require('../images/video-2.mp4')} type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
    <div class="social-media">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-12">
                    <div class="social-media-main">
                        <div class="social-media-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                    font-size="none" text-anchor="none">
                                    <g transform="scale(10.66667,10.66667)">
                                        <path
                                            d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="social-media-title">
                            Join 2,232+ contributors building the future of UI development.

                        </div>
                        <div class="social-media-btn">
                            Star on git hub

                        </div>
                        <div class="followers">
                            <div class="followers-bold">
                                2,232+
                            </div>
                            <div class="follower-text">
                                Contributors
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="social-media-main">

                        <div class="social-media-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
                                <g fill="#5a65ea" fill-rule="nonzero" stroke="none" stroke-width="1"
                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                    font-size="none" text-anchor="none">
                                    <g transform="scale(5.33333,5.33333)">
                                        <path
                                            d="M39.248,10.177c-2.804,-1.287 -5.812,-2.235 -8.956,-2.778c-0.057,-0.01 -0.114,0.016 -0.144,0.068c-0.387,0.688 -0.815,1.585 -1.115,2.291c-3.382,-0.506 -6.747,-0.506 -10.059,0c-0.3,-0.721 -0.744,-1.603 -1.133,-2.291c-0.03,-0.051 -0.087,-0.077 -0.144,-0.068c-3.143,0.541 -6.15,1.489 -8.956,2.778c-0.024,0.01 -0.045,0.028 -0.059,0.051c-5.704,8.522 -7.267,16.835 -6.5,25.044c0.003,0.04 0.026,0.079 0.057,0.103c3.763,2.764 7.409,4.442 10.987,5.554c0.057,0.017 0.118,-0.003 0.154,-0.051c0.846,-1.156 1.601,-2.374 2.248,-3.656c0.038,-0.075 0.002,-0.164 -0.076,-0.194c-1.197,-0.454 -2.336,-1.007 -3.432,-1.636c-0.087,-0.051 -0.094,-0.175 -0.014,-0.234c0.231,-0.173 0.461,-0.353 0.682,-0.534c0.04,-0.033 0.095,-0.04 0.142,-0.019c7.201,3.288 14.997,3.288 22.113,0c0.047,-0.023 0.102,-0.016 0.144,0.017c0.22,0.182 0.451,0.363 0.683,0.536c0.08,0.059 0.075,0.183 -0.012,0.234c-1.096,0.641 -2.236,1.182 -3.434,1.634c-0.078,0.03 -0.113,0.12 -0.075,0.196c0.661,1.28 1.415,2.498 2.246,3.654c0.035,0.049 0.097,0.07 0.154,0.052c3.595,-1.112 7.241,-2.79 11.004,-5.554c0.033,-0.024 0.054,-0.061 0.057,-0.101c0.917,-9.491 -1.537,-17.735 -6.505,-25.044c-0.012,-0.024 -0.033,-0.042 -0.057,-0.052zM16.703,30.273c-2.168,0 -3.954,-1.99 -3.954,-4.435c0,-2.445 1.752,-4.435 3.954,-4.435c2.22,0 3.989,2.008 3.954,4.435c0.001,2.444 -1.751,4.435 -3.954,4.435zM31.324,30.273c-2.168,0 -3.954,-1.99 -3.954,-4.435c0,-2.445 1.752,-4.435 3.954,-4.435c2.22,0 3.989,2.008 3.954,4.435c0,2.444 -1.734,4.435 -3.954,4.435z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="social-media-title">
                            Chat with 20,600+ frontend developers.

                        </div>
                        <div class="social-media-btn">
                            join discord server

                        </div>
                        <div class="followers">
                            <div class="followers-bold">
                                20,600+
                            </div>
                            <div class="follower-text">
                                Server members
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="social-media-main">
                        <div class="social-media-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                viewBox="0,0,256,256">
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1"
                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                                    font-size="none" text-anchor="none">
                                    <g transform="scale(8.53333,8.53333)">
                                        <path
                                            d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="social-media-title">
                            Get the latest news and updates from Storybook maintainers.
                        </div>
                        <div class="social-media-btn">
                            follow on x
                        </div>
                        <div class="followers">
                            <div class="followers-bold">
                                18,350+
                            </div>
                            <div class="follower-text">
                                Followers
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="social-media-main">
                        <div class="social-media-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                                <path fill="#FF3D00"
                                    d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z">
                                </path>
                                <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                            </svg>
                        </div>
                        <div class="social-media-title">
                            Watch tutorials, feature previews, and interviews.
                        </div>
                        <div class="social-media-btn">
                            watch on youTube
                        </div>
                        <div class="followers">
                            <div class="followers-bold">
                                7,000+
                            </div>
                            <div class="follower-text">
                                Subscribers
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
);
}

export default Community;