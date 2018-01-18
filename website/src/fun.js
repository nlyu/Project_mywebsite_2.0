import React, { Component } from 'react';
import './css/App.css';
import './css/Thoughts.css';
import './css/Fun.css';

class Fun extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="Fun">
                <div className="Thought animated slideInDown">
                    <p id="thoughts-font"><span id="thoughts-font-1">F</span>uns</p>
                    <p id="thoughts-font-2"><span id="thoughts-font-1">G</span>ams <span id="thoughts-font-1">T</span>ravels....<span id="thoughts-font-1">T</span>hings I do when i get bored</p>
                </div>
                <div className="fun-contentboard animated slideInRight">
                    <p>假装有内容</p>
                    <p>content would be added soon</p>
                </div>
            </div>
        );
    }
}

export default Fun;
