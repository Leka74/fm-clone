import * as React from 'react';

const News = () => {
    return (
        <div className="news">
            <div className="news-listbox">
                <div className="news-listbox-header">Sunday November 19th 2017 (2 items)</div>
                <div className="news-listbox-item">
                    <div className="author">Adriano Bonaiuti</div>
                    <div className="time">0:00</div>
                    <div className="title">Bonaiuti reports on Pissardo</div>
                </div>
                <div className="news-listbox-item">
                    <div className="author">Michele Salzarulo</div>
                    <div className="time">0:00</div>
                    <div className="title">Post-Match Analysis: Napoli</div>
                </div>
                <div className="news-listbox-header">Saturday November 18th 2017 (13 items)</div>
                <div className="news-listbox-item">
                    <div className="author">Angelica Pace</div>
                    <div className="time">22:46</div>
                    <div className="title">FW: Run can continue - Dobruna</div>
                </div>

                <div className="news-listbox-item">
                    <div className="author">Angelica Pace</div>
                    <div className="time">22:38</div>
                    <div className="title">FW: Inter maintain unbeaten record</div>
                </div>

                <div className="news-listbox-item">
                    <div className="author">Angelica Pace</div>
                    <div className="time">22:37</div>
                    <div className="title">FW: Saturday's Serie A Round-Up</div>
                </div>

                <div className="news-listbox-item selected">
                    <div className="author">Angelica Pace</div>
                    <div className="time">22:35</div>
                    <div className="title">Post-Match conference about to begin</div>
                </div>

                <div className="news-listbox-item">
                    <div className="author">Gian Nicola Bisciotti</div>
                    <div className="time">22:34</div>
                    <div className="title">Danilo D'Ambrosio injured</div>
                </div>

            </div>
            <div className="news-content">
                <div className="news-content-header">
                    <div className="author">Angelica Pace (Press Officer)</div>
                    <div className="tags">Media</div>
                    <div className="title">Post-Match conference about to begin</div>
                    <div className="time">22:35</div>
                    <div className="divider"/>
                </div>
                <div className="news-content-text">
                    A press conference has been called at <a href="#">San Paolo</a> in the wake of the <a href="#">Serie A</a> match between <a href="#">Inter</a> and <a href="#">Napoli</a>.<br/><br/>The press conference was attended by you in person.
                </div>
            </div>
        </div>
    )
}

export default News;