import './automate.css';
function Automate() {
return (
<>
    <div class="automate-main" id='automate'>
        <div class="automate-title">
            <h2>Automate UI workflows</h2>
        </div>
        <div class="automate-content">
            Add Storybook as a CI step to automate the UI development workflow. That helps you and your team ship faster
            with less manual work.
        </div>
        <div class="horizontal-border"></div>
        <div class="green-tick">
            <svg viewBox="0 0 14 14" width="14px" height="14px" class="css-zmb90n e82dnwa0">
                <path d="M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z">
                </path>
            </svg>
        </div>
        <div class="automate-subtitle">
            Publish Storybook
        </div>
        <div class="automate-content">
            Publish Storybook online to collaborate on UI implementation with developers, designers, and PMs. Your
            teammates can see work without needing to spin up a dev environment.
        </div>
        <div class="automate-text-blue">
            <span> Publish Storybook for your team</span><span><svg viewBox="0 0 14 14" width="14px" height="14px"
                    class="css-zmb90n e82dnwa0">
                    <path
                        d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z">
                    </path>
                </svg></span>
        </div>
        <div class="calendar-img">
            <img src={require('../images/calendar.png')} alt=""></img>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="16" fill="#66BF3C" />
                <path fill="#fff" stroke="#fff" stroke-width="2"
                    d="M21.8571 13.2849V14.2849H22.8571C25.1452 14.2849 27 16.1397 27 18.4277C27 20.7158 25.1452 22.5706 22.8571 22.5706H16C15.8877 22.5706 15.7767 22.5661 15.667 22.5575L15.591 22.5514L15.5149 22.557C15.3922 22.566 15.2682 22.5706 15.1429 22.5706H10C7.23858 22.5706 5 20.332 5 17.5706C5 14.9928 6.95153 12.8695 9.45713 12.5996L10.1497 12.525L10.3198 11.8495C10.9596 9.3081 13.2615 7.42773 16 7.42773C19.2348 7.42773 21.8571 10.0501 21.8571 13.2849Z" />
            </svg>
        </div>
        <div class="horizontal-border"></div>
        <div class="green-tick">
            <svg viewBox="0 0 14 14" width="14px" height="14px" class="css-zmb90n e82dnwa0">
                <path d="M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z">
                </path>
            </svg>
        </div>
        <div class="automate-subtitle">
            UI Tests

        </div>
        <div class="automate-content">
            Test every facet of your UI: interaction, visual, accessibility, and snapshot, in CI to detect UI bugs down to the component.
        </div>
        <div class="automate-text-blue">
            <span> Auto-detect UI bugs
            </span><span><svg viewBox="0 0 14 14" width="14px" height="14px"
                    class="css-zmb90n e82dnwa0">
                    <path
                        d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z">
                    </path>
                </svg></span>
        </div>
    </div>
</>
);
}

export default Automate;