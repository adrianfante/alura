//import {checkComplete} from './components/checkComplete.js';
//import {deleteIcon} from './components/deleteIcon.js';
	const btn = document.querySelector('[data-form-btn]');
	const createTask =(evento) => {
		evento.preventDefault();
		const input = document.querySelector('[data-form-input]');
		const value = input.value;
		const list =document.querySelector('[data-list]');
		input.value = "";
		const task = document.createElement('li');
		task.classList.add('card');
		const taskContent = document.createElement('div');
		taskContent.appendChild(checkComplete())
		const tittleTask = document.createElement('span');
		tittleTask.classList.add('task');
		tittleTask.innerText = value;
		taskContent.appendChild(tittleTask);
		//task.innerHTML = content;
		task.appendChild(taskContent);
		task.appendChild(deleteIcon());
		list.appendChild(task)
	};

	const checkComplete = () => {
		const i = document.createElement('i');
		i.classList.add('far', 'fa-check-square', 'icon');
		i.addEventListener('click', completeTask);
		return i
	}
	const completeTask = (event) => {
		const element = event.target;
		element.classList.toggle("fas");
		element.classList.toggle("completeIcon");
		element.classList.toggle('far');
	};

	const deleteIcon = () => {	
		const i = document.createElement('i');
		i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
		i.addEventListener('click', deleteTask);
		return i;
	};
	const deleteTask = (event) => {
		const parent = event.target.parentElement;
		parent.remove();

	};
	btn.addEventListener("click", createTask);
