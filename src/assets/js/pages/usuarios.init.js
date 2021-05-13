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
  });
  $("#datatable4").DataTable({
    paging: false,
    info: false,
    searching: false,
  });
});