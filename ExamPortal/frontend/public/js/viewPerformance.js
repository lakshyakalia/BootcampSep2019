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
        studentId: '1',
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

    $.each(students_details, (index, item) => {
        console.log(index)
        let indexTemplate = $("#view-student-performance").html();
        console.log(indexTemplate)
        $("#tbdy").append(Mustache.render(indexTemplate, item))
    })
}