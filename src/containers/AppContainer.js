import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import HomeView from '../routes/Home/components/HomeView'

class AppContainer extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }



  render () {
    const {store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
        <HomeView />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
