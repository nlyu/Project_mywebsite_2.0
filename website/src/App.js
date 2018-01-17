import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import { Icon, Popup } from 'semantic-ui-react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import logo from './logo.svg';

import Nav from './nav';
import Art from './arts';
import Project from './projects';
import Thought from './thoughts';
import Resume from './resume';
import Fun from './fun';
import ResumePdf from './file/Resume2018.pdf';

import './css/App.css';
import './css/animate.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false,
            isHovered0: false,
            isHovered1: false };

        this.handleClick = this.handleClick.bind(this);
        this.handleClickFalse = this.handleClickFalse.bind(this);
        this.welcomePage = this.welcomePage.bind(this);
        this.handleHover0 = this.handleHover0.bind(this);
        this.handleHover1 = this.handleHover1.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    handleClickFalse() {
        this.setState({
            isToggleOn: false,
        });
    }

    handleHover0() {
        this.setState({
            isHovered0: !this.state.isHovered0,
        });
    }

    handleHover1() {
        this.setState({
            isHovered1: !this.state.isHovered1,
        });
    }

    welcomePage() {
        const animationPulse = this.state.isHovered0 ? 'animated shake' : '';
        const animationRubber = this.state.isHovered1 ? 'animated rubberBand' : '';
        const style = {
            opacity: 0.7,
            borderRadius: 0,
            borderStyle: 'none',
            boxShadow: 'none',
            padding: '2em',
            background: 'none',
            top: '30px',
            left: '50%',
            color: 'white',
            fontSize: '2vw',
            fontFamily: 'Lato',
            fontWeight: 100,
        };
        return (
           // className="animated infinite bounce"
            <div>
                <div className="container-left">
                    <div>
                        <div>
                            <p id="app-name-ch" className={animationPulse} onMouseEnter={this.handleHover0} onMouseLeave={this.handleHover0}><span id="app-name-ch-1">呂</span>诺晨</p>
                        </div>
                        <div>
                            <p id="app-name" className={animationRubber} onMouseEnter={this.handleHover1} onMouseLeave={this.handleHover1}>Nuochen Lyu</p>
                        </div>
                        <div>
                            <p id="app-welcome"><span id="app-welcome-1">欢迎侬好{'  '}</span><span id="app-welcome-2">{'  '}WELCOME</span></p>
                        </div>
                        <p id="app-social">
                            <a href="https://www.linkedin.com/in/lyulyulyu/">
                                <Icon name="linkedin" size="big" />
                            </a>
                            <a href="https://github.com/nlyu">
                                <Icon name="github square" size="big" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100004339067411">
                                <Icon name="facebook" size="big" />
                            </a>
                        </p>
                    </div>
                </div>
                <HashRouter>
                    <div className="container-right">
                        <Popup
                            trigger={<a href="https://www.pinterest.com/nlyu2/painting/">
                                <div>
                                    <p id="app-right-arts">Arts</p>
                                </div>
                            </a>}
                            content="See my paintings in Pinterest"
                            style={style}
                            basic
                            wide="very" />
                        <Popup
                            trigger={<Link to="/thoughts">
                                <div onClick={this.handleClick}>
                                    <p id="app-right-thoughts">THOUGHTS</p>
                                </div>
                            </Link>}
                            content="Books & Notes & Knowledge"
                            style={style}
                            on="hover"
                            basic
                            wide="very" />
                        <Popup
                            trigger={<Link to="/projects">
                                <div onClick={this.handleClick}>
                                    <p id="app-right-projects">WHATam<span id="app-right-projects-1">I</span>DOING?</p>
                                </div>
                            </Link>}
                            content="Everthing about me. Things done/doing."
                            style={style}
                            on="hover"
                            basic
                            wide="very" />
                        <Popup
                            trigger={<Link to="/fun">
                                <div onClick={this.handleClick}>
                                    <p id="app-right-fun">FUN</p>
                                </div>
                            </Link>}
                            content="Games & Travels & Sports"
                            style={style}
                            on="hover"
                            basic
                            wide="very" />
                        <Popup
                            trigger={<a href={ResumePdf}>
                                <div>
                                    <p id="app-right-resume">RESUME</p>
                                </div>
                            </a>}
                            content="Checkout PDF for resume 2018"
                            style={style}
                            on="hover"
                            basic
                            wide="very" />
                    </div>
                </HashRouter>
            </div>
        );
    }

    render() {
        return (
            <div className="App">
                <Particles
                    className="canvas"
                    params={{
                        particles: {
                            number: {
                                value: 50,
                                density: {
                                    enable: true, value_area: 700,
                                },
                            },
                            color: {
                                value: '#ff0000',
                            },
                            shape: {
                                type: 'circle',
                                stroke: {
                                    width: 0, color: '#000000',
                                },
                            },
                            opacity: {
                                value: 0.5,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false,
                                },
                            },
                            size: {
                                value: 4,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 14.617389821424212,
                                    size_min: 0.1,
                                    sync: false,
                                },
                            },
                            line_linked: {
                                enable: true,
                                distance: 140,
                                color: '#000000',
                                opacity: 0.3,
                                width: 1,
                            },
                            move: {
                                enable: true,
                                speed: 2.5,
                                direction: 'none',
                                random: true,
                                straight: false,
                                out_mode: 'out',
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200,
                                },
                            },
                        },
                        interactivity: {
                            detect_on: 'canvas',
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: 'bubble',
                                },
                                onclick: {
                                    enable: false,
                                    mode: 'repulse',
                                },
                                resize: true,
                            },
                            modes: {
                                grab: {
                                    distance: 400,
                                    line_linked: {
                                        opacity: 1,
                                    },
                                },
                                bubble: {
                                    distance: 207.079689136843,
                                    size: 5.3,
                                    duration: 3.329516570435515,
                                    opacity: 1,
                                    speed: 3,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                                push: {
                                    particles_nb: 4,
                                },
                                remove: {
                                    particles_nb: 2,
                                },
                            },
                        },
                        retina_detect: true,
                    }}
                    style={{
                        width: '100%',
                    }} />
                {this.state.isToggleOn ? (<Nav />) : null}
                <div className="container">
                    <HashRouter>
                        <Switch>
                            <Route exact path="/arts" component={Art} />
                            <Route exact path="/projects" component={Project} />
                            <Route exact path="/thoughts" component={Thought} />
                            <Route exact path="/resume" component={Resume} />
                            <Route exact path="/fun" component={Fun} />
                            <Route exact path="/" render={this.welcomePage} />
                        </Switch>
                    </HashRouter>
                </div>
                <HashRouter>
                    <Link to="/">
                        <Icon className="app-home" name="home" size="huge" onClick={this.handleClickFalse} />
                    </Link>
                </HashRouter>
            </div>
        );
    }
}

export default App;
