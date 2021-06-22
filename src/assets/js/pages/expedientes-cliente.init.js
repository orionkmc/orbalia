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
  $("#datatable-docProyeCliente-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo("#datatable-docProyeCliente-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-ResProyeCliente-buttons")
    .DataTable(context8)
    .buttons()
    .container()
    .appendTo("#datatable-ResProyeCliente-buttons_wrapper .col-md-6:eq(0)");
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $($.fn.dataTable.tables(true))
      .DataTable()
      .columns.adjust()
      .responsive.recalc();
  });
});

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

$("#datepicker1").datepicker();
