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
  $("#datatable-inf-soc-expediente-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo("#datatable-inf-soc-expediente-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-repre-preExp-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo("#datatable-repre-preExp-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-otrosContPreExp-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo("#datatable-otrosContPreExp-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-otrosContExpInt-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo("#datatable-otrosContExpInt-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-fechasClavesExpInt-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo("#datatable-fechasClavesExpInt-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-usuaAccesoExpInt-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo("#datatable-usuaAccesoExpInt-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-repre-expInt-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo("#datatable-repre-expInt-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-histCambExpInt-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo("#datatable-histCambExpInt-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-docProyec-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo("#datatable-docProyec-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-tareasPendExp-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo("#datatable-tareasPendExp-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-inf-soc-otrosContExpediente-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo(
      "#datatable-inf-soc-otrosContExpediente-buttons_wrapper .col-md-6:eq(0)"
    );
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
    $("#date-range6").datepicker({
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
$("#datepicker5").datepicker();
$("#datepicker6").datepicker();
$("#datepicker7").datepicker();
$("#datepicker8").datepicker();
$("#datepicker9").datepicker();
$("#datepicker10").datepicker();
$("#datepicker11").datepicker();
$("#datepicker12").datepicker();

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
