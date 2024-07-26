import './ui-usage.css';
function UiUsage() {
    return (
        <div class="ui-usage-main" id='develop'>
            <div class="ui-left">
                <h2>Develop durable user interfaces</h2>
            </div>
            <div class="ui-right">
                <div class="ui-content">
                    Storybook provides a workshop to build UIs in isolation. It helps you develop hard-to-reach states and edge
                    cases without needing to run the whole app.
                </div>
                <div class="ui-logo-main">
                    <div class="ui-logo-title">
                        Made For
                    </div>
                    <div class="ui-images">
                        <div class="ui-icon">
                            <img src={require('../images/logo-react.png')} alt=""></img>
                        </div>
                        <div class="ui-icon">
                            <img src={require('../images/logo-vue.png')} alt=""></img>
                        </div>
                        <div class="ui-icon">
                            <img src={require('../images/logo-angular.png')} alt=""></img>
                        </div>
                        <div class="ui-icon">
                            <img src={require('../images/logo-web-components-alt.png')} alt=""></img>
                        </div>
                        <div class="ui-icon">
                            <img src={require('../images/logo-svelte.png')} alt=""></img>
                        </div>
                        <div class="ui-icon">
                            <img src={require('../images/logo-html.png')} alt=""></img>
                        </div>
                        <div class="ui-icon border-none">
                            + 6
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UiUsage;