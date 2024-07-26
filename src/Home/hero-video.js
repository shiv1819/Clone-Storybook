import './hero-video.css';
function HeroVid() {
return (
<div class="hero-main">
    <video muted aria-controls="video" autoplay="true" loop>
        <source src={require('../images/vid.mp4')} type="video/mp4" />
    </video>
</div>
);
}

export default HeroVid;