import React, { Component } from 'react';
import Notes from './components/Notes';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

// .vue 三部分 template css js
// react .js 组件类 继承 template? jsx 语法 render
class App extends Component {
  render() {
    return (

      <Notes/>
    );
  }
}

export default App;
