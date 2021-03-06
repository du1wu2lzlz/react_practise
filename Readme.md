## npm init
## npm install --save react react-dom babelify babel-preset-react
## npm install --save babel-preset -es2015
https://www.imooc.com/article/17442
##webpack 热加载配置
webpack --watch  
webpack-dev-server --content-base src --inline --hot


## React组件
1. return 返回的html节点只能有一个   
2. 外部使用的组件要 export default 
3. 入口定义: ReactDOM.render()

## JSX内置表达式
当遇到<，JSX就当HTML解析，遇到{就当JavaScript解析。
1. 三元表达式  
   {window.username == '?' '' : '' }
2. 属性动态绑定
   <input type="button" value ="" disabled = {test}/>
3. 注释
   {/*注释*/}

## 生命周期
1. 实例化
  ```javascript
    首次实例化
      + getDefaultProps
      + getInitialState
      + componentWillMount
      + render
      + componentDidMount   

    实例化完成后的更新
      + getInitialState
      + componentWillMount
      + render
      + componentDidMount
   ```
2. 存在期
   ```javascript
   组件已存在时的状态改变
      + componentWillReceiveProps
      + shouldComponentUpdate
      + componentWillUpdate
      + render
      + componentDidUpdate
  ```  
 
3.  销毁&清理期  

```javascript

      componentWillUnmount
      
```
## 说明

```javascript
生命周期共提供了10个不同的API。

    1.getDefaultProps
        作用于组件类，只调用一次，返回对象用于设置默认的props，对于引用值，会在实例中共享。

    2.getInitialState
        作用于组件的实例，在实例创建时调用一次，用于初始化每个实例的state，此时可以访问this.props。

    3.componentWillMount  //组件加载前调用
         在完成首次渲染之前调用，此时仍可以修改组件的state。

    4.render
         必选的方法，创建虚拟DOM，该方法具有特殊的规则：

           + 只能通过this.props和this.state访问数据
           + 可以返回null、false或任何React组件
           + 只能出现一个顶级组件（不能返回数组）
           + 不能改变组件的状态
           + 不能修改DOM的输出
    5.componentDidMount  //组件加载后调用
        真实的DOM被渲染出来后调用，在该方法中可通过this.getDOMNode()访问到真实的DOM元素。此时已可以使用其他类库来操作这个DOM。

        在服务端中，该方法不会被调用。

    6.componentWillReceiveProps //组件接受新的参数时调用
        组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state。

            componentWillReceiveProps: function(nextProps) {
                if (nextProps.bool) {
                    this.setState({
                        bool: true
                    });
                }
            }
    7.shouldComponentUpdate
        组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，通常不需要使用以避免出现bug。在出现应用的瓶颈时，可通过该方法进行适当的优化。

        在首次渲染期间或者调用了forceUpdate方法后，该方法不会被调用

    8.componentWillUpdate  //组件更新前调用
        接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。

    9.componentDidUpdate  //组件更新后调用
        完成渲染新的props或者state后调用，此时可以访问到新的DOM元素。

    10.componentWillUnmount //组件卸载前调用
        组件被移除之前被调用，可以用于做一些清理工作，在componentDidMount方法中添加的所有任务都需要在该方法中撤销，比如创建的定时器或添加的事件监听器。
```
## State 属性

1. 初始化: this.state = { username : 'du1wu2'};
2. 初始化可以放在构造函数constructors里
3. 修改state : thisetState({username: 'test'});
4. state的作用域只属于当前的类,不污染其他模块
5. state对于模块来说 属于 自身 属性

## Props 属性
a. 
  1. props对于模块来说属于 外来 属性
  2. 传递参数       <Body username="test">
  3. 模块中接受参数  this.props.username    
   
b. 属性验证

## Refs 属性
1. 用于获取原生的html节点    
2. Refs是访问到组件内部DOM节点唯一可靠的方法
3. Refs会自动销毁对子组件的引用
4. 不要在 render 或者 render之前调用Refs
5. 不要滥用Refs 会造成性能等问题
