'use strict'

import React, { Component } from 'react'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '2'
      // checked: true
    }

  }

  render () {
    return (
      <div>
        <form 
          onSubmit={(e) => {
            e.preventDefault()
            console.log('event', e)
          }}

          onChange={(e) => {
            console.log('name', e.target.name)
            console.log('value', e.target.value)
          }}
        >
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

          <select multiple value={['1', '2']} onChange={(e) => {
              this.setState({
                value: e.target.value
              })
            }}>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
          </select>

          <textarea name='name' defaultValue={'testando\nasdasdas'} />
          <button type='submit'>Send</button>
        </form>
      </div>
    )
  }
}

export default App
