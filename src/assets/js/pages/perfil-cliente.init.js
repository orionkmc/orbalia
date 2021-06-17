$(function () {
  "use strict";

  // Knob Chart

  $(".knob").knob({
    format: function (value) {
      return value + "%";
    },
  });

  $(".knob").each(function () {
    var $this = $(this);
    var myVal = $this.attr("rel");
    $this.knob();

    $({
      value: 0,
    }).animate(
      {
        value: myVal,
      },
      {
        duration: 2000,
        easing: "swing",
        step: function () {
          $this.val(Math.ceil(this.value)).trigger("change");
        },
      }
    );
  });
});
