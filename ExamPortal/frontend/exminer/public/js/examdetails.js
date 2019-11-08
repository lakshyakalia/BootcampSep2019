var tempExamCode = ''
$(document).ready(function () {
    const tok = localStorage.getItem('token');
    if (tok == null) {
        location.replace("../../index.html")
    }
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

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
    $('input[name="colorRadio"]').click(function () {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
    });
});

$(document).ready(function () {
    $('.loader').hide()
    document.getElementById('btnSave').addEventListener('click', validateForm)

    function validateForm() {
        var testName = document.getElementById("addExamName").value;
        var testCode = document.getElementById("addExamCode").value;
        var testDuration = document.getElementById("addExamDuration").value;
        var testDate = document.getElementById("addExamTestDate").value;
        // var testInstruction = document.getElementById("addExamInstruction").value;
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


        if (testDate == "") {
            alert("Please enter your test date");
        } else {
            const testD = testDate.slice(0, 10);
            const testd = testDate.slice(11, 16)
            testDate = testD.concat(" " + testd + ":00")
        }

        if ((testName || testCode || testDuration) == true) {
            tempExamCode = $('#addExamCode').val()
            let examDetail = {
                examName: $('#addExamName').val(),
                examCode: $('#addExamCode').val(),
                examDuration: $('#addExamDuration').val(),
                examStartTime: testDate,
                // instructions: $('#addExamInstruction').val(),
            }
            $.ajax("http://localhost:3000/exam", {
                type: "POST",
                dataType: "json",
                headers: {
                    token: localStorage.getItem('token')
                },
                contentType: "application/json;charset=utf-8",
                data: JSON.stringify(examDetail),
                contentType: "application/json; charset=utf-8",
                success: function (recent) {
                    console.log(recent.message);
                    if (recent.message == "Exam Code already exist") {
                        window.alert("Exam Code Already Exist");
                        //location.replace("./views/examdetails.html")
                    }
                    else {
                        document.getElementById("addExamName").value = '';
                        document.getElementById("addExamCode").value = '';
                        document.getElementById("addExamDuration").value = '';
                        document.getElementById("addExamTestDate").value = '';
                    }
                },
                error: function (error) {
                    console.log("error : " + error)
                }
            })
        } else {
            return false;
        }
    }
})

