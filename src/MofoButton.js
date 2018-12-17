import React from 'react';


class MofoButton extends React.Component {
	constructor(props) {
		 super(props);
        // le props est les propriété passer dans el call du compoenent. En les globalisant (super(props)), le child a accès aux données du parents. il est donc possible de passer des parametre à l'enfant et vice versa



		 this.clickMe = this.clickMe.bind(this);
		 let color = 'red';
		if(props.color){
			color = props.color;
			
		}
		 this.state = {
			bg: color,
			texte: 'Envoyé',
		 };

	  }
 
	 clickMe(){

		this.setState({
			bg: 'green',
			texte: 'Partie!',
		
		});

		
		if(this.props.actionSpecifiqueAttribuerAucomponent){this.props.actionSpecifiqueAttribuerAucomponent(this.state.bg)};
		
	}
	render() {
		 return (
			<input type="button" style={{backgroundColor:this.state.bg}}value={this.state.texte} onClick={this.clickMe}/>
			
		 );
	  }
}
export default MofoButton;