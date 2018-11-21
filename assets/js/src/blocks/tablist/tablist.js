import $ from 'jquery';
var template = require('./tablist.hbs');

$(document).ready(function() {
    var data = {
        tabs: [
            {
                id: 1,
                title: 'perfil'
            },
            {
                id: 2,
                title: 'intereses'
            }
        ]
    };
    
    var tabsContainer = document.getElementById('tabs');
    tabsContainer.innerHTML = template(data);

    const tablist = tabsContainer.querySelector('ul');
    const tabs = tablist.querySelectorAll('a');

    $(tabs).each(function(index, tab) {
        if ( index === 0 ) {
            $(tab).addClass('active');
        }
        $(tab).click(function() {
            var target = $(this.rel);
            if ( $(tab).not('.active') ) {
                $('[id^=section]').attr('hidden', true);
                target.attr('hidden', false);
            }
            $(tabs).removeClass('active');
            $(this).addClass('active');
        });
    });
});