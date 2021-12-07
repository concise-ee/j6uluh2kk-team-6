import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './Header'
import {Christmas} from './Christmas'
import {getChristmas} from '../services/ChristmasService'

class App extends Component {

  state = {
    christmas: {
      isItChristmasYet: true
    }
  }

  async componentDidMount() {
    let christmas = await getChristmas()
    console.log(christmas);
    this.setState({christmas: christmas})
  }

  render() {

    return (
      <div className="App">
        <div>
          <Christmas christmas={this.state.christmas}></Christmas>
        </div>
      </div>
    );
  }
}

export default App;