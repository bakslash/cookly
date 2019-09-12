import React from "react";
import './Anagram.css'

class Anagram extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {word1:'', word2:''}
	
	this.handleWordChange =this.handleWordChange.bind(this);
	this.onSubmit =this.onSubmit.bind(this);

	}
	
	handleWordChange (e) {
		this.setState({
			[e.target.id]:e.target.value})
		
	}
	onSubmit (e) {
		e.preventDefault();
		                
		const check1=  `${this.state.word1}`;
		const check2= `${this.state.word2}`;
	
			if (check1.split('').sort().join('')===check2.split('').sort().join(''))
			{return alert("this word is an anagram")}

			else {
				return alert("this word is  not an anagram")
			}
			
			
	}

	render() {
		return (
			<div className="anagram">
				<form onSubmit={this.onSubmit} >
					<input type="text" 
					placeholder="word 1" 
					value ={this.state.word1} 
					id = "word1"
					onChange={this.handleWordChange} />
					<br />
					<input type="text" 
					placeholder="word 1"
					id = "word2" 
					value ={this.state.word2} 
					onChange={this.handleWordChange}/>
					<br />

					<button>Check Anagram</button>
				</form>

				
			</div>
		);
	}
}

export default Anagram;
