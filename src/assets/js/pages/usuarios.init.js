/*
Template Name: Amezia - Responsive Bootstrap 4 Admin Dashboard
Author: Themesbrand
Version: 1.0.0
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Datatables Js File
*/
$(document).ready(function () {
  const context6 = {
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
  $("#datatable-usuarios-buttons")
    .DataTable(context6)
    .buttons()
    .container()
    .appendTo("#datatable-usuarios-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-inf-soc-usuario-buttons")
    .DataTable(context6)
    .buttons()
    .container()
    .appendTo("#datatable-inf-soc-usuario-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-contac-usua-soc-buttons")
    .DataTable(context6)
    .buttons()
    .container()
    .appendTo("#datatable-contac-usua-soc-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-expedientes-soc-buttons")
    .DataTable(context6)
    .buttons()
    .container()
    .appendTo("#datatable-expedientes-soc-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-contratos-soc-buttons")
    .DataTable(context6)
    .buttons()
    .container()
    .appendTo("#datatable-contratos-soc-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-subven-soc-buttons")
    .DataTable(context6)
    .buttons()
    .container()
    .appendTo("#datatable-subven-soc-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-minimis-soc-buttons")
    .DataTable(context6)
    .buttons()
    .container()
    .appendTo("#datatable-minimis-soc-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-fact-soc-buttons")
    .DataTable(context6)
    .buttons()
    .container()
    .appendTo("#datatable-fact-soc-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-expedientes-aut-buttons")
    .DataTable(context6)
    .buttons()
    .container()
    .appendTo("#datatable-expedientes-aut-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-subven-aut-buttons")
    .DataTable(context6)
    .buttons()
    .container()
    .appendTo("#datatable-subven-aut-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-minimis-aut-buttons")
    .DataTable(context6)
    .buttons()
    .container()
    .appendTo("#datatable-minimis-aut-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-fact-aut-buttons")
    .DataTable(context6)
    .buttons()
    .container()
    .appendTo("#datatable-fact-aut-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-infGener-buttons")
    .DataTable(context6)
    .buttons()
    .container()
    .appendTo("#datatable-infGener-buttons_wrapper .col-md-6:eq(0)");
  $("#datatable-infAmp-buttons")
    .DataTable(context6)
    .buttons()
    .container()
    .appendTo("#datatable-infAmp-buttons_wrapper .col-md-6:eq(0)");
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $($.fn.dataTable.tables(true))
      .DataTable()
      .columns.adjust()
      .responsive.recalc();
  });
});

$("#datepicker1").datepicker();
$("#datepicker2").datepicker();
$("#datepicker3").datepicker();
$("#datepicker4").datepicker();
$("#datepicker5").datepicker();
$("#datepicker6").datepicker();
$("#datepicker7").datepicker();
$("#datepicker8").datepicker();
