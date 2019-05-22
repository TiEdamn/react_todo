import React, { Component } from "react";

import './todo-list-item.css';

export default class TodoListItem extends Component {
    render () {
        const { label, done, important, onDeleted, onToggleImportant, onToggleDone } = this.props;

        let classNames = "todo-list-item";

        if(done)
            classNames += " done";

        if(important)
            classNames += " important";

        return (
            <span className={classNames}>
            <span
                onClick={ onToggleDone }
                className="todo-list-item-label">
                { label }
            </span>

            <button
                onClick={onToggleImportant}
                type="button"
                className="btn btn-outline-success btn-sm">
                <i className="fa fa-exclamation"></i>
            </button>

            <button
                onClick={onDeleted}
                type="button"
                className="btn btn-outline-danger btn-sm">
                <i className="fa fa-trash-o"></i>
            </button>
        </span>
        );
    };
}