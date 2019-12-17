import React,{Component} from 'react';
import TodoList from '../todo-list';

export default class App extends Component{

	idItem=1;
	addNewItem(name){
		return{
			name,
			id:this.idItem++}
	};

	state={
		todo:
		[
		  this.addNewItem('Aloha'),
		  this.addNewItem('from'),
		  this.addNewItem('Aruba')
		]
	}
	
	deleteItem=(id)=>{
//		console.log('id=',id)
		this.setState(({todo})=>{
			const idx=todo.findIndex((item)=>item.id===id);
			return{
				todo:[
				      ...todo.slice(0,idx),
				      ...todo.slice(idx+1)
					]
			}
		})
	}
	
	render(){
		const {todo}=this.state;
		return(
		<div>
			<TodoList 
				todoList={todo}
				onDeleteItem={this.deleteItem}
				 />
		</div>
		)
	}
}

		
