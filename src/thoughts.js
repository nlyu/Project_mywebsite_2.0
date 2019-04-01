import React, { Component } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import './css/Thoughts.css';
import './css/Fun.css';
import './css/markdown.css';

class Thought extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
        this.all_url = 'https://api.github.com/repos/nlyu/Project_mywebsite_2.0/issues/16';
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
            <div className="Thoughts">
                <div className="Thought animated slideInDown">
                    <p id="thoughts-font"><span id="thoughts-font-1">K</span>nowledge</p>
                    <p id="thoughts-font-2"><span id="thoughts-font-1">B</span>ooks read <span id="thoughts-font-1">K</span>nowledge gained <span id="thoughts-font-1">L</span>esson taken</p>
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

export default Thought;
