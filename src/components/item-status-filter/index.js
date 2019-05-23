import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    buttons = [
        {done: 0, label: 'All'},
        {done: false, label: 'Active'},
        {done: true, label: 'Done'}
    ];

    render() {
        const { setFilter, done } = this.props;

        const buttons = this.buttons.map(item => {
            const className = `btn ${done === item.done ? "btn-success" : "btn-outline-secondary"}`;

            return (
                <button
                    key={item.label}
                    type="button"
                    className={className}
                    onClick={() => setFilter(item.done)}>
                    {item.label}
                </button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}