import React, { Component } from 'react';
import { Button, Icon } from 'antd'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary" icon='search'>Button</Button>
                <Button type="primary" icon='search'>Button</Button>
                <Icon type="pause-circle" theme="filled" />
            </div>
        );
    }
}

export default App;