/*
Template Name: Amezia - Responsive Bootstrap 4 Admin Dashboard
Author: Themesbrand
Version: 1.0.0
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Datatables Js File
*/

$(document).ready(function () {
  const context3 = {
    paging: true,
    info: true,
    searching: false,
    responsive: true,
    scrollX: false,
    language: {
      decimal: ",",
      thousands: ".",
      info: "Página _START_ de _END_ de _TOTAL_ entradas",
      infoEmpty: "",
      infoPostFix: "",
      infoFiltered: "",
      loadingRecords: "Cargando...",
      lengthMenu: "Mostrar _MENU_ Resultados",
      paginate: {
        first: "Primero",
        last: "Último",
        next: "Siguiente",
        previous: "Anterior",
      },
      processing: "Procesando...",
      search: "Buscar: ",
      searchPlaceholder: "",
      zeroRecords: "No se encontraron resultados",
      emptyTable: "Ningún dato disponible en esta tabla",
      aria: {
        sortAscending: ": Activar para ordenar la columna de manera ascendente",
        sortDescending:
          ": Activar para ordenar la columna de manera descendente",
      },
    },
  };
  $("#datatable-index-adm").DataTable(context3);
  $("#datatable-proyectos").DataTable(context3);
  $("#datatable-vencimiento").DataTable(context3);
  $("#datatable-fact-adm").DataTable(context3);
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $($.fn.dataTable.tables(true))
      .DataTable()
      .columns.adjust()
      .responsive.recalc();
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
