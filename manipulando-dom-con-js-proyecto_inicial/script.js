const btn = document.querySelector('[data-form-btn]');
const createTask =(evento) => {
	//console.log(evento);
	evento.preventDefault();
	const input = document.querySelector('[data-form-input]');
	console.log(input.value);
	//console.log("crear tarea");

};

btn.addEventListener("click", createTask);

