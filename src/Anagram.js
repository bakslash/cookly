import React from "react";
import './Anagram.css'

class Anagram extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {word1:'', word2:''}
	
	this.handleWord1Change =this.handleWord1Change.bind(this);
	this.handleWord2Change =this.handleWord2Change.bind(this);
	this.onSubmit =this.onSubmit.bind(this);

	}
	handleWord1Change (event) {
		this.setState({word1:event.target.value})
		
	}
	handleWord2Change (event) {
		this.setState({word2:event.target.value})
		
	}
	onSubmit (event) {
		event.preventDefault();
                    
		const check1 = `${this.state.word1}.split('')`
		//.sort().join('')`;
		const check2 = `${this.state.word2}.split('').sort().join('')`;
         
			if (check1===check2)
			//{return alert("this word is not an anagram")}
			{console.log(check1)}

			//else if(check1!==check2)
			//{return alert("this word is an anagram")}
		
				
			
		   
	}

	render() {
		return (
			<div className="anagram">
				<form onSubmit={this.onSubmit} >
					<input type="text" 
					placeholder="word 1" 
					value ={this.state.word1} 
					onChange={this.handleWord1Change} />
					<br />
					<input type="text" 
					placeholder="word 1" 
					value ={this.state.word2} 
					onChange={this.handleWord2Change}/>
					<br />

					<button>Check Anagram</button>
				</form>

				
			</div>
		);
	}
}

export default Anagram;
