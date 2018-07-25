import * as React from 'react';

const Squad = () => {
    return (
        <div className="squad">
            {/* Columns */}
            <div className="squad-header">
                <div className="squad-column">PKD</div>
                <div className="squad-column">INF</div>
                <div className="squad-column">Name</div>
                <div className="squad-column">Position</div>
                <div className="squad-column">Morale</div>
                <div className="squad-column">Last 5 games</div>
                <div className="squad-column">CON/SHP</div>
                <div className="squad-column">Apps</div>
                <div className="squad-column">Gls</div>
                <div className="squad-column">AST</div>
                <div className="squad-column">Avg Rat</div>
            </div>
            <div className="squad-column-divider"/>
            {/* Data */}
            <div className="squad-row">
                <div className="squad-item pos-selector">-</div>
                <div className="squad-item"/>
                <div className="squad-item">Samir Handanovic</div>
                <div className="squad-item">GK</div>
                <div className="squad-item">Excellent</div>
                <div className="squad-item">6.88</div>
                <div className="squad-item">96% / 100%</div>
                <div className="squad-item">13</div>
                <div className="squad-item">0</div>
                <div className="squad-item">0</div>
                <div className="squad-item">6.99</div>
            </div>
            <div className="squad-row">
                <div className="squad-item pos-selector">-</div>
                <div className="squad-item"/>
                <div className="squad-item">Samir Handanovic</div>
                <div className="squad-item">GK</div>
                <div className="squad-item">Excellent</div>
                <div className="squad-item">6.88</div>
                <div className="squad-item">96% / 100%</div>
                <div className="squad-item">13</div>
                <div className="squad-item">0</div>
                <div className="squad-item">0</div>
                <div className="squad-item">6.99</div>
            </div>
            <div className="squad-row">
                <div className="squad-item pos-selector">-</div>
                <div className="squad-item"/>
                <div className="squad-item">Samir Handanovic</div>
                <div className="squad-item">GK</div>
                <div className="squad-item">Excellent</div>
                <div className="squad-item">6.88</div>
                <div className="squad-item">96% / 100%</div>
                <div className="squad-item">13</div>
                <div className="squad-item">0</div>
                <div className="squad-item">0</div>
                <div className="squad-item">6.99</div>
            </div>
            <div className="squad-row">
                <div className="squad-item pos-selector">-</div>
                <div className="squad-item"/>
                <div className="squad-item">Samir Handanovic</div>
                <div className="squad-item">GK</div>
                <div className="squad-item">Excellent</div>
                <div className="squad-item">6.88</div>
                <div className="squad-item">96% / 100%</div>
                <div className="squad-item">13</div>
                <div className="squad-item">0</div>
                <div className="squad-item">0</div>
                <div className="squad-item">6.99</div>
            </div>
        </div>
    )
}

export default Squad;