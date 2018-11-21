import $ from 'jquery';
var template = require('./tab2.hbs');

$(document).ready(function() {
    var data = {
        exclusivo: [
            {
                title: 'Lorem ipsum dolor sit amet',
                opcional: 'opcional',
                clase: '',
                secciones: [
                    {
                        title: 'Lorem ipsum dolor sit amet',
                        imagen: 'lorem-ipsum',
                        textos: [
                            'Mauris augue nibh, consectetur non ornare et, bibendum vel lorem. Etiam velit elit, ultrices feugiat rhoncus tempor, mollis nec massa. Etiam pulvinar fermentum posuere. In molestie turpis dui, quis vestibulum ipsum feugiat semper. Duis in dictum elit.'
                        ],
                        extras: [
                            'Pellentesque id sapien non est vulputate cursus.',
                            'Pellentesque bibendum vitae justo euismod laoreet. Sed feugiat eleifend viverra. Donec euismod nulla in felis laoreet, nec auctor lacus dapibus.',
                            'Cras iaculis vestibulum felis ut aliquet. Suspendisse ultricies lobortis urna eget pharetra. Curabitur a suscipit lorem.'
                        ]
                    },
                    {
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        imagen: 'lorem-ipsum',
                        textos: [
                            'Mauris augue nibh, consectetur non ornare et, bibendum vel lorem. Etiam velit elit, ultrices feugiat rhoncus tempor, mollis nec massa. Etiam pulvinar fermentum posuere. In molestie turpis dui, quis vestibulum ipsum feugiat semper. Duis in dictum elit.',
                            'In euismod dolor a gravida efficitur. Morbi congue imperdiet tortor sit amet semper. Donec eleifend hendrerit mi sit amet varius. Vivamus magna orci',
                            'ermentum ac tincidunt eget, suscipit id nulla. Donec tincidunt augue nec sem volutpat ultricies at vitae velit'
                        ],
                        extras: [
                            'Pellentesque id sapien non est vulputate cursus.',
                            'Pellentesque bibendum vitae',
                            'Cras iaculis vestibulum felis ut aliquet.',
                            'Suspendisse ultricies lobortis urna eget pharetra',
                            'Curabitur a suscipit lorem.'
                        ]
                    }
                ]
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                opcional: 'opcional',
                clase: 'collapsed',
                secciones: [
                    {
                        title: 'Lorem ipsum dolor sit amet',
                        imagen: 'lorem-ipsum',
                        textos: [
                            'Mauris augue nibh, consectetur non ornare et, bibendum vel lorem. Etiam velit elit, ultrices feugiat rhoncus tempor, mollis nec massa. Etiam pulvinar fermentum posuere. In molestie turpis dui, quis vestibulum ipsum feugiat semper. Duis in dictum elit.'
                        ],
                        extras: [
                            'Pellentesque id sapien non est vulputate cursus.',
                            'Pellentesque bibendum vitae justo euismod laoreet. Sed feugiat eleifend viverra. Donec euismod nulla in felis laoreet, nec auctor lacus dapibus.',
                            'Cras iaculis vestibulum felis ut aliquet. Suspendisse ultricies lobortis urna eget pharetra. Curabitur a suscipit lorem.'
                        ]
                    },
                    {
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        imagen: 'lorem-ipsum',
                        textos: [
                            'Mauris augue nibh, consectetur non ornare et, bibendum vel lorem. Etiam velit elit, ultrices feugiat rhoncus tempor, mollis nec massa. Etiam pulvinar fermentum posuere. In molestie turpis dui, quis vestibulum ipsum feugiat semper. Duis in dictum elit.',
                            'In euismod dolor a gravida efficitur. Morbi congue imperdiet tortor sit amet semper. Donec eleifend hendrerit mi sit amet varius. Vivamus magna orci',
                            'ermentum ac tincidunt eget, suscipit id nulla. Donec tincidunt augue nec sem volutpat ultricies at vitae velit'
                        ],
                        extras: [
                            'Pellentesque id sapien non est vulputate cursus.',
                            'Pellentesque bibendum vitae',
                            'Cras iaculis vestibulum felis ut aliquet.',
                            'Suspendisse ultricies lobortis urna eget pharetra',
                            'Curabitur a suscipit lorem.'
                        ]
                    }
                ]
            }
        ]
    };
    
    var tabsContainer = document.getElementById('section2');
    tabsContainer.innerHTML = template(data);

    $('.panel__button').click(function() {
        $(this).closest('.panel').toggleClass('collapsed');
    });
    $('.panel__info-button').click(function() {
        $(this).next('.panel__info').toggleClass('collapsed');
    });
});
