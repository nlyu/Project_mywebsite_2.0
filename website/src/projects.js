import React, { Component } from 'react';
import './css/App.css';
import './css/Fun.css';
import './css/Projects.css';

class Project extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="Project">
                <div className="Thought animated slideInDown">
                    <p id="thoughts-font"><span id="thoughts-font-1">E</span>verything, <span id="thoughts-font-1">M</span>E</p>
                    <p id="thoughts-font-2"><span id="thoughts-font-1">P</span>rojects, <span id="thoughts-font-1">E</span>xperience, <span id="thoughts-font-1">C</span>ool stuff....Since I was <span id="thoughts-font-1">Born</span></p>
                </div>
                <div className="fun-contentboard animated slideInRight">
                    <p>假装有内容</p>
                    <p>content would be added soon</p>
                </div>
            </div>
        );
    }
}

export default Project;
