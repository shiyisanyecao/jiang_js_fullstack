import React, { Component } from 'react';
import './App.css';

// .vue 三部分 template css js
// react .js 组件类 继承 template? jsx 语法 render
class App extends Component {
  render() {
    const names = ['Alice', 'Emily', '曾凯大帝']
    return (
      <div className="App">
        <ul>
          { 
            names.map((name, index) => {
              return (<li key={index}>hello, {name}</li>)
            }) 
          }
        </ul>
      </div>
    );
  }
}

export default App;
