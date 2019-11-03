// this page will create dom to display details of students
// var students_details = [{
//         studentId: '1',
//         studentName: 'Rawat',
//         testId: '1011',
//         attempted: '10',
//         correct: '5',
//         unattempted: '0',
//         totalScore: '10',
//         percentage: '80%'
//     },
//     {
//         studentId: '1',
//         studentName: 'Rawat',
//         testId: '1011',
//         attempted: '10',
//         correct: '5',
//         unattempted: '0',
//         totalScore: '10',
//         percentage: '80%'
//     },
//     {
//         studentId: '1',
//         studentName: 'Rawat',
//         testId: '1011',
//         attempted: '10',
//         correct: '5',
//         unattempted: '0',
//         totalScore: '10',
//         percentage: '80%'
//     },
//     {
//         studentId: '2',
//         studentName: 'Rawat',
//         testId: '1011',
//         attempted: '10',
//         correct: '5',
//         unattempted: '0',
//         totalScore: '10',
//         percentage: '80%'
//     }
//]

function showStudents() {

    $.ajax("http://localhost:3000/exam/performance", {
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