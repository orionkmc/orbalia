$(document).ready(function(){$("#datatable").DataTable({paging:!1,info:!1,searching:!0,language:{search:"Buscar"}}),$("#datatable-buttons").DataTable({paging:!1,info:!1,searching:!0,lengthChange:!1,buttons:["excel","pdf","colvis"],language:{buttons:{excel:"Excel",pdf:"PDF",colvis:"Columnas Visibles"},search:"Buscar"}}).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)")});