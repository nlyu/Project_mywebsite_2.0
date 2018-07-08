import React, { Component } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import './css/App.css';
import './css/Fun.css';
import './css/Projects.css';
import './css/markdown.css';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
        this.all_url = 'https://api.github.com/repos/nlyu/Project_mywebsite_2.0/issues/15';
    }

    componentWillMount() {
        const url = this.all_url;
        axios.get(url).then((res) => {
            this.setState({
                data: res.data.body,
            });
        });
    }

    render() {
        return (
            <div className="Project">
                <div className="Thought animated slideInDown">
                    <p id="thoughts-font"><span id="thoughts-font-1">E</span>verything, <span id="thoughts-font-1">M</span>E</p>
                    <p id="thoughts-font-2"><span id="thoughts-font-1">P</span>rojects, <span id="thoughts-font-1">E</span>xperience, <span id="thoughts-font-1">C</span>ool stuff....Since I was <span id="thoughts-font-1">Born</span></p>
                </div>
                <div className="fun-contentboard animated slideInRight">
                    <div id="markdown">
                        <ReactMarkdown source={this.state.data} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;
