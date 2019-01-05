import React from 'react';
import ReactDOM from 'react-dom';
import PitCalc from './components/PitCalc';

const App = () => (
    <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="https://wxqee.github.io/2019-CN-PIT/">2019 中国 薪资个税计算器（简版）</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">&nbsp;</span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="https://wxqee.github.io/2019-CN-PIT/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/wxqee/2019-CN-PIT">Github</a>
                    </li>
                </ul>
            </div>
        </nav>

        <main role="main">
            <h1>2019年个人所得税计算器</h1>
            <PitCalc />
        </main>
    </React.Fragment>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
