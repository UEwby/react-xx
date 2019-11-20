import React, { Component } from 'react';
import Parent from "./components/props/Parent";
import TodoWrapper from "./components/ProviderConsumerContext/TodoWrapper";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Parent />
                <TodoWrapper/>
            </div>
        );
    }
}

export default App;