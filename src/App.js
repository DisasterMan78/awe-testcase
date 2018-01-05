import './scss/App.scss';

import React, {Component} from 'react'
import * as awe from './js/components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <awe.DisplayCode
          htmlSelector={'.awe-display-code'}
          jsxFile={'/src/App.js'}
          jsxTag={'awe.DisplayCode'}
        />
      </div>
    )
  }
}

export default App
