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
    searching: true,
    language: {
      search: "Buscar",
    },
  });
  //Buttons examples
  var table = $("#datatable-buttons").DataTable({
    paging: false,
    info: false,
    searching: true,
    lengthChange: false,
    buttons: ["excel", "pdf", "colvis"],
    language: {
      buttons: {
        excel: "Excel",
        pdf: "PDF",
        colvis: "Columnas Visibles",
      },
      search: "Buscar",
    },
  });

  table
    .buttons()
    .container()
    .appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)");
});
