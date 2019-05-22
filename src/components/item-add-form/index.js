import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    render() {
        const { onItemAdded } = this.props;

        return (
            <div className="item-add-form">
                <button
                    onClick={ () => onItemAdded('test123') }
                    type="button"
                    className="btn btn-outline-secondary">
                    Add item
                </button>
            </div>
        );
    }
}