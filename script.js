// Avoiding cut, copy and paste using jquery elements inside ajax library

$(document).ready(function() {
    $('body').bind('cut copy paste', function(event) {
        event.preventDefault();
    });
});