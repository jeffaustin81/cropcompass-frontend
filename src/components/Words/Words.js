import React from 'react'
import CuteButton from '../CuteButton/CuteButton'

export default class Words extends React.Component {
    render(){
      return(
        <div>
            <h2>{this.props.title}</h2>
            <p>{this.props.children}</p>
        </div>
      )
    }
}
