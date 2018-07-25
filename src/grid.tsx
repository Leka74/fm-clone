import * as React from 'react';
import './grid.css';
import News from './news';
import Squad from './squad'

document.onkeypress = (event: any) => {
    if (event.keyCode === 32) {
        handleContinueButton();
    }
}

const handleContinueButton = () => {
    const bg = document.getElementById("modal-background");
    if (bg) {
        bg.style.display = (bg.style.display === 'block')? "none": "block";   
    }
}

const Pages = {
    news: <News/>,
    squad: <Squad/>
}

const currentPage = "squad";

const Grid = (props: any) => {
    return (
        <div className="container">
            <div className="sidebar">
                <div className="sidebar-item">Home</div>
                <div className="sidebar-break"/>
                <div className="sidebar-item">Inbox</div>
                <div className="sidebar-break"/>
                <div className="sidebar-item">Squad</div>
                <div className="sidebar-item">Dynamics</div>
                <div className="sidebar-item">Tactics</div>
                <div className="sidebar-item">Team report</div>
                <div className="sidebar-item">Staff</div>
                <div className="sidebar-item">Training</div>
                <div className="sidebar-item">Medical center</div>
                <div className="sidebar-break"/>
                <div className="sidebar-item">Schedule</div>
                <div className="sidebar-item">Competitions</div>
                <div className="sidebar-break"/>
                <div className="sidebar-item">Scouting</div>
                <div className="sidebar-item">Transfers</div>
                <div className="sidebar-break"/>
                <div className="sidebar-item">Club</div>
                <div className="sidebar-item">Board</div>
                <div className="sidebar-item">Finances</div>
                <div className="sidebar-break"/>
                <div className="sidebar-item">Under 23s</div>
                <div className="sidebar-item">Under 18s</div>
                <div className="sidebar-break"/>
                {/* <div className="sidebar-item">Next match</div> */}
            </div>
            <div className="main">
                <div className="header">
                    <div>
                        <div className="header-title"><a href="#" draggable={false}>INBOX</a></div>
                        <div className="header-subtitle">1st in <a href="#" draggable={false}>Serie A</a> - Next Match: <a href="#" draggable={false}>Verona</a> (H) (7 days)</div>
                    </div>
                    <div className="header-settings">
                        <div className="header-button less-important">W</div>
                        <div className="header-button less-important">FM</div>
                        <div className="header-button less-important small">8 Jul 2018<br/><small>15:00</small></div>
                        <div className="header-button" onClick={handleContinueButton}>Continue</div>
                    </div>
                    <div className="header-options">
                        <div className="header-options-item selected">Overview</div>
                        <div className="header-options-item">Squad Depth</div>
                        <div className="header-options-item">Stats</div>
                        <div className="header-options-item">Facts</div>
                        <div className="header-options-item">Comparison</div>
                    </div>
                </div>
                <div className="content">
                    {Pages[currentPage]}
                </div>
            </div>
            <div className="modal-background" id="modal-background">
                <div className="modal" id="modal">modal here</div>
            </div>
        </div>
    )
}

export default Grid;