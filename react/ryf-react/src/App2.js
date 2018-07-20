import React, { Component } from 'react';
import './App.css';

class HelloMessage extends Component {
    render () {
        return <h1>Hello {this.props.name}</h1>
    }
}

class App extends Component {
    render() {
        const arr = [
            <h1 key="1">Hello world</h1>,
            <h2 key="2">React is awesome</h2>
        ]
        return (
        <div className="App">
            <HelloMessage name="John" />
            <ul>
            { 
                arr
            }
            </ul>
        </div>
        );
    }
}
  
export default App;
  