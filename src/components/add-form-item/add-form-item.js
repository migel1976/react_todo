import React, {Component} from 'react';

export default class AddFormItem extends Component{
	state={
		name:''
	}

	changeText=(e)=>{
		this.setState({
			name:e.target.value})
	}

	submit=(e)=>{
		e.preventDefault();
		this.props.addItem(this.state.name);
		this.setState({name:''});
	}
	
	render(){
		const {addItem}=this.props;
		return(
			<form onSubmit={this.submit}>
			  <input 
			     value={this.state.name}
		             onChange={this.changeText}	
			     placeholder='Введите текст' />
			  <button>Добавить</button>
			</form>
		)
	}
}
