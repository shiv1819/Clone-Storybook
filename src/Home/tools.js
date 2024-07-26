import './tools.css';

function Tools() {
return (
<>
    <div class="tools-main">
        <div class="tools-left">
            <div class="tools-title">
                Build UI components and pages in isolation
            </div>
            <div class="tools-content">
                Implement components and pages without needing to fuss with data, APIs, or business logic.
            </div>
            <div class="tools-blue">
                Why build UIs in isolation?
            </div>
        </div>
        <div class="tools-right">
            <img src={require('../images/tools.png')} alt=""></img>
        </div>
    </div>
    <div class="tools-para-main">
        <div class="tools-text">
            “Storybook is a powerful frontend workshop environment tool that allows teams to design, build, and organize
            UI
            components (and even full screens!) without getting tripped up over business logic and plumbing.”
        </div>
        <div class="tools-author-flex">
            <div class="author-left">
                <div class="author-img">
                    <img src={require('../images/author.png')} alt=""></img>
                </div>
                <div class="author-content-main">
                    <div class="author-title">Brad Frost</div>
                    <div class="author-sub-title">Author of Atomic Design</div>
                </div>
            </div>
            <div class="author-right">
                <img src={require('../images/circle.png')} alt=""></img>
            </div>
        </div>
    </div>
</>
);
}

export default Tools;