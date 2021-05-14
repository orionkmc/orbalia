/*
Template Name: Amezia - Responsive Bootstrap 4 Admin Dashboard
Author: Themesbrand
Version: 1.0.0
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Datatables Js File
*/

$(document).ready(function () {
  $("#datatable3").DataTable({
    paging: false,
    info: false,
    searching: true,
    language: {
      search: "Buscar",
    },
  });
  $("#datatable4").DataTable({
    paging: false,
    info: false,
    searching: false,
  });
  $("#datatable5").DataTable({
    paging: false,
    info: false,
    searching: false,
  });
  //Buttons examples
  var table = $("#datatable-buttons").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    buttons: ["colvis"],
  });

  table
    .buttons()
    .container()
    .appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)");
  //Buttons examples
  var table = $("#datatable2-buttons").DataTable({
    paging: false,
    info: true,
    searching: false,
    lengthChange: false,
    buttons: ["excel", "pdf", "colvis"],
    language: {
      buttons: {
        excel: "Excel",
        pdf: "PDF",
        colvis: "Columnas Visibles",
      },
      info: "Mostrando _START_ de _END_ de _TOTAL_ entradas",
    },
  });

  table
    .buttons()
    .container()
    .appendTo("#datatable2-buttons_wrapper .col-md-6:eq(0)");

  //Buttons examples
  var table = $("#datatable3-buttons").DataTable({
    paging: false,
    info: true,
    searching: false,
    lengthChange: false,
    buttons: ["excel", "pdf", "colvis"],
    language: {
      buttons: {
        excel: "Excel",
        pdf: "PDF",
        colvis: "Columnas Visibles",
      },
      info: "Mostrando _START_ de _END_ de _TOTAL_ entradas",
    },
  });

  table
    .buttons()
    .container()
    .appendTo("#datatable3-buttons_wrapper .col-md-6:eq(0)");

  //Buttons examples
  var table = $("#datatable4-buttons").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    buttons: ["excel", "pdf", "colvis"],
    language: {
      buttons: {
        excel: "Excel",
        pdf: "PDF",
        colvis: "Columnas Visibles",
      },
    },
  });

  table
    .buttons()
    .container()
    .appendTo("#datatable4-buttons_wrapper .col-md-6:eq(0)");

  //Buttons examples
  var table = $("#datatable5-buttons").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    buttons: ["excel", "pdf", "colvis"],
    language: {
      buttons: {
        excel: "Excel",
        pdf: "PDF",
        colvis: "Columnas Visibles",
      },
    },
  });

  table
    .buttons()
    .container()
    .appendTo("#datatable5-buttons_wrapper .col-md-6:eq(0)");

  //Buttons examples
  var table = $("#datatable6-buttons").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    buttons: ["excel", "pdf", "colvis"],
    language: {
      buttons: {
        excel: "Excel",
        pdf: "PDF",
        colvis: "Columnas Visibles",
      },
    },
  });

  table
    .buttons()
    .container()
    .appendTo("#datatable6-buttons_wrapper .col-md-6:eq(0)");

  //Buttons examples
  var table = $("#datatable7-buttons").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    buttons: ["excel", "pdf", "colvis"],
    language: {
      buttons: {
        excel: "Excel",
        pdf: "PDF",
        colvis: "Columnas Visibles",
      },
    },
  });

  table
    .buttons()
    .container()
    .appendTo("#datatable7-buttons_wrapper .col-md-6:eq(0)");

  //Buttons examples
  var table = $("#datatable8-buttons").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    buttons: ["excel", "pdf", "colvis"],
    language: {
      buttons: {
        excel: "Excel",
        pdf: "PDF",
        colvis: "Columnas Visibles",
      },
    },
  });

  table
    .buttons()
    .container()
    .appendTo("#datatable8-buttons_wrapper .col-md-6:eq(0)");
});
