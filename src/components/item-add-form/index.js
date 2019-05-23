import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        label: ''
    };

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input
                    onChange={this.onLabelChange}
                    type="text"
                    value={this.state.label}
                    placeholder="What needs to be done?"
                    className="form-control"/>
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Add item
                </button>
            </form>
        );
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);

        this.setState({
            label: ''
        });
    }
}