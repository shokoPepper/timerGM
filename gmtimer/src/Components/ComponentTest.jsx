import React, {Component} from 'react';
import '../App.css'
class ComponentTest extends Component{
    render(){
      return(
          <div className='CompWrapper'>
              <h2>{this.props.content}</h2>
          </div>
      )
    }
    
  };

export default ComponentTest