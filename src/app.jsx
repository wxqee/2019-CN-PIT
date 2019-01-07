import React from 'react';
import ReactDOM from 'react-dom';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import PitCalc from './components/PitCalc';

const App = () => (
    <React.Fragment>
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">2019新个税计算器</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://wxqee.github.io/2019-CN-PIT">Home</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="https://github.com/wxqee/2019-CN-PIT">Github</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <main role="main">
            <PitCalc />
        </main>
    </React.Fragment>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
