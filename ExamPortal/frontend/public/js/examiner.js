function showEdit() {
    $("#showEditDiv").fadeIn("slow");
    $.ajax("http://localhost:3000/loggedIn", {
        type: 'GET',
        dataType: 'JSON',
        headers: {
            "token": localStorage.getItem("token"),
        },
        success: function(data) {

            // var data = JSON.stringify(data)
            console.log(data.email)
            changeInputFields(data)

        },
        error: function(error) {}
    })
}

function changeInputFields(data) {
    document.getElementById('loggedInEmail').innerHTML = data.email;
    document.getElementById('loggedInName').innerHTML = data.name;
    document.getElementById('loggedInPhone').innerHTML = data.phoneNumber;

}

function editDetails() {
    $.ajax("http://localhost:3000/examiner", {
        type: 'PATCH',
        dataType: 'JSON',
        headers: {
            "token": localStorage.getItem("token"),
        },
        success: function(data) {

            // var data = JSON.stringify(data)
            // console.log(data.email)
            // changeInputFields(data)

        },
        error: function(error) {}
    })
}

function hideEditDetails() {
    $("#showEditDiv").fadeOut("slow");
}