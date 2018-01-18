import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import './css/Nav.css';


class Nav extends Component {
    render() {
        return (
            <div>
                <div className="Footer animated slideInUp">
                    <p>
                        <Icon name="wechat" /> 756259647
                    </p>
                    <p>lnc0519@gmail.com</p>
                    <p>lyulyulyu.com</p>
                    <p>ver 2.0 Jan 2018</p>
                </div>
            </div>
        );
    }
}

export default Nav;
