// Will Jantscher and Rex Ayers
// npm init
// npm install
// npm install express
// npx create-react-app shopping-app

// to run: npm start in /src cd


import './App.css';
import React from 'react'
import List from './list'


class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      list: [{
        item: 'banannas',
        qty: 4,
        unit: 'bunch',
      }], //item, qty, unit
    }
  }

  render () {
    return (
      <div className="App">
      <header className="App-header">
        <p>
          <List
            list={this.state.list}
          />
        </p>
        <a>
        </a>
      </header>
    </div>
    )
  }
}

export default App;
