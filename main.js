$(document).ready(function() {
    $(window).scroll(function() {
        
        function appendText() {
            alert('hello');
        }

        if ($(this).scrollTop() > 50) {
            $('#scroll').css(
                {
                    'opacity': '1',
                    'position': 'fixed',
                    'top': '0',
                    'left': '0',
                }
            );

        } 
    });
    $('body').click(appendText());
});