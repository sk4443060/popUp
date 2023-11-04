// document.addEventListener('DOMContentLoaded', function () {
//     $('#imageModal').modal('show');
//   });
  
//   document.getElementById('imageModal').addEventListener('keydown', function (e) {
//     if (e.key === 'Escape') {
//       $('#imageModal').modal('hide');
//     }
//   });
  
//   document.querySelector('.modal .close').addEventListener('click', function () {
//     $('#imageModal').modal('hide');
//   });
  
// BELOW JS CODE PREVENTS FROM CLOSING THE POP UP AFTER OUTSIDE DIV CLICK
// THE BELOW JS CODE WORKS YOU NEED TO ADD: data-backdrop="static" IN MODEL CLASS DIV.
document.addEventListener('DOMContentLoaded', function () {
  $('#imageModal').modal({
     backdrop: 'static',
     keyboard: false
   });
 });
 
 document.getElementById('imageModal').addEventListener('keydown', function (e) {
   if (e.key === 'Escape') {
     $('#imageModal').modal('hide');
   }
 });
 
 document.querySelector('.modal .close').addEventListener('click', function () {
   $('#imageModal').modal('hide');
 });