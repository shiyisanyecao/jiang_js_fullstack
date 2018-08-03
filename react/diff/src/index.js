import React from './react';
import ReactDOM from './react-dom';

ReactDOM.render(
    <div>
        hello
        <span className='rt' onClick="console.log('zz');" style={{fontSize: 20, fontWeight: 'bold'}}>world!</span>
    </div>
    , document.getElementById('root'))