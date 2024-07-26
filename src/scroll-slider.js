import './scroll-slider.css';
import './js/slider'
function ScrollCarousel() {
return (
<div className="ui-slider-main">
    <div class="ui-slider-left " id="fixed-div">
        <div class="ui-left-box-1" id="box-1">
            <div class="ui-slider-title">
                Build UI components and pages in isolation
            </div>
            <div class="ui-slider-content">
                Implement components and pages without needing to fuss with data, APIs, or business logic.
            </div>
            <div class="ui-text-blue">
                Why build UIs in isolation?
            </div>
        </div>
        <div class="ui-left-box-2" id="box-2">
            <div class="ui-slider-title">

                Mock hard-to-reach edge cases as stories
            </div>
            <div class="ui-slider-content">
                Render components in key states that are tricky to reproduce in an app. Then save those states as
                stories to revisit during development, testing, and QA.
            </div>
            <div class="ui-text-blue">
                How to Write a story
            </div>
        </div>
        <div class="ui-left-box-3" id="box-3">
            <div class="ui-slider-title">
                Supercharge your workflow with addons </div>
            <div class="ui-slider-content">
                Addons extend and customize your UI development workflow. There are hundreds of addons that help you
                build UI faster, document component libraries, and integrate with other tools.
            </div>
            <div class="ui-text-blue">
                Learn about addons
            </div>
        </div>
        <div class="ui-left-box-4" id="box-4">
            <div class="ui-slider-title">
                Drop the finished UI components into your app </div>
            <div class="ui-slider-content">
                Once you finish developing UI components in isolation, drop them into your app. You’ll have confidence that the components are hardened to support every possible edge case.
            </div>
            <div class="ui-text-blue">
                Why build UIs in isolation?

            </div>
        </div>
    </div>
    <div class="ui-slider-right" id='scroll-div'>
        <div class="frame-img" id='frame-img'>
            <div class="bg-img" id='bg-img'>
                <div class="compress" id="compress">
                    <img src={require('./images/img-1.png')} alt="" class="frame-1" id="frame-1"></img>
                    <img src={require('./images/img-2.png')} alt="" class="frame-2" id="frame-2"></img>
                    <img src={require('./images/img-3.png')} alt="" class="frame-3" id="frame-3"></img>
                    <img src={require('./images/frame-4.png')} alt="" class="frame-4" id="frame-4"></img>
                </div>
                <div class="addons" id="addons">
                    <img src={require('./images/addons-1.png')} alt="" id="addon-1"></img>
                    <img src={require('./images/addons-2.png')} alt="" id="addon-2"></img>
                    <img src={require('./images/addons-3.png')} alt="" id="addon-3"></img>
                    <img src={require('./images/addons-4.png')} alt="" id="addon-4"></img>
                </div>
                <div class="range-img" id="range-move">
                    <img src={require('./images/range.png')} alt="" id="range"></img>
                </div>
            </div>
            <div class="develop-code-img " id="vs-code">
                <img src={require('./images/vscode.png')} alt="" id="code-1"></img>
                <img src={require('./images/app.png')} alt="" class="code-2" id="app"></img>
            </div>
        </div>
    </div>
</div>
);
}

export default ScrollCarousel;