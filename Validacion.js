const Valida= document.getElementById('Dar');

//const form = document.getElementById('campo');
const inputs = document.querySelectorAll('#form input');

function accion(){
    let ancla = document.getElementsByClassName('nav-enlace');
    for( let i=0; i < ancla.length; i++){
        ancla[i].classList.toggle('nav-enlace-desaparece');
    }
}

function accion_1(){

    console.log('Esta funcionando el boton Menu');
}


const validacion = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {

    switch (e.target.name){

        case "usuario":
            validarCampo(validacion.usuario, e.target, 'nombre');
            break;
        
        case "password":
             validarCampo(validacion.password, e.target, 'password');
             break;
    }
}


const validarCampo = (expresion, input, campo)  => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    }

}