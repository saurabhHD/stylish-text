$(function(){
var intv = setInterval(function(){ $(".copybutton").html('<i class="fa fa-copy text-secondary fa-2x"></i>'); }, 2000);
  $("body").on('click',".copybutton",function() { 
$(".copybutton").html('<i class="fa fa-copy text-secondry fa-2x"></i>');
$(this).html('<i class="fa fa-check-circle text-primary fa-2x"></i>'); 
clearInterval(intv);
});
});

    var clipboard = new ClipboardJS('.copybutton');
    clipboard.on('success', function(e) {
        //console.log(e);
    });
    clipboard.on('error', function(e) {
        //console.log(e);
    });

 