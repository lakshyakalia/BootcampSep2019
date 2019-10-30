$(document).ready(function() {
    $('.loader').hide()
    document.getElementById('addtestbtn').addEventListener('click', validateForm)

    function validateForm() {
        var question = document.getElementById("addtestQuestion").value;
        var option1 = document.getElementById("addtestOption1").value;
        var option2 = document.getElementById("addtestOption2").value;
        var option3 = document.getElementById("addtestOption3").value;
        var option4 = document.getElementById("addtestOption4").value;
        var answer = document.getElementById("addtestAnswer").value;
        var weightage = document.getElementById("addtestWeightage").value;
        if (question === "") {
            alert("Please enter test name");
        } else {
                question = true;
            }

        if (option1 === "") {
            alert("Please enter test code");
        } else {
            
                option1 = true;
            }

        if (option2 === "") {
            alert("Please enter test duration");
        } else {
           
                option2 = true;
            }

        if (option3 == "") {
            alert("Please enter test instruction");
        } else {
            
                option3 = true;

            }
        if (option4 == "") {
                alert("Please enter test instruction");
        } else {
                
                    option4 = true;
            }

        if (answer == "") {
                alert("Please enter test instruction");
        } else {
                
                    answer = true;
            } 
            
        if (weightage == "") {
                alert("Please enter test instruction");
        } else {
                
               weightage = true;
           }               


        if ((question || option1 || option2 || option3 || option4 || answer || weightage) == true) {
            let questionData = {
                question: $('#addtestQuestion').val(),
                option1: $('#addtestOption1').val(),
                option2: $('#addtestOption2').val(),
                option3: $('#addtestOption3').val(),
                option4: $('#addtestOption4').val(),
                answer: $('#addtestAnswer').val(),
                weightage: $('#addtestWeightage').val(),  
            }
            $.ajax("http://localhost:9000/exam/question", {
                type: "POST",
                dataType: "json",

                contentType: "application/json;charset=utf-8",

                data: JSON.stringify(questionData),
                contentType: "application/json; charset=utf-8",
                success: function(data, status) {
                    document.getElementById('show-messages').innerHTML = "Question Added"
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