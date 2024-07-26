import './review.css';
function Review() {

return (
<>
    <div class="review-main">
        <div class="horizontal-border"></div>
        <div class="green-tick">
            <svg viewBox="0 0 14 14" width="14px" height="14px" class="css-zmb90n e82dnwa0">
                <path d="M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z">
                </path>
            </svg>
        </div>
        <div class="automate-subtitle">
            UI Review
        </div>
        <div class="automate-content">
            Request feedback from teammates to verify UI implementation. Discuss UI changes together then assign
            reviewers for sign off.
        </div>
        <div class="automate-text-blue">
            <span>Review with your team</span><span><svg viewBox="0 0 14 14" width="14px" height="14px"
                    class="css-zmb90n e82dnwa0">
                    <path
                        d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z">
                    </path>
                </svg></span>
        </div>
        <div class="date-img">
            <img src={require('../images/date.png')} alt=""></img>
            <div class="comment-main">
                <img src={require('../images/comment-1.png')} alt=""></img>
                <img src={require('../images/comment-2.png')} alt=""></img>
                <img src={require('../images/comment-3.png')} alt=""></img>
            </div>
        </div>
        <div class="horizontal-border"></div>
        <div class="purple">
            <svg viewBox="0 0 14 14" width="14px" height="14px" class="css-zmb90n e82dnwa0">
                <path fill-rule="evenodd"
                    d="M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z">
                </path>
            </svg>
        </div>
        <div class="automate-subtitle">
            Merge and ship
        </div>
        <div class="automate-content">
            Each stage of the UI development lifecycle is tracked by a pull request check. Pass all checks to get
            certainty that your work is ready for production.
        </div>
        <div class="automate-text-blue">
            <span>Integrate with Git version control</span><span><svg viewBox="0 0 14 14" width="14px" height="14px"
                    class="css-zmb90n e82dnwa0">
                    <path
                        d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z">
                    </path>
                </svg></span>
        </div>
        <div class="check-img">
            <img src={require('../images/check.png')} alt=""></img>

        </div>
    </div>

</>
);
}

export default Review;