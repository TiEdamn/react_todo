import React, { Component } from "react";

import './search-panel.css'

export default class SearchPanel extends Component {
    state = {
        value: ''
    };

    render() {
        const searchText = 'Type here to search...';

        return (
            <input
                onChange={this.onChange}
                value={this.state.value}
                type="text"
                placeholder={searchText}
                className="search-input"/>
        );
    }

    onChange = (e) => {
        const term = e.target.value;

        this.setState({
            value: term
        });

        this.props.setTerm(term);
    }
};