# 项目
## 第三方模块
###1. styled-components

 (1) 意义: 把所有的样式写成模块, 避免样式冲突, 布局也就是用的新模块(但是很蛋疼的是, 没有sass等代码提示, 感觉很辣鸡)
 
 (2) 用法: 
 		
 		(1) yarn add styled-components -S
 		
		(2) 把原先 style.css  --> style.js (模块能正确解析)
		
		(3) style.css
		
				(1) import { injectGlobal } from 'styled-components';
	
				(2)  定义全局的样式: injectGlobal `Css的样式`, 需要引入入口文件index.js
				
				(3) 局部的样式: 当成在写组件
				
							(1) import styled from 'styled-components'
							
							(2) export const HeaderWrapper = styled.a.attrs({ href: '/'})` css样式`
				
							(3) 引用: import {HeaderWrapper} from './style.js'
							
								用: <HeaderWrapper></ HeaderWrapper> 
								就代表着带有样式的, <a href="/"><a>
								
(3) 技巧:  实现React Component 和 style.js 的传值

	(1) React Component 动态传:  <ImgItem imgUrl='xxx'/>
	
	(2) style.js 接受值: 
	
				export const ImgItem = styled.div`
				
					background: url(${props => props.imgUrl})
				`
				
### 2. iconfont 图标

(1) 先下载到项目, 然后只需要 `.eot`, `.svg`, `.ttf`, `.woff`, `iconfont.css` 五个文件

(2) 把 `iconfont.css` 改成 `iconfont.js`, 把 `@font-face`里面的路径全部加上`./`, 保证指向正确

(3) 把 `@font-face`, `.iconfont`里面的保留, 其他删除

(4) 引入 import { injectGlobal } from 'styled-components'

(5) injectGlobal`@font-face, .iconfont` 定义为全局样式, 然后引入进入口文件中

(6) 在需要用的地方 `<i className='iconfont'>&#xe636;</i>` 就能显示字体图标了


### 3. combineReducers 

(1) 意义: 防止 reducer.js 过大而进行的拆分, `import { combineReducers } from 'reudx'`

(2) 使用: 

		(1) 对应的每个页面下建造 store -> reducer.js
		
		(2) 大的store下引入各个页面的 reducer.js  -> import handerReucer from '../Header/store/reducer'
		
		(3) 引入	import { combineReducers } from 'reudx-immutable' 会把state封装为immutable对象
		
		(4) export default combineReducers({
				header: handerReucer
			})
			
		(5) 取值的时候就是: header.对应的值
		
(3) 优势: 每个页面都可以创建一个store, 分别对`reducer`, `actionCreators.js`, `actionTypes.js` 做了拆分

(4) 技能点: `import * as actionCreators from  './store/actionCreators'` , 就相当于引入了所有

### 4. immutable.js(facebook提供)

(1) 概念: 生成一个immutable对象, 这个对象不可改变

(2) 意义: 使得 store里面的`state`(事实在reducer中定义默认值) 不可变, `store 里面的state 只可以store自己更新`, 减少人为因素造成的问题

(3) 核心Api: 

		(1) 赋值: 
		
			(1) 单值:	state.set('show', true)
			
			(2) 多值:  state.merge({'show': true, 'test': false})
			
		(2) 取值: 
		
			(1) 一层: state.get('show')
			
			(2) 多层: state.getIn(['header', 'show'])
			
		(3) 把immutable对象 转换成 普通对象
		
			 value.toJS()
			 
		(4) 把普通对象 转换成 immutable对象
		
			fromJS(value)
			
		(5) 原来的immutable对象 数组中追加普通的数组 生成新的immutable数组
		
			immutableObj.caoncat(普通数组)
		
			

(3) 使用: 
	
	(1) reducer.js中: 
	
			(1) 引用: import { fromJs } from 'immutable';
	
			
			(2) 定义: const defaultState = fromJs({
						focused: false 		// 就加了fromJs
					})
			
			(2) 改变值: return state.set('focused': false).set('isShow', true)     // 抛弃原来的深拷贝那一套, 使用immutable的方法
						
				
			(3) 这里因为immutable对象不可更改, 所以set方法是, 结合之前的immutable对象的值 和 设置的值, 返回一个全新的对象
						
	(2) React Components 中
	
			(1) 获取值: mapStateToProps = (state) => {
					focused: state.header.get('focused')   // 即调用immutable对象的get方法
				}
				
			(2) 注意: 因为取到的都包装成了immutable对象, 使用打印出来可能不是预期的样式
				
	(3) actionCreators.js
	
		(1) 考虑到axios请求回来的值, 是一个普通对象, 如在reducer执行 `state.set('list', axios请求回来的值)`store 的 state 又会从`immutable对象`变成 `普通对象`
		
		(2) 解决: 在actionCreator 中, 同样引入 immutable, 然后执行
		
			export const headerInitListAction = (list) => ({
			  type: INIT_LIST,
			  list: fromJS(list)
			})	
				
