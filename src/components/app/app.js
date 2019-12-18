import React,{Component} from 'react';
import TodoList from '../todo-list';
import AddFormItem from '../add-form-item';

export default class App extends Component{

	idItem=1;
	addNewItem(name){
		return{
			name,
			id:this.idItem++,
			done:true}
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
	
	addItem=(name)=>{
		this.setState(({todo})=>{
			const newItem=this.addNewItem(name);
			return{todo:[...todo,newItem]}
		})
	};


	doneItem=(id)=>{
		console.log('click on Item with id =',id)
	};

	
	render(){
		const {todo}=this.state;
		return(
		<div>
			<TodoList 
				todoList={todo}
				onDeleteItem={this.deleteItem}
				onDoneItem={this.doneItem}
				 />
			<AddFormItem addItem={this.addItem} />
		</div>
		)
	}
}

		
