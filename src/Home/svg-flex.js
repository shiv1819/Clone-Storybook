import './svg-flex.css';
function SvgFlex() {
    return (
        <div class="logo-flex">
            <div class="logo">
                <img src={require('../images/logo-vs.png')} alt=""></img>
            </div>
            <div class="logo">
                <img src={require('../images/logo-eu.png')} alt=""></img>
            </div>
            <div class="logo">
                <img src={require('../images/logo-github.png')} alt=""></img>
            </div>
            <div class="logo">
                <img src={require('../images/logo-airbnb.png')} alt=""></img>
            </div>
            <div class="logo">
                <img src={require('../images/logo-mozilla.png')} alt=""></img>
            </div>
            <div class="logo">
                <img src={require('../images/logo-monday.png')} alt=""></img>
            </div>
            <div class="logo">
                <img src={require('../images/logo-bbc.png')} alt=""></img>
            </div>
        </div>
    );
}

export default SvgFlex;