//import {checkComplete} from './components/checkComplete.js';
//import {deleteIcon} from './components/deleteIcon.js';
const btn = document.querySelector('[data-form-btn]');
const addTask = (evento) => {
	evento.preventDefault();

	const input = document.querySelector('[data-form-input]');
	const calendar = document.querySelector('[data-form-date]');
	const list = document.querySelector('[data-list]');

	const value = input.value;
	const date = calendar.value;
	const dateFormat = moment(date).format("DD/MM/YYYY");

	if (value === '' || date === '') {
		return
	}	
	input.value = "";
	calendar.value = "";

	const complete = false;
	const taskObj = {
		value,
		dateFormat,
		complete,
		id:uuid.v4()
	};
	list.innerHTML="";
	const taskList = 	JSON.parse(localStorage.getItem("tasks")) || [];
	taskList.push(taskObj);
	localStorage.setItem("tasks", JSON.stringify(taskList));
	readTasks();

};

const createTask =({value, dateFormat, complete, id}) => {
	const task = document.createElement('li');
	task.classList.add('card');

	const taskContent = document.createElement('div');
	const check = checkComplete(id)
	if (complete) {
		check.classList.toggle("fas");
		check.classList.toggle("completeIcon");
		check.classList.toggle('far');

	}
	//sessionStorage.setItem("tasks", JSON.stringify(taskObj));
	taskContent.appendChild(check)

	const tittleTask = document.createElement('span');
	tittleTask.classList.add('task');
	tittleTask.innerText = value;
	taskContent.appendChild(tittleTask);
	const dateElement = document.createElement('span');
	dateElement.innerHTML = dateFormat;
	task.appendChild(taskContent);
	task.appendChild(dateElement);
	task.appendChild(deleteIcon(id));
	return task;
};

const checkComplete = (id) => {
	const i = document.createElement('i');
	i.classList.add('far', 'fa-check-square', 'icon');
	i.addEventListener('click', (event) => completeTask(event, id));
	return i
}
const completeTask = (event, id) => {
	const element = event.target;
	element.classList.toggle("fas");
	element.classList.toggle("completeIcon");
	element.classList.toggle('far');
	const tasks = JSON.parse(localStorage.getItem("tasks"));
	const index = tasks.findIndex(item => item.id === id);
	tasks[index]['complete'] = !tasks[index]['complete'];
	localStorage.setItem('tasks', JSON.stringify(tasks));
};

const deleteIcon = (id) => {	
	const i = document.createElement('i');
	i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
	i.addEventListener('click', () => deleteTask(id));
	return i;
};
const deleteTask = (id) => {
	const li = document.querySelector('[data-list]');

	const tasks = JSON.parse(localStorage.getItem('tasks'));
	const index = tasks.findIndex( (item) => item.id === id);
	tasks.splice(index,1);
	localStorage.setItem('tasks', JSON.stringify(tasks));
	li.innerHTML = "";
	readTasks();

};
const readTasks = () => {
	const list = document.querySelector("[data-list]");
	const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
	const dates = uniqueDates(taskList);
	orderDates(dates);
	dates.forEach(date => {
		const dateMoment = moment(date, 'DD/MM/YYYY');
		list.appendChild(dateElement(date));
		taskList.forEach((task) => {
			const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
			const diff = dateMoment.diff(taskDate);
			if (diff === 0) {

				list.appendChild(createTask(task));
			}
		});
	})
}
const dateElement = (date) => {
	const dateelement = document.createElement('li');
	dateelement.classList.add('date');
	dateelement.innerHTML = date;
	return dateelement;
}
const uniqueDates = (tasks) => {
	const unique = [];
	tasks.forEach((task) => {
		if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat)
	});
	return unique;
};
const orderDates = (dates) => {
	return dates.sort((a, b) => {
		const firstDate = moment(a, "DD/MM/YYYY");
		const secondDate = moment(b, "DD/MM/YYYY");
		return firstDate-secondDate;
	})
}
btn.addEventListener("click", addTask);
readTasks();
