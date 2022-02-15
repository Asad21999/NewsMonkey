import loading from './loading.gif'
import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div>
          <div className="text-center">
          <img src={loading} alt="loading..." />
  
          </div>
            </div>
    )
  }
}
