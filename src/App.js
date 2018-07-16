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

class App extends PureComponent {
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
}

export default App;
