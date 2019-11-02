$(document).ready(function(){
    const tok =localStorage.getItem('token');
    if(tok == null)
    {
      location.replace("../../index.html")
    }
})
function showEdit() {
    document.getElementById('showEditDiv').style.display = 'block';

    $.ajax("http://localhost:3000/examiner/:" + id, {
        type: 'GET',
        dataType: 'JSON',

        success: function(data) {
            // data = JSON.stringify(data)
            let indexTemplate = $("#view-student-performance").html();
            // $.each(data, (index, item) => {
            // console.log(item.name)
            // console.log(indexTemplate)
            $("#tbdy").append(Mustache.render(indexTemplate, data))
                // })
        },
        error: function(error) {}
    })
}

function editDetails() {

}