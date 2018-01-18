import React, { Component } from 'react';
import './css/Thoughts.css';

class Thought extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <div className="Thought animated slideInDown">
                    <p id="thoughts-font"><span id="thoughts-font-1">T</span>houghts</p>
                    <p id="thoughts-font-2"><span id="thoughts-font-1">B</span>ooks read <span id="thoughts-font-1">K</span>nowledge gained <span id="thoughts-font-1">L</span>esson taken</p>
                </div>
            </div>
        );
    }
}

export default Thought;