$(document).ready(function () {
    $('.loader').hide()
    document.getElementById('submitBtn').addEventListener('click', validateForm)

    function validateForm() {
        var question = document.getElementById("addtestQuestion").value;

        var weightage = document.getElementById("addtestWeightage").value;
        //console.log(question,answer,weightage)

        if (question === "") {
            alert("Please enter question");
            return
        }

        else {

            var opt = $("input[name='colorRadio']:checked").val();
            if (opt == '') {
                return
            } else if (opt == "red") {
                var answer = ''
                //var answer = document.getElementById("addtestAnswer").value;
                var option1 = document.getElementById("addtestOption1").value;
                var option2 = document.getElementById("addtestOption2").value;
                var option3 = document.getElementById("addtestOption3").value;
                var option4 = document.getElementById("addtestOption4").value;
                var image = document.getElementById("myImage").value;
                console.log("image path" + image);
                if (option1 === "") {
                    alert("Please enter 1st option");
                    return
                }
                if (option2 === "") {
                    alert("Please enter 2nd option");
                    return
                }
                if (option3 === "") {
                    alert("Please enter 3rd option");
                    return
                }
                if (option4 === "") {
                    alert("Please enter  4th option");
                    return
                }
                $.each($("input[name='option']:checked"), function () {
                    if ($(this).val()) {
                        answer += $(this).val() + ','
                    }
                });
                if (answer == '') {
                    alert('check answer')
                    return
                }
                if (weightage === "") {
                    alert("Please enter weightage");
                }
                var formData = new FormData();
                formData.values('questionImage')

                var formData = new FormData();
                formData.append('questionText', question);
                formData.append('answer', answer);
                formData.append('option1', option1);
                formData.append('option2', option2);
                formData.append('option3', option3);
                formData.append('option4', option4);
                formData.append('weightage', weightage);
                formData.append('examCode', tempExamCode);
                formData.append('answerType', "multipleOption");
                formData.append('questionImage', $('input[type=file]')[1].files[0]);
                console.log("image is " + formData.values('questionImage'));
                $.ajax("http://localhost:3000/exam/question", {
                    type: "POST",
                    data: formData,
                    dataType: "json",
                    headers: {
                        token: localStorage.getItem('token')
                    },
                    contentType: false,
                    processData: false,
                    success: function (data, status) {
                        document.getElementById("addtestQuestion").value = '';
                        document.getElementById("addtestOption1").value = '';
                        document.getElementById("addtestOption2").value = '';
                        document.getElementById("addtestOption3").value = '';
                        document.getElementById("addtestOption4").value = '';
                        document.getElementById("addtestAnswer").value = '';
                        document.getElementById("addtestWeightage").value = '';
                    },
                    error: function (error) {
                        console.log(error + " " + "error occurred");
                    }
                });

            } else if (opt == "green") {
                var option1G = document.getElementById("addtestOption1G").value;
                var option2G = document.getElementById("addtestOption2G").value;
                var option3G = document.getElementById("addtestOption3G").value;
                var option4G = document.getElementById("addtestOption4G").value;
                var answer = $("input[name='option1']:checked").val();
                //console.log(question,answer,option1G,option2G,option3G,option4G,weightage)
                if (option1G === "") {
                    alert("Please enter 1st option");
                    return
                }
                if (option2G === "") {
                    alert("Please enter 2nd option");
                    return
                }
                console.log(examDetail)
                $.ajax("http://localhost:3000/exam/question", {
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    data: JSON.stringify(examDetail),
                    contentType: "application/json; charset=utf-8",
                    success: function (data, status) {
                        document.getElementById("addtestQuestion").value = '';
                        document.getElementById("addtestOption1G").value = '';
                        document.getElementById("addtestOption2G").value = '';
                        document.getElementById("addtestOption3G").value = '';
                        document.getElementById("addtestOption4G").value = '';
                        document.getElementById("addtestAnswer").value = '';
                        document.getElementById("addtestWeightage").value = '';

                    },
                    error: function (error) {
                        console.log("error : " + error)
                    }
                })
            }
            if (option3G === "") {
                alert("Please enter 3rd option");
                return
            }
            if (option4G === "") {
                alert("Please enter  4th option");
                return
            }
        }
        if (answer === "") {
            alert("Please enter answer");
            return
        }
        if (weightage === "") {
            alert("Please enter weightage");
            return
        }
        console.log(answer)
        var formData = new FormData();
        formData.values('questionImage')

        console.log('file name ', $('input[type=file]')) //image
        var formData = new FormData();
        formData.append('questionText', question);
        formData.append('answer', answer);
        formData.append('option1', option1G);
        formData.append('option2', option2G);
        formData.append('option3', option3G);
        formData.append('option4', option4G);
        formData.append('weightage', weightage);
        formData.append('examCode', tempExamCode);
        formData.append('answerType', "singleOption");
        formData.append('questionImage', $('input[type=file]')[1].files[0]);
        $.ajax("http://localhost:3000/exam/question", {
            type: "POST",
            data: formData,
            dataType: "json",
            headers: {
                token: localStorage.getItem('token')
            },
            contentType: false,
            processData: false,
            success: function (data, status) {
                document.getElementById("addtestQuestion").value = '';
                document.getElementById("addtestOption1G").value = '';
                document.getElementById("addtestOption2G").value = '';
                document.getElementById("addtestOption3G").value = '';
                document.getElementById("addtestOption4G").value = '';
                document.getElementById("addtestAnswer1").value = '';
                document.getElementById("addtestWeightage").value = '';
            },
            error: function (error) {
                console.log(error + " " + "error occurred");
            }
        });
    }
})
