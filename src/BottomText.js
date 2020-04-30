import React, { Component } from 'react';

class BottomText extends Component {
    render() {
        return (
            <p>You can select {this.props.amount} ingredients</p>
        );
    }
}

export default BottomText;