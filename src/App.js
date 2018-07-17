import React, { PureComponent, Fragment } from "react";
import "antd/dist/antd.css";
import "./style";
import "./statics/iconfont/iconfon";
import Header from "./common/header";
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Writer from './pages/writer';
import axios from 'axios';

class App extends PureComponent {
  constructor (props) {
    super(props)
    this.checkToken = this.checkToken.bind(this)
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Header></Header>
            <Route path='/' exact component={Home}/>
            <Route path='/detail/:id' exact component={Detail}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/writer' exact component={Writer}/>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
  componentDidMount () {
    this.checkToken()
  }
  checkToken () {
    //http request 请求拦截器，有token值则配置上token值
    axios.interceptors.request.use(
      config => {
        // const token = localStorage.getItem('token')
        const token = 'i_have_check_token'
        if (token) { // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      err => {
        return Promise.reject(err);
      });
  }
}

export default App;
