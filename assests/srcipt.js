$(function () {
    $('[data-toggle="tooltip"]').tooltip({ placement: 'bottom'});
})
let hash = window.location.hash;
let certificateId = hash.trim().slice(1);
var baseUrl = "https://stage.mycredible.info/Links";
// var certificateId = "X93FT7YK86";
var authToken = "AdminBearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZWNoQHRoZXNwYXJrc2ZvdW5kYXRpb24uc2ciLCJyb2xlIjoiQURNSU4iLCJleHAiOjE2Mjg1MTI4NDJ9.J_9TyKD5xOA0Dgkb8rM0MCFRxpvXC0cysT13PKp8RyAKjSc1Y3pjs4FM0Dxm1F3eudaVzkJc1XO3tXN3IF-8hA";

$.ajax({
  type: "GET",
  url: baseUrl + "/public1/certificate-details/" + certificateId,
  dataType: "json",
  headers: {
    'Authorization': authToken
  },
  success: function(data) {
    console.log(data);
    $("#issued_to").html(data.Name);
    $("#issue_by").html(data.issuer_company_name);
    $("#issued_on").html(data.issue_date);
    $("#expiry").html(data.expiry_date);
    $("#issue_by1").html(data.issuer_company_name);
    $("#issuer_description").html(data.issuer_company_description);
  },
  error: function(reject, ajaxOptions, thrownError) {

  },
  timeout: 15000 //timeout of the ajax call
});