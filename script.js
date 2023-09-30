//API gateway url from that is conncted to backend Lambda
var API_ENDPOINT = "Paste endpoint URL"
//AJAX GET REQUEST
document.getElementById("saveprofile").onclick = function(){
  var inputData = {
    "studentId":$('#studentid').val(),
        "studentFirstName":$('#fname').val(),
        "studentLastName":$('#lname').val(),
    "studentAge":$('#studentage').val()           
      };
  $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData)  ,
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
          document.getElementById("profileSaved").innerHTML = "Profile Saved!";
        },
        error: function () {
            alert("error");
        }
    });
}
//AJAX GET REQUEST
document.getElementById("getprofile").onclick = function(){  
  $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
         contentType: 'application/json; charset=utf-8',
        success: function (response) {
          $('#studentProfile tr').slice(1).remove();
          jQuery.each(response, function(i,data) {          
            $("#studentProfile").append("<tr> \
                <td>" + data['studentId'] + "</td> \
                <td>" + data['studentFirstName'] + "</td> \
                <td>" + data['studentLastName'] + "</td> \
                <td>" + data['studentAge'] + "</td> \
                </tr>");
          });
        },
        error: function () {
            alert("error");
        }
    });
}