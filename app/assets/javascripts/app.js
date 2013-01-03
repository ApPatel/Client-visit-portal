
$(function(){
    if($("#devise_notice").text() != ""){
        createDialog("<h3 class='heading3 alert-message'>"+ $("#devise_notice").text() +"</h3>");
        $("#devise_notice").remove();
    }
    if($("#devise_alert").text() != ""){
        createDialog("<h3 class='heading3 alert-message'>"+ $("#devise_alert").text() +"</h3>");
        $("#devise_alert").remove();
    }
    function createDialog( message) {
        $.colorbox({
            html : message,
            transition: 'fade',
            width: 600,
            height: 130,
            scrolling: false
        });
        setTimeout(function() {
            $.colorbox.close();
        }, 1400);
    }

});




$(function() {

    $( "#visit_time" ).datepicker({
        showOn: "button",
        buttonImage: "/assets/calendar_icon.jpg",
        buttonImageOnly: true,
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        showAnim: 'slideDown',
        dateFormat: $.datepicker.ISO_8601,
        onSelect: function( selectedDate ) {
            $( "#to1" ).datepicker( "option", "minDate", selectedDate );
        }
    });

})