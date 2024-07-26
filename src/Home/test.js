import './test.css';

function Test() {
return (
<>
    <div class="test-title-main" id='test'>
        <div class="test-title-left">
            <h2>Test UIs with less effort and no flake</h2>
        </div>
        <div class="test-title-right">Stories capture the “known good” states of UI components. They’re a pragmatic,
            reproducible way to keep track of UI edge cases. Reuse stories to power automated tests.</div>
    </div>
    <div class="test-main">
        <div class="test-left">
            <video muted aria-controls="video" autoplay="true" loop>
                <source src={require('../images/test.mp4')} type="video/mp4" />
            </video>
        </div>
        <div class="test-right">
            <div class="test-right-item border-blue">
                <div class="test-right-img ">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img">
                        <g transform="translate(0 -1)" fill="none" fill-rule="evenodd">
                            <path
                                d="M34.896 15.796 20.407 31.1l-7.303-8.062a1.219 1.219 0 0 0-1.844 0 1.547 1.547 0 0 0 0 2.036l8.2 9.052c.279.31.613.45.947.45.334 0 .669-.14.923-.42l15.41-16.324c.51-.562.51-1.473 0-2.036a1.22 1.22 0 0 0-1.844 0Z"
                                fill="#FFF"></path>
                            <circle fill="#79C9FC" fill-rule="nonzero" cx="24" cy="24.976" r="24"></circle>
                            <path
                                d="M29.274 24.954a5.274 5.274 0 1 1-10.548 0 5.274 5.274 0 0 1 10.548 0Zm3.388 3.504c-1.348 1.148-2.712 2.054-4.054 2.694-1.58.752-3.13 1.132-4.608 1.132-1.48 0-3.03-.38-4.608-1.132-1.342-.64-2.706-1.546-4.054-2.694a27.136 27.136 0 0 1-3.416-3.506 27.2 27.2 0 0 1 3.416-3.506c1.348-1.146 2.712-2.052 4.054-2.692 1.58-.752 3.128-1.134 4.608-1.134 1.48 0 3.03.38 4.608 1.134 1.34.64 2.706 1.546 4.054 2.692a27.42 27.42 0 0 1 3.416 3.506 27.142 27.142 0 0 1-3.416 3.506Zm5.89-4.134c-.264-.37-6.542-9.048-14.552-9.048-8.012 0-14.288 8.68-14.552 9.048L9 24.952l.448.63c.264.37 6.54 9.046 14.552 9.046 8.01 0 14.288-8.676 14.552-9.046l.448-.63-.448-.628Z"
                                fill="#FFF" fill-rule="nonzero"></path>
                        </g>
                    </svg>
                </div>
                <div class="test-right-item-title">
                    <div class="test-right-bold">Spot Test</div>
                    <div class="test-right-text">Stories are tests you can debug in dev and QA.</div>
                </div>
            </div>
            <div class="test-right-item">
                <div class="test-right-img">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img">
                        <g fill="#37D5D3" fill-rule="evenodd" fill-opacity="0.9">
                            <path d="M8 4h16v20H4V8a4 4 0 0 1 4-4z" opacity="0.2"></path>
                            <path d="M40 4H24v20h20V8a4 4 0 0 0-4-4z" opacity="0.4"></path>
                            <path d="M4 40V24h20v20H8a4 4 0 0 1-4-4z" opacity="0.6"></path>
                            <path d="M44 40V24H24v20h16a4 4 0 0 0 4-4z" opacity="0.3"></path>
                        </g>
                    </svg>
                </div>
                <div class="test-right-item-title">
                    <div class="test-right-bold">Visual test appearance</div>
                    <div class="test-right-text">Pinpoint UI changes down to the pixel.</div>
                </div>
            </div>
            <div class="test-right-item">
                <div class="test-right-img">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img">
                        <g fill="none" fill-rule="evenodd">
                            <circle fill="#1EA7FD" opacity="0.1" cx="24" cy="24" r="24"></circle>
                            <circle fill="#1EA7FD" opacity="0.2" cx="24" cy="24" r="16"></circle>
                            <circle fill="#79C9FC" cx="24" cy="24" r="8"></circle>
                            <path
                                d="M33.3 45.5c-.5 0-.9-.3-1-.7l-7.7-19.2a1.2 1.2 0 0 1 1.5-1.5l19.2 7.6c.4.2.7.6.7 1 0 .6-.2 1-.7 1.2L40 36.6l4.1 4.1c.5.5.5 1.2 0 1.7L42.6 44c-.5.4-1.3.4-1.7 0l-4-4-2.5 5c-.2.4-.7.6-1.1.6z"
                                fill="#333"></path>
                            <path fill="#FFF" d="m36.4 37.6-2.9 5.9-7-17.5L44 33l-6.4 3.2 4.9 4.8-1.4 1.3z"></path>
                        </g>
                    </svg>
                </div>
                <div class="test-right-item-title">
                    <div class="test-right-bold">Interaction test behavior</div>
                    <div class="test-right-text">Simulate user behavior and assert in the browser.</div>
                </div>
            </div>
            <div class="test-right-item">
                <div class="test-right-img">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img">
                        <g fill="none" fill-rule="evenodd">
                            <circle fill-opacity="0.3" fill="#A849FF" cx="24" cy="24" r="24"></circle>
                            <path
                                d="M23.917 7.99a3.596 3.596 0 0 1 3.61 3.595 3.596 3.596 0 0 1-3.61 3.595 3.596 3.596 0 0 1-3.609-3.595c0-1.926 1.611-3.595 3.61-3.595Zm-2.662 18.287c.258-1.027.278-3.33.342-4.614 0-.45-.258-.834-.644-.963l-7.927-2.375c-1.031-.32-1.611-1.412-1.29-2.375.323-.963 1.419-1.412 2.385-1.155 0 0 7.25 2.31 9.828 2.31 2.578 0 10.022-2.375 10.022-2.375.967-.256 2.062.321 2.32 1.284.258.963-.322 2.054-1.289 2.311L27.075 20.7c-.387.129-.709.514-.644.963.064 1.284.07 3.587.328 4.614.604 2.768 3.865 10.049 4.27 10.95.15.378.226.676.226.89a1.872 1.872 0 0 1-1.873 1.873c-.846 0-1.422-.593-1.793-1.331-.247-.492-1.46-2.972-3.64-7.44l-3.64 7.768-.062.102a1.871 1.871 0 0 1-3.474-.971c0-.323.082-.626.225-.89.402-.897 3.653-8.182 4.257-10.951Z"
                                fill="#A470D5" fill-rule="nonzero"></path>
                        </g>
                    </svg>
                </div>
                <div class="test-right-item-title">
                    <div class="test-right-bold">Accessibility tests</div>
                    <div class="test-right-text">Check stories for WCAG and ARIA issues.</div>
                </div>
            </div>
            <div class="test-right-item">
                <div class="test-right-img">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img">
                        <g fill="none" fill-rule="evenodd">
                            <rect fill="#FD8460" x="2" y="2" width="24" height="8" rx="4"></rect>
                            <rect fill="#FFD57C" x="20" y="26" width="27" height="8" rx="4"></rect>
                            <rect fill="#79C9FC" x="9" y="38" width="17" height="8" rx="4"></rect>
                            <rect fill="#79C9FC" x="9" y="14" width="27" height="8" rx="4"></rect>
                        </g>
                    </svg>
                </div>
                <div class="test-right-item-title">
                    <div class="test-right-bold">Snapshot test markup</div>
                    <div class="test-right-text">Detect regressions in DOM markup.</div>
                </div>
            </div>
            <div class="test-right-item">
                <div class="test-right-img">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#79C9FC"
                                d="M16 3h23a3 3 0 0 1 0 6H16a3 3 0 0 1 0-6Zm0 24h27a3 3 0 0 1 0 6H16a3 3 0 0 1 0-6Zm0 12h14a3 3 0 0 1 0 6H16a3 3 0 0 1 0-6Zm0-24h20a3 3 0 0 1 0 6H16a3 3 0 0 1 0-6Z">
                            </path>
                            <path fill="#A0DB77"
                                d="M6.782 5.513c.29.19.29.5 0 .689L1.527 9.633a.436.436 0 0 1-.234.081C1.12 9.714 1 9.558 1 9.29V2.425C1 2.156 1.12 2 1.293 2c.07 0 .15.026.234.08l5.255 3.433Zm0 12c.29.19.29.5 0 .689l-5.255 3.431a.436.436 0 0 1-.234.081c-.173 0-.293-.156-.293-.425v-6.864c0-.269.12-.425.293-.425.07 0 .15.026.234.08l5.255 3.433Zm0 24c.29.19.29.5 0 .689l-5.255 3.431a.436.436 0 0 1-.234.081c-.173 0-.293-.156-.293-.425v-6.864c0-.269.12-.425.293-.425.07 0 .15.026.234.08l5.255 3.433Z">
                            </path>
                            <rect width="7" height="7" y="26.5" fill="#FD8460" rx="3.5"></rect>
                        </g>
                    </svg>
                </div>
                <div class="test-right-item-title">
                    <div class="test-right-bold">Reuse tests in other test tools</div>
                    <div class="test-right-text">Write stories once to reuse across your test suite.</div>
                </div>
            </div>
        </div>
    </div>
    <div class="tools-para-main">
        <div class="tools-text">
            “The tool we use for editing UI is Storybook. It is the perfect place to make sure your work aligns with
            designs to the pixel across breakpoints.”
        </div>
        <div class="tools-author-flex">
            <div class="author-left">
                <div class="author-img">
                    <img src={require('../images/test.png')} alt=""></img>
                </div>
                <div class="author-content-main">
                    <div class="author-title">Adam Neary</div>
                    <div class="author-sub-title">Tech lead</div>
                </div>
            </div>
            <div class="author-rightn air">
                <img src={require('../images/air.png')} alt=""></img>
            </div>
        </div>
    </div>
</>
);
}

export default Test;