$(document).ready(function(){var e={paging:!0,info:!0,searching:!0,lengthChange:!0,responsive:!0,scrollX:!1,buttons:["excel","pdf","colvis"],language:{decimal:",",thousands:".",info:"Página _START_ de _END_ de _TOTAL_ entradas",infoEmpty:"",infoPostFix:"",infoFiltered:"",loadingRecords:"Cargando...",lengthMenu:"Mostrar _MENU_ Resultados",paginate:{first:"Primero",last:"Último",next:"Siguiente",previous:"Anterior"},processing:"Procesando...",search:"Buscar: ",searchPlaceholder:"",zeroRecords:"No se encontraron resultados",emptyTable:"Ningún dato disponible en esta tabla",aria:{sortAscending:": Activar para ordenar la columna de manera ascendente",sortDescending:": Activar para ordenar la columna de manera descendente"},buttons:{excel:"Excel",pdf:"PDF",colvis:"Columnas Visibles"}}};$("#datatable-docProyeCliente-buttons").DataTable(e).buttons().container().appendTo("#datatable-docProyeCliente-buttons_wrapper .col-md-6:eq(0)"),$("#datatable-ResProyeCliente-buttons").DataTable(e).buttons().container().appendTo("#datatable-ResProyeCliente-buttons_wrapper .col-md-6:eq(0)"),$('a[data-toggle="tab"]').on("shown.bs.tab",function(e){$($.fn.dataTable.tables(!0)).DataTable().columns.adjust().responsive.recalc()})}),$(function(){"use strict";$(".knob").knob({format:function(e){return e+"%"}}),$(".knob").each(function(){var e=$(this),a=e.attr("rel");e.knob(),$({value:0}).animate({value:a},{duration:2e3,easing:"swing",step:function(){e.val(Math.ceil(this.value)).trigger("change")}})})}),$("#datepicker1").datepicker();