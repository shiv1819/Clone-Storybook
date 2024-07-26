import './document.css';

function Document() {
    return (
        <>
            <div class="document-title-main" id='document'>
                <div class="document-title-left">
                    <h2>Document UI for your team to reuse</h2>
                </div>
                <div class="document-title-right">Storybook brings together UI, examples, and documentation in one place. That helps your team adopt existing UI patterns.</div>
            </div>
            <div class="document-main">
                <div class="document-right">
                    <div class="document-right-item border-blue">
                        <div class="document-right-img ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img"><g fill="none" fill-rule="evenodd"><rect width="21.302" height="6" x="26.247" y="34.912" fill="#FFD476" rx="3" transform="rotate(-135 36.898 37.912)"></rect><path fill="#FFC445" d="M20.782 2.127c10.371 0 18.78 8.408 18.78 18.78 0 10.371-8.409 18.78-18.78 18.78-10.372 0-18.78-8.409-18.78-18.78 0-10.372 8.408-18.78 18.78-18.78Zm0 5.938c-7.093 0-12.842 5.75-12.842 12.842 0 7.092 5.75 12.842 12.842 12.842 7.092 0 12.842-5.75 12.842-12.842 0-7.093-5.75-12.842-12.842-12.842Z"></path></g></svg>
                        </div>
                        <div class="document-right-item-title">
                            <div class="document-right-bold">Find any component or page in your app</div>
                            <div class="document-right-text">Storybook is a single source of truth for UI.</div>
                        </div>
                    </div>
                    <div class="document-right-item">
                        <div class="document-right-img">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0C4.79083 0 3 1.79083 3 4V44C3 46.2092 4.79083 48 7 48H41C43.2092 48 45 46.2092 45 44V9L36 0H7Z" fill="#D7F7F6"></path><rect x="9" y="17" width="9" height="5" rx="2" fill="#37D5D3" fill-opacity="0.85"></rect><rect x="20" y="17" width="19" height="5" rx="2" fill="#37D5D3" fill-opacity="0.85"></rect><rect x="9" y="26" width="9" height="5" rx="2" fill="#37D5D3" fill-opacity="0.85"></rect><rect x="20" y="26" width="19" height="5" rx="2" fill="#37D5D3" fill-opacity="0.85"></rect><rect x="9" y="35" width="9" height="5" rx="2" fill="#37D5D3" fill-opacity="0.85"></rect><rect x="20" y="35" width="19" height="5" rx="2" fill="#37D5D3" fill-opacity="0.85"></rect><path d="M36 0V5C36 7.20914 37.7909 9 40 9H45L36 0Z" fill="#37D5D3" fill-opacity="0.85"></path></svg>
                        </div>
                        <div class="document-right-item-title">
                            <div class="document-right-bold">Generate UI docs automatically</div>
                            <div class="document-right-text">Write Markdown and build custom docs.</div>
                        </div>
                    </div>
                    <div class="document-right-item">
                        <div class="document-right-img">
                            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img"><g fill="none" fill-rule="evenodd"><rect fill="#FC521F" y="6" width="24" height="24" rx="4" opacity="0.7"></rect><rect fill="#FFC445" x="12" y="12" width="24" height="24" rx="4" opacity="0.7"></rect><rect fill="#1EA7FD" x="24" y="18" width="24" height="24" rx="4" opacity="0.7"></rect></g></svg>

                        </div>
                        <div class="document-right-item-title">
                            <div class="document-right-bold">Reuse components across pages and apps</div>
                            <div class="document-right-text">Every story is a use case that you can reuse.</div>
                        </div>
                    </div>
                    <div class="document-right-item">
                        <div class="document-right-img">
                            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img"><g fill="none" fill-rule="evenodd"><rect fill="#69BD45" opacity="0.7" x="2" y="5" width="16" height="16" rx="4"></rect><rect fill="#1EA7FD" opacity="0.7" x="2" y="27" width="16" height="16" rx="4"></rect><rect fill="#37D5D3" opacity="0.7" x="32" y="16" width="16" height="16" rx="4"></rect><path d="M18 13h1c2.8 0 4 1.5 5.8 5.4l.2.5c1.4 3.1 2.2 4.1 3.9 4.1H32v3h-3.1c-1.7 0-2.5 1-3.9 4.1l-.2.5C23 34.5 21.8 36 19 36h-1v-3h1c1.1 0 1.8-.8 3-3.6l.3-.5c.8-2 1.7-3.4 2.6-4.4-1-1-1.8-2.4-2.6-4.4l-.3-.5c-1.2-2.8-1.9-3.6-3-3.6h-1v-3z" fill="#66BF3C" fill-rule="nonzero" opacity="0.2"></path></g></svg>
                        </div>
                        <div class="document-right-item-title">
                            <div class="document-right-bold">Track component history and versions</div>
                            <div class="document-right-text">QA unexpected bugs by going back in time.</div>
                        </div>
                    </div>
                </div>
                <div class="document-left">
                    <video muted aria-controls="video" autoplay="true" loop>
                        <source src={require('../images/document.mp4')} type="video/mp4" />
                    </video>
                </div>

            </div>
            <div class="tools-para-main">
                <div class="tools-text">
                “Storybook has made developing components more streamlined by allowing us to easily include technical documentation within our design system!”
                </div>
                <div class="tools-author-flex">
                    <div class="author-left">
                        <div class="author-img">
                            <img src={require('../images/document.jpg')} alt=""></img>
                        </div>
                        <div class="author-content-main">
                            <div class="author-title">Taurie Davis</div>
                            <div class="author-sub-title">Author of Building Design Systems</div>
                        </div>
                    </div>
                    <div class="author-right git">
                        <img src={require('../images/gitlab.png')} alt=""></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Document;