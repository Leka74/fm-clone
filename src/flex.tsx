import * as React from 'react';
import './flex.css';

const flex = () => (
    <div className="container">
        <div className="shadow"/>
        <div className="sidebar">
            <div className="sidebar-item">Home</div>
            <div className="sidebar-item">Inbox</div>
        </div>
        <div className="main">
            <div className="header">
                <div>
                    <div className="header-club">Internazionale</div>
                    <div className="header-manager">John Doe</div>
                </div>
                <div style={{position: "relative"}}>
                    <div className="button">Continue</div>
                </div>
            </div>
            <div>
                <div className="news">
                    news
                </div>
            </div>
        </div>
    </div>
)

export default flex;