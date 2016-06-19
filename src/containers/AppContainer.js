import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import HomeView from '../routes/Home/components/HomeView'
import SplashPage from '../routes/Home/components/SplashPage'
import { Router, Route, IndexRoute, hashHistory } from "react-router"

class AppContainer extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }



  render () {
    const {store } = this.props

    return (
      <Provider store={store}>
      <Router history={hashHistory}>
              <Route name="splash" path="/splash" component={SplashPage}></Route>
              <Route name="data" path="/data" component={HomeView}></Route>
    </Router>


      </Provider>
    )
  }
}

export default AppContainer
