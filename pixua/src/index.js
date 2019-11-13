import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './Components/app-header.js'
import SearchPanel from './Components/search-panel.js'
import TodoList from './Components/todo-list.js'
const App = () =>{
	const todoData = [
		{ label : 'Drink Coffee', important: false, id : 1},
		{ label : 'Make Awesome App ', important: false, id : 2},
		{ label : 'Have a lunch', important: true, id : 3}
	];
	return(
		<div>
			<AppHeader />
			<SearchPanel />
			<TodoList todos = { todoData } />
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById('root'));