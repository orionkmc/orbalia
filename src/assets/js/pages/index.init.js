/*
Template Name: Amezia - Responsive Bootstrap 4 Admin Dashboard
Author: Themesbrand
Version: 1.0.0
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Datatables Js File
*/

$(document).ready(function () {
  $("#datatable").DataTable({
    paging: false,
    info: false,
    searching: false,
  });
  $("#datatable2").DataTable({
    paging: false,
    info: false,
    searching: false,
  });
});

!(function ($) {
  "use strict";

  var MorrisCharts = function () {};

  //creates area chart
  (MorrisCharts.prototype.createAreaChart = function (
    element,
    pointSize,
    lineWidth,
    data,
    xkey,
    ykeys,
    labels,
    lineColors
  ) {
    Morris.Area({
      element: element,
      pointSize: 0,
      lineWidth: 0,
      data: data,
      xkey: xkey,
      ykeys: ykeys,
      labels: labels,
      resize: true,
      gridLineColor: "rgba(108, 120, 151, 0.1)",
      hideHover: "auto",
      lineColors: lineColors,
      fillOpacity: 0.6,
      behaveLikeLine: true,
    });
  }),
    (MorrisCharts.prototype.init = function () {
      //creating area chart
      var $areaData = [
        { y: "2007", a: 0 },
        { y: "2008", a: 150 },
        { y: "2009", a: 60 },
        { y: "2010", a: 180 },
        { y: "2011", a: 90 },
        { y: "2012", a: 75 },
        { y: "2013", a: 30 },
      ];
      this.createAreaChart(
        "morris-area-example",
        0,
        0,
        $areaData,
        "y",
        ["a"],
        ["Series A"],
        ["#009688"]
      );
    }),
    //init
    ($.MorrisCharts = new MorrisCharts()),
    ($.MorrisCharts.Constructor = MorrisCharts);
})(window.jQuery),
  //initializing
  (function ($) {
    "use strict";
    $.MorrisCharts.init();
  })(window.jQuery);
