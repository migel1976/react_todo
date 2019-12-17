import React,{Component} from 'react';

export default class TodoListItem extends Component{
	render(){
		const {name, onDeleteItem}=this.props;
		return(
			<div>
				<span>{name}</span>
				<button onClick={onDeleteItem}>Удалить</button>
			</div>
		)
	}
};
