import React from 'react';
import ReactDOM from 'react-dom';
export default
class ComponmentBody extends React.Component{
    render(){
        var username = '11'
        return (
            <body>
                <p> {username == '' ? '用户未登陆' : '欢迎' + '用户:' + username}</p>
            </body>
        )
    }
}
