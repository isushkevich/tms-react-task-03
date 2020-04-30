import React, { Component } from 'react';

class ListItem extends Component {
    state = {
        checked: false
    }

    handleChange = () => {
        this.setState(
            { checked: !this.state.checked },
            () => this.props.onCheckState(this.props.ingredientName, this.state.checked),
        );
    }

    render() {
        return (
            <div className="ListItem">
                <input type="checkbox" onChange={this.handleChange} />
                <label>{this.props.ingredientName}</label>
            </div>
        );
    }
}

export default ListItem;