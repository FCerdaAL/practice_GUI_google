


//Hover Mcdonalds

const hover_mcdonalds = document.querySelector('.Google_Apps');
const hover_text = document.querySelector('.tercero');


hover_mcdonalds.addEventListener('mouseenter', () => {

    hover_text.classList.add('active');
})

// La clase active va a seguir agregada incluso después de dejar el área
// con el mouse, por lo tanto se debe sacar:

hover_mcdonalds.addEventListener('mouseleave', () => {

    hover_text.classList.remove('active');
})






////////////////
// Hover_tick///
////////////////

const hover_tick = document.querySelector('.correo');
const hover_text_correo = document.querySelector('.cuarto');


hover_tick.addEventListener('mouseenter', () => {

    hover_text_correo.classList.add('active2');
})

// La clase active va a seguir agregada incluso después de dejar el área
// con el mouse, por lo tanto se debe sacar:

hover_tick.addEventListener('mouseleave', () => {

    hover_text_correo.classList.remove('active2');
})

/////////////////////
// click_mcdonalds///
/////////////////////

const click_mcdonalds = document.querySelector('.Google_Apps');
const click_text = document.querySelector('.click_tercero');


click_mcdonalds.addEventListener('click', () => {

    click_text.classList.toggle('show_click');
})

