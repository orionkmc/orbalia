/*
Template Name: Amezia - Responsive Bootstrap 4 Admin Dashboard
Author: Themesbrand
Version: 1.0.0
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Datatables Js File
*/

$(document).ready(function () {
  const context9 = {
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
  $("#datatable-procedimientos-buttons")
    .DataTable(context9)
    .buttons()
    .container()
    .appendTo("#datatable-procedimientos-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-opcPrecios-buttons")
    .DataTable(context9)
    .buttons()
    .container()
    .appendTo("#datatable-opcPrecios-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-opcPreciosEdit-buttons")
    .DataTable(context9)
    .buttons()
    .container()
    .appendTo("#datatable-opcPreciosEdit-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-enlacesProcEdit-buttons")
    .DataTable(context9)
    .buttons()
    .container()
    .appendTo("#datatable-enlacesProcEdit-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-fechasClavesDocProc-buttons")
    .DataTable(context9)
    .buttons()
    .container()
    .appendTo("#datatable-fechasClavesDocProc-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-fechasClavesDocProcEdit-buttons")
    .DataTable(context9)
    .buttons()
    .container()
    .appendTo(
      "#datatable-fechasClavesDocProcEdit-buttons_wrapper .col-md-6:eq(0)"
    );
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $($.fn.dataTable.tables(true))
      .DataTable()
      .columns.adjust()
      .responsive.recalc();
  });
});

$(document).ready(function () {
  const context1 = {
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
  $("#datatable-enlacesProc-buttons")
    .DataTable(context1)
    .buttons()
    .container()
    .appendTo("#datatable-enlacesProc-buttons_wrapper .col-md-6:eq(0)");
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $($.fn.dataTable.tables(true))
      .DataTable()
      .columns.adjust()
      .responsive.recalc();
  });
});

!(function ($) {
  "use strict";

  var AdvancedForm = function () {};

  (AdvancedForm.prototype.init = function () {
    // Date Picker
    $("#date-range").datepicker({
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

$("#datepicker20").datepicker();
$("#datepicker21").datepicker();
$("#datepicker22").datepicker();

$(document).ready(function () {
  $("#range_04").ionRangeSlider({
    skin: "flat",
    type: "double",
    grid: true,
    min: 0,
    max: 40000,
    from: 700,
    to: 10000,
  });
});
