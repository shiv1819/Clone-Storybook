import './share.css';
import '../js/slider';

function Share() {
function codeChanger1() {


let x = 0;
x++;

if (x > 1) {
x--;
}
if (x == 1) {
document.getElementById('codePotion1').style.display = "block";
document.getElementById('codePotion2').style.display = "none";
document.getElementById('codePotion3').style.display = "none";
document.getElementById('codePotion4').style.display = "none";
}
}

function codeChanger2() {

let x = 0;
x++;

if (x > 1) {
x--;
}
if (x == 1) {
document.getElementById('codePotion1').style.display = "none";
document.getElementById('codePotion2').style.display = "block";
document.getElementById('codePotion3').style.display = "none";
document.getElementById('codePotion4').style.display = "none";
}
}

function codeChanger3() {

let x = 0;
x++;

if (x > 1) {
x--;
}
if (x == 1) {
document.getElementById('codePotion1').style.display = "none";
document.getElementById('codePotion2').style.display = "none";
document.getElementById('codePotion3').style.display = "block";
document.getElementById('codePotion4').style.display = "none";
console.log(x);
}
}

function codeChanger4() {

let x = 0;
x++;

if (x > 1) {
x--;
}
if (x == 1) {
document.getElementById('codePotion1').style.display = "none";
document.getElementById('codePotion2').style.display = "none";
document.getElementById('codePotion3').style.display = "none";
document.getElementById('codePotion4').style.display = "block";
}
}
return (
<>
    <div class="share-main" id='share'>
        <div class="share-title-main">
            <div class="share-title-left">
                <h2>Share how the UI actually works</h2>
            </div>
            <div class="share-title-right">Stories show how UIs actually work not just a static design of how they're
                supposed to work. That keeps everyone aligned on what’s currently in production.</div>
        </div>
        <div class="frequency-main">
            <div class="frequency-left">
                <div class="frequency-title">
                    Publish Storybook to get sign off from teammates
                </div>
                <div class="frequency-content">
                    Publish Storybook as a website for stakeholders to reference. Your team can check that the UI looks
                    right without touching code.
                </div>
                <div class="frequency-text-blue">
                    <span>Publish Storybook</span><span class="svg-blue"><svg viewBox="0 0 14 14" width="14px"
                            height="14px" class="css-zmb90n e82dnwa0">
                            <path
                                d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z">
                            </path>
                        </svg></span>
                </div>
            </div>
            <div class="frequency-right">
                <div class="frequency-graph" id='graph'>
                    <img src={require('../images/frequency-graph.png')} alt=""></img>
                </div>
                <div class="frequency-bg">
                    <img src={require('../images/frequency.png')} alt=""></img>
                    <div class="avatar-design-main-1">
                        <div class="avatar-design-1"> </div>
                        <div class="avatar-design-2"></div>
                        <div class="avatar-img">
                            <img src={require('../images/avatar-1.png')} alt=""></img>
                        </div>
                    </div>
                    <div class="avatar-design-main-2">
                        <div class="avatar-design-1 pink-bg-1"> </div>
                        <div class="avatar-design-2 pink-bg-2"></div>
                        <div class="avatar-img">
                            <img src={require('../images/avatar-2.png')} alt=""></img>
                        </div>
                    </div>
                    <div class="avatar-design-main-3">
                        <div class="avatar-design-1 yellow-bg-1"> </div>
                        <div class="avatar-design-2 yellow-bg-2"></div>
                        <div class="avatar-img">
                            <img src={require('../images/avatar-3.png')} alt=""></img>
                        </div>
                    </div>
                    <div class="avatar-design-main-4">
                        <div class="avatar-design-1 purple-bg-1"> </div>
                        <div class="avatar-design-2 purple-bg-2"></div>
                        <div class="avatar-img">
                            <img src={require('../images/avatar-4.png')} alt=""></img>
                        </div>
                    </div>
                    <div class="cursor">
                        <img src={require('../images/arrow.png')} alt=""></img>
                    </div>
                    <div class="pointer">
                        <img src={require('../images/pointer.png')} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
        <div class="time-frame">
            <div class="time-frame-left">
                <div class="time-frame-title">
                    Embed stories in wikis, Markdown, and Figma
                </div>
                <div class="time-frame-content">
                    Embed stories to showcase your work to teammates and the developer community. Works with the oEmbed
                    standard.
                </div>
                <div class="time-frame-blue">
                    <span>Embed stories</span><span class="svg-blue"><svg viewBox="0 0 14 14" width="14px" height="14px"
                            class="css-zmb90n e82dnwa0">
                            <path
                                d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z">
                            </path>
                        </svg></span>
                </div>
            </div>
            <div class="time-frame-right">
                <img src={require('../images/next.png')} alt=""></img>
                <div class="time-frame-icon-main">
                    <div class="time-icon">
                        <img src={require('../images/next-js.png')} alt=""></img>
                    </div>
                    <div class="time-icon">
                        <img src={require('../images/figma.png')} alt=""></img>
                    </div>
                    <div class="time-icon">
                        <img src={require('../images/notion.png')} alt=""></img>
                    </div>
                    <div class="time-icon">
                        <img src={require('../images/medium.png')} alt=""></img>
                    </div>

                    <div class="time-icon border-none">
                        + and more
                    </div>
                </div>
            </div>
        </div>
        <div class="share-code">
            <div class="share-code-left">
                <div class="time-frame-title">
                    <span class="import-bg">import</span> stories into other JavaScript tooling
                </div>
                <div class="time-frame-content">
                    Stories are a portable standard based on ES6 modules. Write stories once and import them into any
                    JavaScript library.
                </div>
                <div class="time-frame-blue">
                    <span>Reuse stories in tests and libraries</span><span class="svg-blue"><svg viewBox="0 0 14 14"
                            width="14px" height="14px" class="css-zmb90n e82dnwa0">
                            <path
                                d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z">
                            </path>
                        </svg></span>
                </div>
            </div>
            <div class="share-code-right">

                <div class='codeBody'>
                    <div className='contentRightImg codePotion hide' id='codePotion1'>
                        <div className='codePotionHead'>
                            <div className='dot1'></div>
                            <div className='dot2'></div>
                            <div className='dot3'></div>
                            <div className='codeTitle'>UserCard.test.js</div>
                        </div>
                        <div className='codePotionContent'>
                            <div className='codeBody'>
                                <div className='codeBodyPotion'>
                                    <p><span className='pinkText'>import</span> React <span
                                            className='pinkText'>from</span> <span className='greenText'>'react'</span>;
                                    </p>
                                    <p><span className='pinkText'>import</span> <span>{'{ render, unmountComponentAtNode}'}</span> <span className='pinkText'>from</span> <span
                                            className='greenText'>'react-dom'</span>;</p>
                                    <p><span className='pinkText'>import</span> <span>{'{ act }'}</span> <span
                                            className='pinkText'>from</span> <span
                                            className='greenText'>'react-dom/test-utils'</span>;</p>
                                    <p><span className='pinkText'>import</span> <span>{'{ composeStories }'}</span>
                                        <span className='pinkText'>from</span> <span
                                            className='greenText'>'@storybook/testing-react'</span>;
                                    </p>
                                    <p><span className='pinkText'>import</span> <span className='blueText'>*</span>
                                        <span className='pinkText'>as</span> stories <span
                                            className='pinkText'>from</span> <span
                                            className='greenText'>'./UserCard.stories'</span>;
                                    </p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p><span className='grayText'>// Compile the "MissingProfileImage" story</span></p>
                                    <p><span className='pinkText'>const</span> <span>{'{ MissingProfileImage }'}</span>
                                        <span className='greenText'>=</span> <span
                                            className='orangeText'>composeStories</span><span>{'(stories)'}</span>;
                                    </p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p><span className='pinkText'>let</span> container <span
                                            className='pinkText'>null</span>;</p>
                                    <p><span className='orangeText'>beforeEach</span><span>{'(()'}</span> <span
                                            className='blueText'>{'=>'}</span> <span>{'{'}</span></p>
                                    <p className='marginLeft'>container <span className='blueText'>=</span>
                                        document.<span
                                            className='orangeText'>createElement</span><span>{'('}</span><span
                                            className='greenText'>'div'</span><span>{')'}</span>;</p>
                                    <p className='marginLeft'>document.body.<span
                                            className='orangeText'>appendChild</span><span>{'(container)'}</span>;</p>
                                    <p><span>{'})'}</span>;</p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p><span className='orangeText'>afterEach</span><span>{'(()'}</span> <span
                                            className='blueText'>{'=>'}</span> <span>{'{'}</span></p>
                                    <p className='marginLeft'><span
                                            className='orangeText'>unmountComponentAtNode</span><span>{'(container)'}</span>;
                                    </p>
                                    <p className='marginLeft'>container.<span
                                            className='orangeText'>remove</span><span>{'()'}</span>;</p>
                                    <p className='marginLeft'>container <span className='blueText'>=</span> <span
                                            className='pinkText'>null</span>;</p>
                                    <p><span>{'})'}</span>;</p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p><span className='orangeText'>it</span><span>{'('}</span><span
                                            className='greenText'>'renders a fallback profile image'</span>,
                                        <span>{'()'}</span> <span className='blueText'>{'=>'}</span> <span>{'{'}</span>
                                    </p>
                                    <p className='marginLeft'><span className='grayText'>// Render the story</span></p>
                                    <p className='marginLeft'><span
                                            className='orangeText'>act</span><span>{'(()'}</span> <span
                                            className='blueText'>{'=>'}</span> <span>{'{'}</span></p>
                                    <p className='marginLeftTwo'><span className='orangeText'>render</span><span>{'(<'}</span><span className='yellowText'>MissingProfileImage</span>
                                                <span>{'/>'}</span>, container<span>{')'}</span>;</p>
                                    <p className='marginLeft'><span>{'})'}</span>;</p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p className='marginLeft'><span className='grayText'>// Verify the DOM
                                            structure</span></p>
                                    <p className='marginLeft'><span
                                            className='orangeText'>expect</span><span>{'('}</span>container.<span
                                            className='orangeText'>querySelector</span><span>{'('}</span><span
                                            className='greenText'>'img'</span><span>{')'}</span>.<span
                                            className='orangeText'>getAttribute</span><span>{'('}</span><span
                                            className='greenText'>'src'</span><span>{'))'}</span></p>
                                    <p className='marginLeftTwo'>.<span
                                            className='orangeText'>toEqual</span><span>{'('}</span></p>
                                    <p className='marginLeftThree'><span
                                            className='greenText'>'/images/user-fallback.png'</span></p>
                                    <p className='marginLeftTwo'><span>{')'}</span>;</p>
                                    <p><span>{'})'}</span>;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contentRightImg codePotion hide' id='codePotion2'>
                        <div className='codePotionHead'>
                            <div className='dot1'></div>
                            <div className='dot2'></div>
                            <div className='dot3'></div>
                            <div className='codeTitle'>RangePicker.test.js</div>
                        </div>
                        <div className='codePotionContent'>
                            <div className='codeBody'>
                                <div className='codeBodyPotion'>
                                    <p><span className='pinkText'>import</span> <span>{'{ screen, render }'}</span>
                                        <span className='pinkText'>from</span> <span
                                            className='greenText'>'@testing-library/react'</span>;
                                    </p>
                                    <p><span className='pinkText'>import</span> <span>{'{ composeStories }'}</span>
                                        <span className='pinkText'>from</span> <span
                                            className='greenText'>'@storybook/testing-react'</span>;
                                    </p>
                                    <p><span className='pinkText'>import</span> <span>{'{ drag }'}</span> <span
                                            className='pinkText'>from</span> <span
                                            className='greenText'>'./test-utils'</span>;</p>
                                    <p><span className='pinkText'>import</span> <span className='blueText'>*</span>
                                        <span className='pinkText'>as</span> stories <span
                                            className='pinkText'>from</span> <span
                                            className='greenText'>'./RangePicker.stories'</span>;
                                    </p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p><span className='grayText'>// Compile the "DefaultTimeFrame" story</span></p>
                                    <p><span className='pinkText'>const</span> <span>{'{ DefaultTimeFrame }'}</span>
                                        <span className='blueText'>=</span> <span
                                            className='orangeText'>composeStories</span><span>{'(stories)'}</span>;
                                    </p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p><span className='orangeText'>it</span><span>{'('}</span><span
                                            className='greenText'>'can adjust time range using sliders'</span>, <span
                                            className='pinkText'>async</span> <span>{'() => {'}</span></p>
                                    <p className='marginLeft'><span className='grayText'>// Render the story</span></p>
                                    <p className='marginLeft'><span className='orangeText'>render</span><span>{'(<'}</span><span className='yellowText'>DefaultTimeFrame</span>
                                                <span>{'/>)'}</span>;</p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p className='marginLeft'><span className='grayText'> // Execute the drag
                                            action</span></p>
                                    <p className='marginLeft'><span className='pinkText'>const</span> <span>{'['}</span>
                                    </p>
                                    <p className='marginLeftTwo'>leftThumb,</p>
                                    <p className='marginLeftTwo'>rightThumb,</p>
                                    <p className='marginLeft'><span>{']'}</span> <span className='blueText'>=</span>
                                        <span className='pinkText'>await</span> screen.<span
                                            className='orangeText'>findAllByRole</span><span>{'('}</span><span
                                            className='greenText'>'slider'<span>{')'}</span>;</span>
                                    </p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p className='marginLeft'><span className='pinkText'>await</span> <span
                                            className='orangeText'>drag</span><span>{'('}</span>leftThumb,
                                        <span>{'{'}</span> delta<span className='blueText'>:</span> <span>{'{'}</span>
                                        x<span className='blueText'>:</span> <span className='blueText'>-</span><span
                                            className='orangeText'>40</span>, y<span className='blueText'>:</span> <span
                                            className='orangeText'>0</span> <span>{'} })'}</span>;
                                    </p>
                                    <p className='marginLeft'><span className='pinkText'>await</span> <span
                                            className='orangeText'>drag</span><span>{'('}</span>rightThumb,
                                        <span>{'{'}</span> delta<span className='blueText'>:</span> <span>{'{'}</span>
                                        x<span className='blueText'>:</span> <span className='orangeText'>60</span>,
                                        y<span className='blueText'>:</span> <span className='orangeText'>0</span>
                                        <span>{'} })'}</span>;
                                    </p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p className='marginLeft'><span className='grayText'>// Verify the time range is
                                            updated</span></p>
                                    <p className='marginLeft'><span
                                            className='orangeText'>expect</span><span>{'('}</span>leftThumb.ariaValueNow<span>{')'}</span>.<span
                                            className='orangeText'>toBe</span><span>{'('}</span><span
                                            className='orangeText'>15</span><span>{')'}</span>;</p>
                                    <p className='marginLeft'><span
                                            className='orangeText'>expect</span><span>{'('}</span>rightThumb.ariaValueNow<span>{')'}</span>.<span
                                            className='orangeText'>toBe</span><span>{'('}</span><span
                                            className='orangeText'>90</span><span>{')'}</span>;</p>
                                    <p><span>{'})'}</span>;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contentRightImg codePotion hide' id='codePotion3'>
                        <div className='codePotionHead'>
                            <div className='dot1'></div>
                            <div className='dot2'></div>
                            <div className='dot3'></div>
                            <div className='codeTitle'>SearchInput.spec.js</div>
                        </div>
                        <div className='codePotionContent'>
                            <div className='codeBody'>
                                <div className='codeBodyPotion'>
                                    <p><span className='pinkText'>import</span> <span className='blueText'>*</span>
                                        <span className='pinkText'>as</span> react <span
                                            className='pinkText'>from</span> <span className='greenText'>'react'</span>;
                                    </p>
                                    <p><span className='pinkText'>import</span> <span>{'{ composeStories }'}</span>
                                        <span className='pinkText'>from</span> <span
                                            className='greenText'>'@storybook/testing-react'</span>;
                                    </p>
                                    <p><span className='pinkText'>import</span> <span>{'{ mount }'}</span> <span
                                            className='pinkText'>from</span> <span
                                            className='greenText'>'@cypress/react'</span>;</p>
                                    <p><span className='pinkText'>import</span> <span className='blueText'>*</span>
                                        <span className='pinkText'>as</span> stories <span
                                            className='pinkText'>from</span> <span
                                            className='greenText'>'./SearchInput.stories'</span>;
                                    </p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p><span className='grayText'>// Compile the "Primary" story</span></p>
                                    <p><span className='pinkText'>const</span> <span>{'{ Primary }'}</span> <span
                                            className='blueText'>=</span> <span
                                            className='orangeText'>composeStories</span><span>{'(stories)'}</span>;</p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p><span className='orangeText'>it</span><span>{'('}</span><span
                                            className='greenText'>'Should empty the search field'</span>, <span>{'() =>{'}</span></p>
                                    <p className='marginLeft'><span className='grayText'>// Render the story</span></p>
                                    <p className='marginLeft'><span className='orangeText'>mount</span><span>{'(<'}</span><span className='yellowText'>Primary</span> <span>{'/>)'}</span>;
                                    </p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p className='marginLeft'><span className='grayText'> // Run the test</span></p>
                                    <p className='marginLeft'>cy.<span
                                            className='orangeText'>get</span><span>{'('}</span><span
                                            className='greenText'>'.clear'</span>.<span
                                            className='orangeText'>click</span><span>{'()'}</span>;</p>
                                    <p className='marginLeft'>cy.<span
                                            className='orangeText'>get</span><span>{'('}</span><span
                                            className='greenText'>'input'</span>.<span
                                            className='orangeText'>then</span><span>{'(('}</span>input<span>{')'}</span>
                                        <span className='blueText'>{'=>'}</span> <span>{'{'}</span>;
                                    </p>
                                    <p className='marginLeftTwo'><span
                                            className='orangeText'>expect</span><span>{'('}</span>input.<span
                                            className='orangeText'>val</span><span>{'())'}</span>.to.be.empty;</p>
                                    <p className='marginLeft'><span>{'})'}</span>;</p>
                                    <p><span>{'})'}</span>;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contentRightImg codePotion show' id='codePotion4'>
                        <div className='codePotionHead'>
                            <div className='dot1'></div>
                            <div className='dot2'></div>
                            <div className='dot3'></div>
                            <div className='codeTitle'>delete-customer.spec.js</div>
                        </div>
                        <div className='codePotionContent'>
                            <div className='codeBody'>
                                <div className='codeBodyPotion'>
                                    <p><span className='pinkText'>import</span> <span>{'{'}</span></p>
                                    <p className='marginLeft'>render,</p>
                                    <p className='marginLeft'>screen,</p>
                                    <p className='marginLeft'>fireEvent,</p>
                                    <p><span>{'}'}</span> <span className='pinkText'>from</span> <span
                                            className='greenText'>'@testing-library/angular'</span>;</p>
                                    <p><span className='pinkText'>import</span> <span>{'{'}</span></p>
                                    <p className='marginLeft'>composeStory,</p>
                                    <p className='marginLeft'>createMountableStoryComponent,</p>
                                    <p><span>{'}'}</span> <span className='pinkText'>from</span> <span
                                            className='greenText'>'@storybook/testing-angular'</span>;</p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p><span className='pinkText'>import</span> Meta, <span>{'{'}</span></p>
                                    <p className='marginLeft'>Default <span className='pinkText'>as</span> DefaultStory,
                                    </p>
                                    <p><span>{'}'}</span> <span className='pinkText'>from</span> <span
                                            className='greenText'>'./delete-customer.stories'</span>;</p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p><span className='grayText'>// Compile the "Default" story</span></p>
                                    <p><span className='pinkText'>const</span> Default <span
                                            className='blueText'>=</span> <span
                                            className='orangetext'>composeStory</span><span>{'(DefaultStory, Meta)'}</span>;</p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p><span className='orangeText'>Describe</span><span>{'('}</span><span
                                            className='greenText'>'Delete Customer Dialog'</span>, <span>{'()'}</span>
                                        <span className='blueText'>{'=>'}</span> <span>{'{'}</span>
                                    </p>
                                    <p className='marginLeft'><span
                                            className='orangeText'>it</span><span>{'('}</span><span
                                            className='greenText'>'should open a dialog'</span>, <span
                                            className='pinkText'>async</span> <span>{'()'}</span> <span
                                            className='blueText'>{'=>'}</span> <span>{'{'}</span></p>
                                    <p className='marginLeftTwo'><span className='pinkText'>const</span>
                                        <span>{'{'}</span> component, ngModule <span>{'}'}</span> <span
                                            className='blueText'>=</span> <span
                                            className='orangeText'>createMountableStoryComponent</span><span>{'('}</span>
                                    </p>
                                    <p className='marginLeftThree'><span
                                            className='orangeText'>Default</span><span>{'({}, {}'}</span> <span
                                            className='pinkText'>as</span> any<span>{')'}</span></p>
                                    <p className='marginLeftTwo'><span>{')'}</span>;</p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p className='marginLeftTwo'><span className='grayText'>// Render the story</span>
                                    </p>
                                    <p className='marginLeftTwo'><span className='pinkText'>await</span> <span
                                            className='orangeText'>render</span><span>{'('}</span>component,
                                        <span>{'{'}</span> imports<span className='blueText'>:</span> <span>{'[ngModule]})'}</span>;
                                    </p>
                                </div>
                                <div className='codeBodyPotion'>
                                    <p className='marginLeftTwo'><span className='grayText'>// Run the test</span></p>
                                    <p className='marginLeftTwo'><span className='pinkText'>await</span> fireEvent.<span
                                            className='orangeText'>click</span> <span>{'('}</span></p>
                                    <p className='marginLeftThree'>screen.<span
                                            className='orangeText'>getBtRole</span><span>{'('}</span><span
                                            className='greenText'>'button'</span>, <span>{'{'}</span> name<span
                                            className='blueText'>:</span><span className='greenText'>'Delete
                                            Customer'</span> <span>{'})'}</span></p>
                                    <p className='marginLeftTwo'><span>{')'}</span>;</p>
                                    <p className='marginLeftTwo'><span
                                            className='orangeText'>expect</span><span>{'('}</span></p>
                                    <p className='marginLeftThree'><span className='pinkText'>await</span> screen.<span
                                            className='orangeText'>findByText</span><span>{'('}</span><span
                                            className='greenText'>'Are you sure?'</span><span>{')'}</span></p>
                                    <p className='marginLeftTwo'><span>{')'}</span>.<span
                                            className='orangeText'>toBeInTheDocument</span><span>{'()'}</span>;</p>
                                    <p className='marginLeft'><span>{'})'}</span>;</p>
                                    <p><span>{'})'}</span>;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="time-frame-icon-main">
                    <div class="time-icon">
                        <button id="afterImg1" onClick={codeChanger1}>
                            <img src={require('../images/jest.png')} alt=""></img>
                        </button>
                    </div>
                    <div class="time-icon">
                        <button id="afterImg2" onClick={codeChanger2}>
                            <img src={require('../images/testing-lib.png')} alt=""></img>
                        </button>
                    </div>
                    <div class="time-icon">
                        <button id="afterImg3" onClick={codeChanger3}>
                            <img src={require('../images/cypress.png')} alt=""></img>
                        </button>
                    </div>
                    <div class="time-icon">
                        <button id="afterImg4" onClick={codeChanger4}>
                            <img src={require('../images/jasmine.png')} alt=""></img>
                        </button>
                    </div>

                    <div class="time-icon border-none">
                        + and more
                    </div>
                </div>
            </div>

        </div>
        <div class="tools-para-main">
            <div class="tools-text">
                “Storybook is my go-to when starting a new design system. It makes getting something in place quick and
                easy for both design and engineering.”
            </div>
            <div class="tools-author-flex">
                <div class="author-left">
                    <div class="author-img">
                        <img src={require('../images/share-author.jpg')} alt=""></img>
                    </div>
                    <div class="author-content-main">
                        <div class="author-title">
                            Sarrah Vesselov</div>
                        <div class="author-sub-title">Author of Building Design Systems</div>
                    </div>
                </div>
                <div class="author-rightn air">
                    <img src={require('../images/cloud-bees.png')} alt=""></img>
                </div>
            </div>
        </div>
    </div>
</>
);
}

export default Share;