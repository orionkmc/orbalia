$(document).ready(function(){var a={paging:!0,info:!0,searching:!0,lengthChange:!0,responsive:!0,scrollX:!1,buttons:["excel","pdf","colvis"],language:{decimal:",",thousands:".",info:"Página _START_ de _END_ de _TOTAL_ entradas",infoEmpty:"",infoPostFix:"",infoFiltered:"",loadingRecords:"Cargando...",lengthMenu:"Mostrar _MENU_ Resultados",paginate:{first:"Primero",last:"Último",next:"Siguiente",previous:"Anterior"},processing:"Procesando...",search:"Buscar: ",searchPlaceholder:"",zeroRecords:"No se encontraron resultados",emptyTable:"Ningún dato disponible en esta tabla",aria:{sortAscending:": Activar para ordenar la columna de manera ascendente",sortDescending:": Activar para ordenar la columna de manera descendente"},buttons:{excel:"Excel",pdf:"PDF",colvis:"Columnas Visibles"}}};$("#datatable-tramites-clie-buttons").DataTable(a).buttons().container().appendTo("#datatable-tramites-clie-buttons_wrapper .col-md-6:eq(0)"),$("#datatable-tramitesDisp-clie-buttons").DataTable(a).buttons().container().appendTo("#datatable-tramitesDisp-clie-buttons_wrapper .col-md-6:eq(0)"),$('a[data-toggle="tab"]').on("shown.bs.tab",function(a){$($.fn.dataTable.tables(!0)).DataTable().columns.adjust().responsive.recalc()})});