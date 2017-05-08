$(function () {

    // pickadate.js
    // ------------------------------------------------------------------
    $('.pickadate').pickadate();

    //-- Strings
    $('.pickadate-strings').pickadate({
        weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        showMonthsShort: true
    });

    //-- Buttons
    $('.pickadate-buttons').pickadate({
        today: '',
        clear: 'Clear selection',
        close: 'Cancel'
    });

    //-- Labels
    $(".pickadate-labels").pickadate({
        labelMonthNext: 'Go to the next month',
        labelMonthPrev: 'Go to the previous month',
        labelMonthSelect: 'Pick a month from the dropdown',
        labelYearSelect: 'Pick a year from the dropdown',
        selectMonths: true,
        selectYears: true
    });

    //-- Locale
    $(".pickadate-locale").pickadate({
        monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        today: 'aujourd\'hui',
        clear: 'effacer',
        formatSubmit: 'yyyy/mm/dd'
    });

    //-- Formats
    $(".pickadate-format").pickadate({
        format: 'You selecte!d: dddd, dd mmm, yyyy',
        formatSubmit: 'yyyy/mm/dd',
        hiddenPrefix: 'prefix__',
        hiddenSuffix: '__suffix'
    });

    //-- Hidden Name
    $(".pickadate-hidden").pickadate({
        formatSubmit: 'yyyy/mm/dd',
        hiddenName: true
    });

    //-- Editable
    $(".pickadate-editable").pickadate({
        editable: true
    });

    //-- Year & Months Dropdown
    $(".pickadate-dropdown").pickadate({
        selectYears: true,
        selectMonths: true
    });

    //-- Limit Years
    $(".pickadate-years").pickadate({
        showYears: 4
    });

    //-- Limit
    $(".pickadate-limit").pickadate({
        min: new Date(2015, 3, 20),
        max: new Date(2015, 7, 14)
    });

    //-- Disable Dates
    $(".pickadate-disable").pickadate({
        disable: [
            new Date(2015, 3, 13),
            new Date(2015, 3, 29)
        ]
    });

    //-- Events
    $(".pickadate-events").pickadate({
        onStart: function () {
            console.log('Hello there :)')
        },
        onRender: function () {
            console.log('Whoa.. rendered anew')
        },
        onOpen: function () {
            console.log('Opened up')
        },
        onClose: function () {
            console.log('Closed now')
        },
        onStop: function () {
            console.log('See ya.')
        },
        onSet: function (context) {
            console.log('Just set stuff:', context)
        }
    });

    //-- Close on user actions
    $(".pickadate-action").pickadate({
        closeOnSelect: false,
        closeOnClear: false
    });
});