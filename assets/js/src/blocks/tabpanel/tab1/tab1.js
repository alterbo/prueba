import $ from 'jquery';
var template = require('./tab1.hbs');

$(document).ready(function() {
    var data = {
        tabTitle: 'tab 1',
        role: 'desarrollador',
        title: 'alberto ferrero orte',
        perfil: [
            {
                id: 1,
                name: 'developer',
                title: 'desarrollador front',
                skills: [
                    'frontero desde 1979',
                    '8 cafés al día'
                ]
            },
            {
                id: 2,
                name: 'architect',
                title: 'arquitecto de información',
                skills: [
                    'siempre quise construir casas'
                ]
            },
            {
                id: 3,
                name: 'runner',
                title: 'corredor de fondo',
                skills: [
                    'antes hacía medias maratones',
                    'hoy apenas llego a coger el bus',
                    'en el futuro espero automatizar mis tareas'
                ]
            },
            {
                id: 4,
                name: 'what',
                title: 'soy un chico fácil',
                skills: [
                    'me gusta mi trabajo, así que digo que sí a todo',
                    'los retos difíciles',
                    'las bicicletas redondas',
                    'el vino en formato hexadecimal'
                ]
            },
            {
                id: 5,
                name: 'services',
                title: 'Unlimited Services',
                skills: [
                    'maquetación aragonesa',
                    'servicios unisex',
                    'modelado de los datos',
                    'gran capacidad para pruebas de concepto',
                    'el código entendible por mi abuela',
                    'el usuario siempre debería tener una sonrisa en el rostro'
                ]
            }
        ]
    };
    
    var tabsContainer = document.getElementById('section1');
    tabsContainer.innerHTML = template(data);

    const options = tabsContainer.querySelectorAll('input[type="radio"]');
    $(options).each(function(index, option) {
        if ( index === 0 ) {
            $(option).addClass('selected');
        }
        $(option).click(function() {
            $('.tab-content__option').removeClass('selected');
            $(this).closest('.tab-content__option').addClass('selected');
        });
    });
});
