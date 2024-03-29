import React, { Component } from 'react'

import { Provider, observer, inject } from 'mobx-react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'

import store from '../store'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='container-wrapper'>
      <h1>Welcome to React App</h1>
    </div>
  )
}

@inject('store')
@observer
class Page1 extends Component {
  handleClick = () => {
    this.props.store.addData()
  }

  render () {
    return (
      <div className='container-wrapper'>
        <h1>Page 1</h1>
        <button onClick={this.handleClick}>Add</button>
        {this.props.store.data.map(d => <h2>{d}</h2>)}
      </div>
    )
  }
}

@inject('store')
@observer
class Page2 extends Component {
  handleClick = () => {
    this.props.store.addData()
  }

  render () {
    return (
      <div className='container-wrapper'>
        <h1>Page 2</h1>
        <button onClick={this.handleClick}>Add</button>
        {this.props.store.data.map(d => <h2>{d}</h2>)}
      </div>
    )
  }
}

@inject('store')
@observer
class Page3 extends Component {
  handleClick = () => {
    this.props.store.addData()
  }

  render () {
    return (
      <div className='container-wrapper'>
        <h1>Page 3</h1>
        <button onClick={this.handleClick}>Add</button>
        {this.props.store.data.map(d => <h2>{d}</h2>)}
      </div>
    )
  }
}

@observer
class App extends Component {
  history = createHistory(this.props);

  render () {
    return (
      <Router history={this.history} children={this.props.children}>
        <Provider store={store}>
          <div>
            <Navbar history={this.history} />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/page1' component={Page1} />
              <Route path='/page2' component={Page2} />
              <Route path='/page3' component={Page3} />
            </Switch>

          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