### 5.redux-immutable 第三方模块

(1) 意义: 我们使得每个页面是 immutable对象, 现在是最大的那个store的reducer 成为immutable对象

(2) 使用:

		(1) src -> store -> reducer.js 设置
		
			(1) 引入: import { combineReducers } from 'redux-immutable';
			
			(2) 改变引入方式, 就把defaultState也设置了immutable对象
			
		(2) React Component	使用
			
			(1) 获取值: mapStateToProps = (state) => {
					focused: state.get('header').get('focused')   // 即使得state也是immutable对象
					focused: state.getIn(['header', 'focused'])   // 与上面的是一个意思
				}
				
				
### 6. react-router-dom 路由

(1) 概念: react4.0 , 第三方模块

(2) 使用: 
	
(1) app.js 配置路由
	
	(1) 引入: import { BrowserRouter, Route } from 'react-router-dom';
	
	(2) 使用: 
		<Provider store={store}> 		// react-redux的放在最外面 
	      <Fragment>						// 必须有个根节点
	        <Header />
	        <BrowserRouter>				// 被包含的内容可以使用路由
	          <Fragment>				// 必须由一个根节点
	          
	          	// path是路由规则, render是匹配的页面组件
	            <Route path='/' exact component={Home}></Route>
	            
	            // exact是路由必须完全一样才展示相应页面
	            <Route path='/detail' exact component={Detail}}></Route>
	            
	          </Fragment>
	        </BrowserRouter>
	      </Fragment>
      </Provider>
      
(2) React-Component 路由跳转
   
	(1) 使用: impot {Link} from 'react-router-dom'
	
	(2) 跳转: <Link to='/detail'></Link>
	
(3) 路由携带参数

	(1) 动态路由获取参数

			(1) app.js  -> 配置路由 -> <Route path='/detail/:id' exact component={Detail}></Route>
			
			(2) React-Component -> <Link to={'/detail/' + item.get('id')}></Link>
		
			(3) 获取: this.props.match.params.id
			
	(2) 比较麻烦
	   
(4) 重定向导航: `<Redirect to='/'>`

(5) withRouter: 让组件有能力获得router里面的所有参数和内容

		(1) 正常的组件, 没有代码分割, this.props.match.params.id 就可以取得参数
		
		(2) 异步组件, 需要引入 import { withRouter } from 'react-router-dom'
		
		(3) 使用: connect(mapState, mapDispatch)(withRouter(Detail))
		
		(4) 搭配: react-loadable 第三方模块使用
	   	

				
### 6. 小总结
1. immutable.js

	1. 意义: (1) 把每个页面store里面的state包装成 immutable 对象, 
			(2)把axios请求回来的对象也从 普通对象 包装成 immutable对象

	2. 反映: `focused: state.header.get('focused')`
 

2. redux-immutable(第三方模块)

	1. 意义: 把src 下面的store的state包装成 immutable 对象

	2. 反映: `focused: state.get('header').get('focused')` 即 `focused: state.getIn(['header', 'focused'])`

3. 需要变成immutable对象的:

	(1) src -> store -> state
	
	(2) src -> React Component -> store -> state
	
	(3) axios -> 返回的值 -> 执行actionCreators之前 -> immutable对象

3. mock数据 

	1. 请求 axios.get('/api/getList.json') 地址

	2. public -> api -> getList.json -> 放数据

	3. 请求就能得到数据	


5. redux-thunk 

	1. 意义: 使得actionCreator 原本返回纯函数  -> 可以返回函数 -> 并在store中自动执行

	2. 使得axios请求代码的拆分变得可能

4. axios 请求数据的代码拆分到 每个页面 -> store -> reducerCreators.js

### 头部逻辑
1. 搜索框动画
		
		(1) redux + react-redux 实现state的管理
		
		(2) CSSTransition 实现搜索框宽度变化
		
		(3) state的变化 -> CSSTransition -> 实现动画

2. 热门搜索的逻辑

		1. 请求数据, axios + redux-thunk 请求数据 (数据)
	
		2. 热门搜索的显示, 绑定两个值, 输入框聚焦, 热门搜索鼠标移入 (展示)
	
		3. 热门搜索的分页 (分页)

				(1) 总页数: 获取数据的时候改变总页数
				
				(2) 页码: 点击'换一批' -> state中页数的增加 -> 组件的props变化 -> 
				
					render函数重新渲染 -> 换了一页(虚拟DOM的存在, 使得不会很耗性能)
					
				(3) 每一页的生成:
					for (let i = (page - 1) * 10; i < page * 10; i++) {
			          newItem.push(
			          	<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
			          )      
					}
		

