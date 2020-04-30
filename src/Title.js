import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div className="centered_block">
                <h2 className="main_title">{this.props.title}</h2>
            </div>
        );
    }
}

export default Title;