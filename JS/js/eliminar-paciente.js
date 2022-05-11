var pacientes = document.querySelectorAll(".paciente");
/*
pacientes.forEach(function(paciente){
	paciente.addEventListener("dblclick",function(){
		this.remove();
	});
})
*/
var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function (event) {
	event.target.parentNode.classList.add("fadeOut");
	setTimeout(function (){
		event.target.parentNode.remove();
	},500)	
});
