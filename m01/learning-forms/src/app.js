'use strict'

import React, { Component } from 'react'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Initial value',
      checked: true
    }

  }

  render () {
    return (
      <div>
        <form>
          <input type='text' value={this.state.value} onChange={(e) => {
              console.log(e.nativeEvent)
              this.setState({
                value: e.target.value
              })
            }} />

          <label>
            <input type='checkbox'
              value='my-checkbox'
              defaultChecked />
            checkbox
          </label>

          <input type='radio' name='rd' value='1' defaultChecked /> Radio 1
          <input type='radio' name='rd' value='2' /> Radio 2

        </form>
      </div>
    )
  }
}

export default App
