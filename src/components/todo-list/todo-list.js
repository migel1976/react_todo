import React,{Component} from 'react';
import TodoListItem from '../todo-list-item';

export default class TodoList extends Component{
	render(){
		const {todoList,onDeleteItem, onDoneItem}=this.props;
		const component=todoList.map((item)=>{
				const {id,...itemProps}=item;
				return(<li key={id}>
						<TodoListItem 
							      {...itemProps}
							      onDeleteItem={()=>onDeleteItem(id)} 
							      onDoneItem={()=>onDoneItem(id)}/></li>)
		});
		return(<ul>{component}</ul>)
	}
};
	
