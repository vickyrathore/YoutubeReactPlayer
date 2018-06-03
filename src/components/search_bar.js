import React, {Component} from 'react';

class SearchBar extends Component{

	constructor(props){
		super(props);
		this.state={term:''};
		
	}

	render() {
		return (<div className="search-bar">
					<input onChange={event => this.onInputchange(event.target.value)}
						   onKeyPress={event => this.onkeyPress(event)} 
						   value={this.state.term} />
			</div>
		);
	}

	onkeyPress(event){
	//	if(event.key=='Enter'){	
			this.props.onSearchTermChanged(this.state.term);
	//	}
	}

	onInputchange(term){
		this.setState({term});
	}
}

export default SearchBar;