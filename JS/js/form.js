
var botoAdicionar = document.querySelector("#adicionar-paciente");
botoAdicionar.addEventListener("click", function(event){event.preventDefault(); 

	var form = document.querySelector("#form-adicionar");
  var paciente = capturarDatosPacientes(form);
	var error = validarPaciente(paciente);
	if (error.length > 0) {
		exibirMensajes(error);
		return;
	}
	var ul = document.querySelector("#mensaje-error");
	ul.innerHTML = "";
	adicionarPacienteEnLaTabla(paciente); 
	form.reset();

	});
function adicionarPacienteEnLaTabla(paciente) {
	var pacienteTr = contruirTr(paciente);
	var tabla = document.querySelector("#tabla-pacientes");
  tabla.appendChild(pacienteTr);

}

function capturarDatosPacientes (form) {
	var paciente = {
		nombre: form.nombre.value,
		altura: form.altura.value,
		peso: form.peso.value,
		gordura: form.gordura.value,
		imc: calcularIMC(form.peso.value, form.altura.value)
	}
	return paciente;
}
function contruirTr(paciente) {
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");
	
	pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
	pacienteTr.appendChild(construirTd(paciente.peso, "info-peso") );
	pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));
	return pacienteTr;
}
function	construirTd(dato, clase) {
	var td = document.createElement("td");
	td.classList.add(clase);
	td.textContent = dato;
	return td;
}
function validarPaciente(paciente){
	var errores = [];
	if (!validarPeso(paciente.peso) ) {
		errores.push("el peso es incorrecto");
	} 
	if (!validarAltura(paciente.altura)) {
		errores.push("la altura es incorrecta");
	}
	if (paciente.nombre.length == 0 ) {
		errores.push("el nombre no puede estar vacío");
	}
	if (paciente.gordura.length == 0 ) {
		errores.push("el porcentaje de gordura no puede estar vacío");
	}
	return errores; 
}
function exibirMensajes(errores) {
	var ul = document.querySelector("#mensaje-error");
	ul.innerHTML = "";
	errores.forEach(function(error){
		var li = document.createElement("li");
		li.textContent = error;
		ul.appendChild(li)
	});
}
