
import './App.css';
import React, { Component } from 'react';
import Items from './Items'


class SearchItems extends Component {
    render() {
        return (
            <div>
            <Items items={this.state.items}/>
            </div>
        )
    }

}

export default SearchItems