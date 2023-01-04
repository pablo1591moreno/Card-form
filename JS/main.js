// FORMULARIO --- NUMERO --------------------------------------------------------------------------------------
const cardNumberTarjet = document.querySelector(`.numeroParaTarjeta`);
let numeroValidacion = false;

cardNumberTarjet.addEventListener(`keyup`, (e) => {
    // Obtener el valor del evento y actualizar el valor del elemento
    let valorNumero = e.target.value;
    cardNumberTarjet.value = valorNumero
        .replace(/\s/g, ``).replace(/\D/g, ``).replace(/([0-9]{4})/g, `$1 `).trim();

    // Actualizar el contenido del elemento con la clase "numeroDeTarjeta"
    const placeholder = cardNumberTarjet.placeholder;
    document.getElementsByClassName("numeroDeTarjeta")[0].innerText = valorNumero || placeholder;

    // Establecer la variable "numeroValidacion" en verdadero o falso según corresponda
    numeroValidacion = valorNumero !== ' ' && valorNumero.length >= 19;
});

// FORMULARIO --- NOMBRE --------------------------------------------------------------------------------------
const cardNameTarjet = document.querySelector(`.nombreParaTarjeta`);
let nombreValidacion = false;


cardNameTarjet.addEventListener(`keyup`, (e) => {
    // Obtener el valor del evento y el placeholder del elemento
    let valorLetra = e.target.value;
    const placeholder = e.target.placeholder;

    // Actualizar el contenido del elemento con la clase "nombreDeTarjeta"
    document.getElementsByClassName("nombreDeTarjeta")[0].innerText = valorLetra.toUpperCase() || placeholder

    // Establecer la variable "nombreValidacion" en verdadero o falso según corresponda
    nombreValidacion = valorLetra !== '';
});


// FORMULARIO --- FECHA --------------------------------------------------------------------------------------

// MES -------------------
const cardMesTarjet = document.querySelector(`.mes`);
let mesValidacion = false;

for (let i = 1; i <= 12; i++) {

    document.getElementsByClassName("mes")[0].innerHTML += `<option value="${i}">${i}</option>`

}

cardMesTarjet.addEventListener('change', updateMesTarjeta);

function updateMesTarjeta(event) {
    // Obtiene el valor del elemento y lo almacena en 'valorMes'
    const valorMes = event.target.value;
    // Muestra el valor del mes en el elemento con la clase 'mesDeTarjeta'
    document.querySelector('.mesDeTarjeta').innerHTML = valorMes < 10 ? `0${valorMes}` : valorMes;
    // Establece la variable 'mesValidacion' en verdadero si el valor del mes es diferente a cero
    mesValidacion = valorMes !== '0';

}


// AÑO -------------------
const cardAnoTarjet = document.querySelector(`.ano`);
let anoValidacion = false;

// Iteramos desde el año 2015 hasta 2030
for (let i = 2015; i <= 2030; i++) {

    document.getElementsByClassName("ano")[0].innerHTML += `<option value="${i}">${i}</option>`
}

cardAnoTarjet.addEventListener('change', (e) => {
    // Tomamos el valor seleccionado
    let valorAno = e.target.value < 1 ? e.target.value : e.target.value.slice(2)
    // Actualizamos el contenido del elemento con clase "anoDeTarjeta" con el valor seleccionado
    document.getElementsByClassName("anoDeTarjeta")[0].innerHTML = valorAno

    if (valorAno === '00') {
        anoValidacion = false;
    } else {
        anoValidacion = true;
    }

});




// FORMULARIO --- CVC --------------------------------------------------------------------------------------
const cardCvcTarjet = document.querySelector(`.cvc`);
let cvcValidacion = false;

cardCvcTarjet.addEventListener(`keyup`, (e) => {
    
    let valorCvc = e.target.value;
    // Remplazamos los caracteres que no sean dígitos con una cadena vacía
    cardCvcTarjet.value = valorCvc.replace(/\D/g, ``);
    // Tomamos el placeholder del elemento
    const placeholder = e.target.placeholder;
    // Actualizamos el contenido del elemento con clase "cvcTarjeta" con el valor del elemento o el placeholder si no hay valor
    document.getElementsByClassName("cvcTarjeta")[0].innerText = valorCvc || placeholder;
  
    if (valorCvc.length < 3) {
      cvcValidacion = false;
    } else {
      cvcValidacion = true;
    }
  
  });
  


// BUTTON CONFIRMAR --------------------------------------------------------------------------------------
const button = document.querySelector(`.button`);

button.addEventListener(`click`, (e) => {
    // Prevenimos la acción predeterminada del botón
    e.preventDefault()

    // Si todas las validaciones son verdaderas
    if (numeroValidacion && cvcValidacion && anoValidacion && mesValidacion && nombreValidacion == true) {

        // Ocultamos el formulario y las tarjetas
        const formulario = document.querySelector(`form`);
        formulario.style.display = 'none'
        const tarjetas = document.querySelector(`.tarjetas`);
        tarjetas.style.display = 'none'

        // Mostramos el elemento oculto
        const completo = document.querySelector(`.oculto`);
        completo.style.display = 'block'

    
    } else {

        // Mostramos un mensaje de error para cada elemento que falta rellenar
        const faltaNombre = document.querySelector(`.faltaNombre`);
        faltaNombre.innerText = nombreValidacion ? '' : 'falta rellenar'

        const faltaNumero = document.querySelector(`.faltaNumero`);
        faltaNumero.innerText = numeroValidacion ? '' : 'falta rellenar'

        const faltaMes = document.querySelector(`.faltaMes`);
        faltaMes.innerText = mesValidacion ? '' : 'falta rellenar'

        const faltaAno = document.querySelector(`.faltaAno`);
        faltaAno.innerText = anoValidacion ? '' : 'falta rellenar'

        const faltaCvc = document.querySelector(`.faltaCvc`);
        faltaCvc.innerText = cvcValidacion ? '' : 'falta rellenar'
    }

    // Agregamos un event listener al elemento finalizar
    const finalizar = document.querySelector(`.finalizar`);
    finalizar.addEventListener(`click`, (e) => {
        // Recargamos la página cuando se haga clic en finalizar
        location.reload()
    })
})
