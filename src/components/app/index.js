import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    maxId = 1;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Build react app'),
            this.createTodoItem('Make a lunch')
        ],
        term: '',
        done: 0
    };

    createTodoItem(label) {
        return {
            label: label,
            id: this.maxId++,
            done: false,
            important: false,
        };
    }

    render () {
        const { todoData, term, done } = this.state;
        const visibleItems = this.searchItems(todoData, term, done);
        const doneCount = todoData
            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel setTerm={this.setTerm} />
                    <ItemStatusFilter setFilter={this.setFilter} done={done} />
                </div>
                <TodoList
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                    todos={visibleItems} />
                <ItemAddForm onItemAdded={(text) => this.addItem(text)} />
            </div>
        );
    }

    setTerm = (term) => {
        this.setState({term})
    };

    setFilter = (done) => {
        this.setState({done})
    };

    searchItems = (items, term, done) => {
        if(term === '' && done === 0) {
            return items;
        }

        if(term !== '')
            items = items.filter((item) => item.label.toLowerCase().includes(term.toLowerCase()));

        if(done !== 0)
            items = items.filter((item) => item.done === done);

        return items;
    };

    addItem = (text) => {
        this.setState(({ todoData }) => {
            const newArray = [
                ...todoData, this.createTodoItem(text)
            ];

            return {
                todoData: newArray
            };
        });
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        })
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        })
    };
};