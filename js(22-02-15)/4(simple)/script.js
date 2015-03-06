$(document).ready(function () {
    $('.button-add').on('click', function () {
        var inputText = $('input').val();
        if (inputText) {
            $('input').val('');
            $('ul').append('<li>' + inputText + '</li>');
        } else {
            alert("Empty field");
        }
    });
    $('.button-remove').on('click', function () {
        $('ul').hide('fast');
        $('ul').empty();
        $('ul').show('fast');
    });
    $('.button-color').on('click', function () {
        var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);
        var randomColor = 'rgba(' + red + ',' + green + ',' + blue + ',1)';
        $('li:last-child').css('color', randomColor);
    });
    $(document).on('click', 'button', function () {
        if ($('li').length) {
            $('.button-color').show('slow');
            $('.button-remove').show('slow');
        } else {
            $('.button-remove').hide('slow');
            $('.button-color').hide('slow');
        }
        $('input').focus();
    });
    $('input').focus();
});