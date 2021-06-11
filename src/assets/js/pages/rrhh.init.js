/*
Template Name: Amezia - Responsive Bootstrap 4 Admin Dashboard
Author: Themesbrand
Version: 1.0.0
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Datatables Js File
*/
$(document).ready(function () {
  const context4 = {
    paging: true,
    info: true,
    searching: true,
    lengthChange: true,
    responsive: true,
    scrollX: false,
    buttons: ["excel", "pdf", "colvis"],
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
      buttons: {
        excel: "Excel",
        pdf: "PDF",
        colvis: "Columnas Visibles",
      },
    },
  };

  const context10 = {
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: false,
    buttons: false,
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
      buttons: {
        excel: "Excel",
        pdf: "PDF",
        colvis: "Columnas Visibles",
      },
    },
  };

  $("#datatable-usuarios-rrhh-buttons")
    .DataTable(context4)
    .buttons()
    .container()
    .appendTo("#datatable-usuarios-rrhh-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-historialUsua-rrhh-buttons")
    .DataTable(context4)
    .buttons()
    .container()
    .appendTo("#datatable-historialUsua-rrhh-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-depCrearRol-buttons")
    .DataTable(context10)
    .buttons()
    .container()
    .appendTo("#datatable-depCrearRol-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-PerIniCrearRol-buttons")
    .DataTable(context10)
    .buttons()
    .container()
    .appendTo("#datatable-PerIniCrearRol-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-PerExpCrearRol-buttons")
    .DataTable(context10)
    .buttons()
    .container()
    .appendTo("#datatable-PerExpCrearRol-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-PerProcCrearRol-buttons")
    .DataTable(context4)
    .buttons()
    .container()
    .appendTo("#datatable-PerProcCrearRol-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-PerRrhhCrearRol-buttons")
    .DataTable(context4)
    .buttons()
    .container()
    .appendTo("#datatable-PerRrhhCrearRol-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-depUsuaIntRR-buttons")
    .DataTable(context4)
    .buttons()
    .container()
    .appendTo("#datatable-depUsuaIntRR-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-AccEspUsuaIntRR-buttons")
    .DataTable(context4)
    .buttons()
    .container()
    .appendTo("#datatable-AccEspUsuaIntRR-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-otrosDocUsuaIntRR-buttons")
    .DataTable(context4)
    .buttons()
    .container()
    .appendTo("#datatable-otrosDocUsuaIntRR-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-historialUsuaIntRR-buttons")
    .DataTable(context4)
    .buttons()
    .container()
    .appendTo("#datatable-historialUsuaIntRR-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-gesPerUsuaRR-buttons")
    .DataTable(context4)
    .buttons()
    .container()
    .appendTo("#datatable-gesPerUsuaRR-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-EspUsuaRR-buttons")
    .DataTable(context4)
    .buttons()
    .container()
    .appendTo("#datatable-EspUsuaRR-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-ProcUsuaRR-buttons")
    .DataTable(context4)
    .buttons()
    .container()
    .appendTo("#datatable-ProcUsuaRR-buttons .col-md-6:eq(0)");
  $("#datatable-RRHHUsuaRR-buttons")
    .DataTable(context4)
    .buttons()
    .container()
    .appendTo("#datatable-ProcUsuaRR-buttons .col-md-6:eq(0)");
  $("#datatable-depUsuaSPRR-buttons")
    .DataTable(context4)
    .buttons()
    .container()
    .appendTo("#datatable-depUsuaSPRR-buttons_wrapper .col-md-6:eq(0)");
});

!(function ($) {
  "use strict";

  var AdvancedForm = function () {};

  (AdvancedForm.prototype.init = function () {
    // Date Picker
    $("#date-range2").datepicker({
      toggleActive: true,
    });
    $("#date-range3").datepicker({
      toggleActive: true,
    });
  }),
    //init
    ($.AdvancedForm = new AdvancedForm()),
    ($.AdvancedForm.Constructor = AdvancedForm);
})(window.jQuery),
  //initializing
  (function ($) {
    "use strict";
    $.AdvancedForm.init();
  })(window.jQuery);

$("#datepicker1").datepicker();
$("#datepicker2").datepicker();
$("#datepicker3").datepicker();
$("#datepicker4").datepicker();