3. 换一批动画

		(1) ref获取dom -> 下述方法传参到换一批的点击事件 -> 获取到dom就递增transform: rotate(360deg)

		
4. 节省不必要的axios的请求(热门词)

		(1) 每次搜索框聚焦都去发送热门词请求 -> 根据下述的方法 -> 判断store是否存在 -> 存在了就不请求了

5. 技巧: 

	调用 mapDispatchToProps 的方法时 -> 往方法传参 -> 不论是store里面的, 还是自身的ref
	
	`onClick = {() => handelChangeList(page, store里面动态变化的, 代表ref的dom)}`

6. store: redux  redux-store immutable redux-immutable

	样式: styled-components
	
	数据请求: axios redux-thunk
	
### 首页

1. 项目结构: 

	pages -> 页面 -> components(各个小组件) + store(仓库) + index.jsx(页面主体) + style.js(样式)

2. 加载更多: 

		(1) reducer.js 定义: page
		
		(2) 点击事件中, 传入当前page -> actionCreators中的 axios请求就能获得page
		
		(3) 请求完成后, 再调用更新数据时, 记得(page + 1) 就实现了分页

3. 回到顶部: 
		
		(1) 回到顶点: 原生的api: window.scrollTo(0, 0), 直接回到顶点
		
		(2) 是否显示: reducer.js中定义变量 (决定是否显示 '回到顶部')
		
				{ isShowBack ? <BackTop onClick={handleScrollTop}>顶部</BackTop> : null }
				
		(3) componentDidMount中 给window绑定scroll事件(记得页面销毁时解绑)
		
				window.addEventListener('scroll', this.props.changeScroll)
				
		(4) document.documentElement.scrollTop 能监听到距离顶部多远, 进而判断改变是否显示
		
4. 性能优化: PureComponent
			
			(1) 概念: 底层就是实现了: 在 shouldComponentUpdate 对props更新的判断
			
			(2) PureComponent + immutable.js 搭配 没有问题
			
			(3) 如果项目没有用immutable, 那还是用Component
			
5. 跳转详情页: 

		(1) <Link to='/detail'></Link> 单页面应用
		
		
### 详情页

### 登录页
1. ref的问题

	(1) ref: React自带的
	
	(2) innerRef: styled-components创建出来的组件里面的ref, 用法是一样的
	
### 用户鉴权

	(1) 获取store里面存储的登录状态
	
	(2) 登录 -> 呈现登录 -> if else的判断
	
	(3) 不登录 -> return <Redirect to='/login'>
	
### 异步组件

(1) 加快首屏加载: (相当于webpack的代码分割)
	
	(1) 引入第三方模块: react-loadable , https://github.com/jamiebuilds/react-loadable
	
	(2) 在页面中创建 loadable.js 文件
	
	(3) loadable.js
			
			import Loadable from 'react-loadable';
			import React from 'react';
			
			const LoadableComponent = Loadable({
			  loader: () => import('./'),       // 需要异步加载的组件
			  loading () {
			    return <div>正在加载...</div>    // 组件没加载出来之前的等待页面, 企业级开发中需要用到
			  }
			});
			
			export default () => <LoadableComponent/>  // 返回的一个已经切割好的组件
			
	(4) App.js 
	
			原先引入: import Detail from './pages/detail'; -> 找index.js
			
			现在引入: import Detail from './pages/detail/loadable'; 找loadable.js
			
	(5) React Component 中
	
		引入: import { withRouter } from "react-router-dom";
		
		使用: export default connect(mapState, mapDispatch)(withRouter(Detail))
	
	



## React 的性能优化
1. 事件绑定this放在 construct做, `this.handleClick = this.handleClick.bind(this)`

 			(1)这样保证只会执行一次, 并且最早执行, 而放在render函数内部, 每次更新都会重新绑定
 			
2. shouldComponentUpdate钩子函数: 

```
		shouldComponentUpdate (nextProps, nextState) {
		    // 假如props有更新才调用, 而不是父render函数调用就调用子的render函数
		    if(nextProps.content !== this.props.content) {
			      return true
		    } else {
			      return false
		    }
		  }
```
3. PureComponent 和 Component 一样

		(1) 在底层实现了上面的shouldComponentUpdate性能优化
		
		(2) 必须搭配immutable.js使用才不会出bug
		

3. 引入immutable.js, 保证store的state不被改变, 而只能被store自己覆盖

4. Brunch (文档中很多关于生产环境的性能优化)

		(1) 安装uglify-js-brunch 插件
		
		(2) brunch build -p 会影藏掉react的错误信息
		
5. withRouter + react-loadable 做代码分割, 加快首屏的加载
	
	
	
## 最新版本: 删除了componentWillUpdate, componentWillReceiveProps