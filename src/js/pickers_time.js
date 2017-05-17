$(function () {
    // Basic Time Picker
    $(".timepicker").pickatime();

    // Extend the default picker options for all instances.
    $('.timepicker-translation').pickatime({
        clear: 'Effacer'
    });

    // Hide clear button.
    $('.timepicker-clear').pickatime({
        clear: ''
    });

    // Formats
    $('.timepicker-formats').pickatime({
        // Escape any “rule” characters with an exclamation mark (!).
        format: 'T!ime selected: h:i a',
        formatLabel: '<b>h</b>:i <!i>a</!i>',
        formatSubmit: 'HH:i',
        hiddenPrefix: 'prefix__',
        hiddenSuffix: '__suffix'
    });

    // Intervals
    $('.timepicker-intervals').pickatime({
        interval: 150
    });

    // Disable Times
    $('.timepicker-disable').pickatime({
        disable: [
            new Date(2016, 3, 20, 4, 30),
            new Date(2016, 3, 20, 9)
        ]
    });

    // User Actions
    $('.timepicker-user').pickatime({
        closeOnSelect: false,
        closeOnClear: false
    });

    // Events
    $('.timepicker-events').pickatime({
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
});