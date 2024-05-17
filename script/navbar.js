$(document).ready(function() {
    $(".navbar-menu-icon").click(function() {
      $("#navbar-content").slideToggle("fast", function() {
        if ($("#navbar-content").is(":visible")) {
          $("body").css("overflow", "hidden");
        } else {
          $("body").css("overflow", "");
        }
      });
    });
  });
  
  