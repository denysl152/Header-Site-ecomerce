import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <nav>
          <div class='nav-wrapper'>
            <a href='#' class='brand-logo left'>Logo</a>
            <ul id='nav-mobile' class='right hide-on-med-and-down'>
              <li>
                <a href='#'><i class='material-icons'>shopping_cart</i></a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}
export default App
