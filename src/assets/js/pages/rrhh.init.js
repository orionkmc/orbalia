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

  $("#datatable-usuarios-rrhh").DataTable(context4);
});
