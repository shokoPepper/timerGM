import React, {Component} from 'react';
import './App.css';
import ComponentTest from './Components/ComponentTest'

class App extends Component{
  render(){
    return(
      <div className='root'>
        <div className='MainWrapper'>
          <ComponentTest content='chop chop chop'/>
          <ComponentTest content='slash slash'/>
          
        </div>
      </div>
      
    )
  }
}

export default App;
