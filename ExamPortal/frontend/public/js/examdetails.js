$(document).ready(function() {
    $('.loader').hide()
    document.getElementById('btnSave').addEventListener('click', validateForm)

    function validateForm() {
        var testName = document.getElementById("addquestionTestname").value;
        var testCode = document.getElementById("addquestionTestcode").value;
        var testDuration = document.getElementById("addquestionTestduration").value;
        var testInstruction = document.getElementById("addquestionTestinstruction").value;
        if (testName === "") {
            alert("Please enter test name");
        } else {
                testName = true;
            }

        if (testCode === "") {
            alert("Please enter test code");
        } else {
            
                testCode = true;
            }

        if (testDuration === "") {
            alert("Please enter test duration");
        } else {
           
                testDuration = true;
            }

        if (testInstruction == "") {
            alert("Please enter test instruction");
        } else {
            
                testInstruction = true;

            }


        if ((testName || testCode || testDuration || testInstruction) == true) {
            let testData = {
                testName: $('#addquestionTestname').val(),
                testCode: $('#addquestionTestcode').val(),
                testDuration: $('#addquestionTestduration').val(),
                testInstruction: $('#addquestionTestinstruction').val(),
                
            }
            $.ajax("http://localhost:9000/exam", {
                type: "POST",
                dataType: "json",

                contentType: "application/json;charset=utf-8",

                data: JSON.stringify(testData),
                contentType: "application/json; charset=utf-8",
                success: function(data, status) {
                    document.getElementById('show-messages').innerHTML = "Details Added"
                },
                error: function(error) {
                    console.log("error : " + error)
                }
            })
        } else {
            return false;
        }
    }
})