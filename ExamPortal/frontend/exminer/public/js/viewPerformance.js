// this page will create dom to display details of students
var students_details = [{
        studentId: '1',
        studentName: 'Rawat',
        testId: '1011',
        attempted: '10',
        correct: '5',
        unattempted: '0',
        totalScore: '10',
        percentage: '80%'
    },
    {
        studentId: '1',
        studentName: 'Rawat',
        testId: '1011',
        attempted: '10',
        correct: '5',
        unattempted: '0',
        totalScore: '10',
        percentage: '80%'
    },
    {
        studentId: '1',
        studentName: 'Rawat',
        testId: '1011',
        attempted: '10',
        correct: '5',
        unattempted: '0',
        totalScore: '10',
        percentage: '80%'
    },
    {
        studentId: '2',
        studentName: 'Rawat',
        testId: '1011',
        attempted: '10',
        correct: '5',
        unattempted: '0',
        totalScore: '10',
        percentage: '80%'
    }
]

function showStudents() {

    $.ajax("http://localhost:3000/performance", {
        type: 'GET',
        dataType: 'JSON',
        success: function(data) {

            console.log(data.b.length)

            // data = JSON.stringify(data)
            let indexTemplate = $("#view-student-performance").html();
            //  $.each(data, (index, item) => {

            // $("#tbdy").append(Mustache.render(indexTemplate, item.a))
            //      })
        },
        error: function(error) {}
    })
}

function logout() {
    localStorage.removeItem("token")
    location.replace("../../index.html")
}