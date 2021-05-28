/*
Template Name: Amezia - Responsive Bootstrap 4 Admin Dashboard
Author: Themesbrand
Version: 1.0.0
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Datatables Js File
*/
$(document).ready(function () {
  const context8 = {
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
  //Buttons examples
  $("#datatable-expedientes-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo("#datatable-expedientes-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-histExpedientes-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo("#datatable-histExpedientes-buttons_wrapper .col-md-6:eq(0)");
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
    $("#date-range4").datepicker({
      toggleActive: true,
    });
    $("#date-range5").datepicker({
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
