$(document).ready(function(){var a={paging:!0,info:!0,searching:!0,lengthChange:!0,responsive:!0,scrollX:!1,buttons:["excel","pdf","colvis"],language:{decimal:",",thousands:".",info:"Página _START_ de _END_ de _TOTAL_ entradas",infoEmpty:"",infoPostFix:"",infoFiltered:"",loadingRecords:"Cargando...",lengthMenu:"Mostrar _MENU_ Resultados",paginate:{first:"Primero",last:"Último",next:"Siguiente",previous:"Anterior"},processing:"Procesando...",search:"Buscar: ",searchPlaceholder:"",zeroRecords:"No se encontraron resultados",emptyTable:"Ningún dato disponible en esta tabla",aria:{sortAscending:": Activar para ordenar la columna de manera ascendente",sortDescending:": Activar para ordenar la columna de manera descendente"},buttons:{excel:"Excel",pdf:"PDF",colvis:"Columnas Visibles"}}};$("#datatable-index-adm-buttons").DataTable(a).buttons().container().appendTo("#datatable-index-adm-buttons_wrapper .col-md-6:eq(0)"),$("#datatable-proyectos-buttons").DataTable(a).buttons().container().appendTo("#datatable-proyectos-buttons_wrapper .col-md-6:eq(0)"),$("#datatable-vencimiento-buttons").DataTable(a).buttons().container().appendTo("#datatable-vencimiento-buttons_wrapper .col-md-6:eq(0)"),$("#datatable-fact-adm-buttons").DataTable(a).buttons().container().appendTo("#datatable-fact-adm-buttons_wrapper .col-md-6:eq(0)"),$("#datatable-histNotif-buttons").DataTable(a).buttons().container().appendTo("#datatable-histNotif-buttons_wrapper .col-md-6:eq(0)"),$("#datatable-tareasPend-buttons").DataTable(a).buttons().container().appendTo("#datatable-tareasPend-buttons_wrapper .col-md-6:eq(0)"),$("#datatable-tareasAsig-buttons").DataTable(a).buttons().container().appendTo("#datatable-tareasAsig-buttons_wrapper .col-md-6:eq(0)"),$('a[data-toggle="tab"]').on("shown.bs.tab",function(a){$($.fn.dataTable.tables(!0)).DataTable().columns.adjust().responsive.recalc()})}),function(a){"use strict";function t(){}t.prototype.createAreaChart=function(a,t,e,n,o,r,i,s){Morris.Area({element:a,pointSize:0,lineWidth:0,data:n,xkey:o,ykeys:r,labels:i,resize:!0,gridLineColor:"rgba(108, 120, 151, 0.1)",hideHover:"auto",lineColors:s,fillOpacity:.6,behaveLikeLine:!0})},t.prototype.init=function(){this.createAreaChart("morris-area-example",0,0,[{y:"2007",a:0},{y:"2008",a:150},{y:"2009",a:60},{y:"2010",a:180},{y:"2011",a:90},{y:"2012",a:75},{y:"2013",a:30}],"y",["a"],["Series A"],["#009688"])},a.MorrisCharts=new t,a.MorrisCharts.Constructor=t}(window.jQuery),function(){"use strict";window.jQuery.MorrisCharts.init()}(),function(a){"use strict";function t(){}t.prototype.init=function(){a("#date-range").datepicker({toggleActive:!0})},a.AdvancedForm=new t,a.AdvancedForm.Constructor=t}(window.jQuery),function(){"use strict";window.jQuery.AdvancedForm.init()}(),$("#datepicker1").datepicker();