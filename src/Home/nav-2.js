import './nav-2.css';

function NavBlack() {
return (
<div class="navigation-black">
    <div className="nav-black-main">
        <div class="nav-black-left">
            <div class="nav-black-item phone-item">
            <a href="#develop">develop</a>

            </div>
            <div class="nav-black-item">
               <a href="#test">test</a>
            </div>
            <div class="nav-black-item">
            <a href="#document">document</a>
            </div>
            <div class="nav-black-item">
            <a href="#share">share</a>
            </div>
            <div class="nav-black-item">
            <a href="#automate">automate</a>
            </div>
            <div class="nav-black-item">
            <a href="#dev"> who's it for</a>
            </div>
        </div>
        <div class="nav-black-right">
           <a href="#">
            <div class="nav-black-right-item  tab-none">
                <span><svg viewBox="0 0 14 14" width="14px" height="14px" class="css-zmb90n e82dnwa0">
                        <path
                            d="M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z">
                        </path>
                    </svg></span>
                <span>
                    jump to top
                </span>
            </div>
           </a>
            <div class="nav-black-right-item btn-blue">
                <button>get started</button>
            </div>
        </div>
    </div>
</div>
);
}

export default NavBlack;