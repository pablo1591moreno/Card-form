// FORMULARIO --- NUMERO --------------------------------------------------------------------------------------
const cardNumberTarjet = document.querySelector(`.numeroParaTarjeta`);
let numeroValidacion = false;

cardNumberTarjet.addEventListener(`keyup`, (e) => {
    let valorNumero = e.target.value;
    cardNumberTarjet.value = valorNumero
        .replace(/\s/g, ``).replace(/\D/g, ``).replace(/([0-9]{4})/g, `$1 `).trim();
    const placeholder = cardNumberTarjet.placeholder

    document.getElementsByClassName("numeroDeTarjeta")[0].innerText = valorNumero || placeholder

    if (valorNumero === ' ' || valorNumero.length < 19) {
        numeroValidacion = false;
    } else {
        numeroValidacion = true;
    }

    console.log(parseInt(valorNumero))

});


// FORMULARIO --- NOMBRE --------------------------------------------------------------------------------------
const cardNameTarjet = document.querySelector(`.nombreParaTarjeta`);
let nombreValidacion = false;

cardNameTarjet.addEventListener(`keyup`, (e) => {
    let valorLetra = e.target.value;
    const placeholder = e.target.placeholder;

    document.getElementsByClassName("nombreDeTarjeta")[0].innerText = valorLetra.toUpperCase() || placeholder

    if (valorLetra === '') {
        nombreValidacion = false;
    } else {
        nombreValidacion = true;
    }

});



// FORMULARIO --- FECHA --------------------------------------------------------------------------------------

// MES -------------------
const cardMesTarjet = document.querySelector(`.mes`);
let mesValidacion = false;

for (let i = 1; i <= 12; i++) {

    document.getElementsByClassName("mes")[0].innerHTML += `<option value="${i}">${i}</option>`

}

cardMesTarjet.addEventListener('change', (e) => {
    let valorMes = e.target.value;
    document.getElementsByClassName("mesDeTarjeta")[0].innerHTML = valorMes < 10 ? 0 + valorMes : valorMes

    if (valorMes === '0') {
        mesValidacion = false;
    } else {
        mesValidacion = true;
    }

    console.log(parseInt(valorMes))

})



// AÑO -------------------
const cardAnoTarjet = document.querySelector(`.ano`);
let anoValidacion = false;

for (let i = 2015; i <= 2030; i++) {

    document.getElementsByClassName("ano")[0].innerHTML += `<option value="${i}">${i}</option>`

}

cardAnoTarjet.addEventListener('change', (e) => {
    let valorAno = e.target.value < 1 ? e.target.value : e.target.value.slice(2)
    document.getElementsByClassName("anoDeTarjeta")[0].innerHTML = valorAno


    if (valorAno === '00') {
        anoValidacion = false;
    } else {
        anoValidacion = true;
    }

    console.log(parseInt(valorAno))

})



// FORMULARIO --- CVC --------------------------------------------------------------------------------------
const cardCvcTarjet = document.querySelector(`.cvc`);
let cvcValidacion = false;

cardCvcTarjet.addEventListener(`keyup`, (e) => {

    let valorCvc = e.target.value;
    cardCvcTarjet.value = valorCvc
        .replace(/\D/g, ``)

    const placeholder = e.target.placeholder;
    document.getElementsByClassName("cvcTarjeta")[0].innerText = valorCvc || placeholder

    if (valorCvc.length < 3) {
        cvcValidacion = false;
    } else {
        cvcValidacion = true;
    }

    console.log(parseInt(valorCvc))

});



// BUTTON CONFIRMAR --------------------------------------------------------------------------------------
const button = document.querySelector(`.button`);

button.addEventListener(`click`, (e) => {
    e.preventDefault()

    console.log(
        "nombre:", nombreValidacion,
        " numero:", numeroValidacion,
        " mes:", mesValidacion,
        " año:", anoValidacion,
        " CVC:", cvcValidacion)


    if (numeroValidacion && cvcValidacion && anoValidacion && mesValidacion && nombreValidacion == true) {

        const formulario = document.querySelector(`form`);
        formulario.style.display = 'none'

        const tarjetas = document.querySelector(`.tarjetas`);
        tarjetas.style.display = 'none'


        const completo = document.querySelector(`.oculto`);
        completo.style.display = 'block'

    } else {

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

    const finalizar = document.querySelector(`.finalizar`);

    finalizar.addEventListener(`click`, (e) => {

        location.reload()

    })

}) 