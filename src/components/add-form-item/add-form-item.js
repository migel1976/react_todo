import React, {Component} from 'react';

export default class AddFormItem extends Component{
	render(){
		return(
			<form>
			  <input placeholder='Введите текст' />
			  <button>Добавить</button>
			</form>
		)
	}
}
