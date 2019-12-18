import React,{Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component{
	render(){
		const {name, onDeleteItem}=this.props;
		let className='todo-list-item';
		return(
			<div>
				<span className={className}>{name}</span>
				<button onClick={onDeleteItem}>Удалить</button>
			</div>
		)
	}
};
