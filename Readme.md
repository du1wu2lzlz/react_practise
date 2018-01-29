## npm init
## npm install --save react react-dom babelify babel-preset-react
## npm install --save babel-preset -es2015

## webpack 热加载配置  
webpack --watch    
webpack-dev-server --content-base src --inline --hot  


## React组件
1. return 返回的html节点只能有一个   
2. 外部使用的组件要 export default 
3. 入口定义: ReactDOM.render()

## JSX内置表达式
当遇到<，JSX就当HTML解析，遇到{就当JavaScript解析。
1. 三元表达式  
```javascript
   {window.username == '?' '' : '' }
```
2. 属性动态绑定
```html
   <input type="button" value ="" disabled = {test}/>
```
3. 注释
   {/*注释*/}

## 生命周期

