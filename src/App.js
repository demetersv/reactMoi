import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import MofoButton from './MofoButton';
class App extends Component {
 
 constructor(props) {
    super(props);
	 // ici on defini le this de la fonction, il correspondera au this du compoenent APP
	 
	  this.changeColor = this.changeColor.bind(this);
	  
	  
	  
	  
	  
    this.state = {
      bg: 'yellow'
    };
  }
  
  
  changeColor(fromChild){
		this.changeColor = this.changeColor.bind(fromChild);
		this.setState({
			bg: fromChild,
		
		});
  }
	
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
		   <p className="App-intro">
        </p>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
			    <Clock ></Clock>
				 <div style={{height: '200px', width: '200px', backgroundColor: this.state.bg}}>
					 <MofoButton actionSpecifiqueAttribuerAucomponent={this.changeColor} color={'pink'}></MofoButton>
					 <MofoButton actionSpecifiqueAttribuerAucomponent={this.changeColor} ></MofoButton>
			
				</div>
        </div>
       
		       

      </div>
    );
  }
}

export default App;
