$(document).ready(function() {

    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function(e) {
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

    allNextBtn.click(function() {
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

    $('input[name="colorRadio"]').click(function() {
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
    });


    $.ajax("http://localhost:3000/exam/addQuestion/examCode", {
            type: 'GET',
            dataType: 'json',
            contentType: "application/json;charset=utf-8",
            headers: {
                'token': localStorage.getItem('token')
            },
            data: {
                examinerId: localStorage.getItem('addQuestionid')
            },
            success: function(data) {
                console.log(data);
            },
            error: function(error) {
                console.log(error)
            }


        })
        
});

function logout() {
    localStorage.clear()
    location.replace("../../index.html")

}

function showName() {
    document.getElementById('span').innerHTML = 'Welcome ' + localStorage.getItem('loggedInName') + '! &nbsp; &nbsp; '
}

function display(data) {
    //console.log(data);
    const displaytemplate = document.querySelector('#index-template').innerHTML
    const html = Mustache.render(displaytemplate, { data: data })
        //console.log(displaytemplate);
    const performance = document.querySelector("#performance");
    //console.log(performance)
    performance.insertAdjacentHTML("beforeend", html)

}