import React,{Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component{
	render(){
		const {name, onDeleteItem, done, onDoneItem}=this.props;
		console.log('done equals ', done);
		let className='todo-list-item';
		if (done)
			{
			  className=className+' done';
			  console.log('className = ', className);
			}
		return(
			<div>
				<span className='todo-list-item'>
				  <span className={className}
					onClick={onDoneItem}
					>{name}</span>
				  <button onClick={onDeleteItem}>Удалить</button>
				</span>
			</div>
		)
	}
};
