import React from 'react';
import ReactDOM from 'react-dom';

import ComponmentHeader from '../components/header';
import ComponentFooter from '../components/footer';
import ComponentBody from '../components/body';
class Index extends React.Component{
    render(){
        return(
            <div id="app">
                <ComponmentHeader></ComponmentHeader>
                <ComponentBody></ComponentBody>
                <ComponentFooter></ComponentFooter>
            </div>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('example'));