$(document).ready(function () {
    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');
  
    allWells.hide();
  
    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);
  
        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });
  
    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;
  
        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }
  
        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });
  
    $('div.setup-panel div a.btn-primary').trigger('click');
  });
 
  $(document).ready(function() {
    $('.loader').hide()
    document.getElementById('btnSave').addEventListener('click', validateForm)

    function validateForm() {
        var testName = document.getElementById("addExamName").value;
        var testCode = document.getElementById("addExamCode").value;
        var testDuration = document.getElementById("addExamDuration").value;
        var testDate = document.getElementById("addExamTestDate").value;
        var testInstruction = document.getElementById("addExamInstruction").value;
        if (testName === "") {
            alert("Please enter test name");
        } else {
            
                testName = true;
            }

        if (testCode === "") {
            alert("Please enter test code");
        }  else {
                testCode = true;
            }
    

        if (testDuration === "") {
            alert("Please enter test duration");
        }  else {
                testDuration = true;
            }


        if (testDate == "") {
            alert("Please enter your mobile number");
        }  else {
                testDate = true;
            }
        
        if (testInstruction === "") {
            alert("Please enter test instruction");
        }  else {
                testInstruction = true;
                }    
    
        if ((testName || testCode || testDate || testDuration || testInstruction) == true) {
            let examDetail = {
                examName: $('#addExamName').val(),
                examCode: $('#addExamCode').val(),
                examDuration: $('#addExamDuration').val(),
                examStartTime: $('#addExamTestDate').val(),
                instructions: $('#addExamInstruction').val()
            }
            $.ajax("http://localhost:3000/exam", {
                type: "POST",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                data: JSON.stringify(examDetail),
                contentType: "application/json; charset=utf-8",
                success: function(data, status) {
                    // document.getElementById('show-messages').innerHTML = "Account Created"
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

$(document).ready(function() {
    $('.loader').hide()
    document.getElementById('submitBtn').addEventListener('click', validateForm)

    function validateForm() {
        var question = document.getElementById("addtestQuestion").value;
        var option1 = document.getElementById("addtestOption1").value;
        var option2 = document.getElementById("addtestOption2").value;
        var option3 = document.getElementById("addtestOption3").value;
        var option4 = document.getElementById("addtestOption4").value;
        var answer = document.getElementById("addtestAnswer").value;
        var weightage = document.getElementById("addtestWeightage").value;
        
        if ( question=== "") {
            alert("Please enter question");
        } else {
            
            question = true;
            }

        if (option1 === "") {
            alert("Please enter 1st option");
        }  else {
                option1 = true;
            }
    

        if (option2 === "") {
            alert("Please enter 2nd option");
        }  else {
                option2 = true;
            }
            if (option3 === "") {
                alert("Please enter 3rd option");
            }  else {
                    option3 = true;
                }
        
    
            if (option4 === "") {
                alert("Please enter  4th");
            }  else {
                    option4 = true;
                }

        if (answer == "") {
            alert("Please enter correct option");
        }  else {
                answer = true;
            }
        
        if (weightage === "") {
            alert("Please enter weightage");
        }  else {
                weightage = true;
                }    
    
        if ((question || option1 || option2 || option3 || option4 || answer ||weightage) == true) {
            let examDetail = {
                questionText: $('#addtestQuestion').val(),
                answer: $('#addtestAnswer').val(),
                options :{
                option1: $('#addtestOption1').val(),
                option2: $('#addtestOption2').val(),
                option3: $('#addtestOption3').val(),
                option4: $('#addtestOption4').val(),
                },
                weightage: $('#addtestWeightage').val()
            }
            $.ajax("http://localhost:3000/exam/question", {
                type: "POST",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                data: JSON.stringify(examDetail),
                contentType: "application/json; charset=utf-8",
                success: function(data, status) {
                    document.getElementById('show-messages').innerHTML = "Account Created"
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