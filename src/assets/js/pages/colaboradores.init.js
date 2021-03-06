/*
Template Name: Amezia - Responsive Bootstrap 4 Admin Dashboard
Author: Themesbrand
Version: 1.0.0
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Datatables Js File
*/

$(document).ready(function () {
  const context2 = {
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
  $("#datatable-acceso-buttons")
    .DataTable(context2)
    .buttons()
    .container()
    .appendTo("#datatable-acceso-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-histContra-buttons")
    .DataTable(context2)
    .buttons()
    .container()
    .appendTo("#datatable-histContra-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-inf-sociedad-colab-buttons")
    .DataTable(context2)
    .buttons()
    .container()
    .appendTo("#datatable-inf-sociedad-colab-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-contac-colab-soc-buttons")
    .DataTable(context2)
    .buttons()
    .container()
    .appendTo("#datatable-contac-colab-soc-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-colaboradores-buttons")
    .DataTable(context2)
    .buttons()
    .container()
    .appendTo("#datatable-colaboradores-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-refer-soc-buttons")
    .DataTable(context2)
    .buttons()
    .container()
    .appendTo("#datatable-refer-soc-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-liq-soc-buttons")
    .DataTable(context2)
    .buttons()
    .container()
    .appendTo("#datatable-liq-soc-buttons_wrapper .col-md-6:eq(0)");
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $($.fn.dataTable.tables(true))
      .DataTable()
      .columns.adjust()
      .responsive.recalc();
  });
});
$("#datepicker").datepicker();
$("#datepicker1").datepicker();
$("#date-range").datepicker({
  toggleActive: true,
});
