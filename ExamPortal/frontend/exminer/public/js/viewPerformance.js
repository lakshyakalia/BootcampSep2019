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
    const tok = localStorage.getItem('token');
    if (tok == null) {
        location.replace("../../index.html")
    }

    $.ajax("http://localhost:3000/performance", {
        type: 'GET',
        dataType: 'JSON',
        headers: {
            'token': localStorage.getItem('token')
        },
        success: function(data) {
            console.log(data)
            let i = 0;
            let count = 1;
            // console.log(data.b[0].name)
            // console.log(data.b.length)

            while (i < data.length) {
                //     console.log(data.b[i]._id)
                //     console.log(data.b[i].name)
                let tr = document.createElement('tr')
                    // let td = document.createElement('td')
                    // console.log(data[i].examCode)
                    //         // create attribute and set id in all fields
                tr.innerHTML = "<td id='" + data[i].examCode + "'onclick='studentDetails(this)'>" + data[i].examCode + "</td>" + "<td>" + data[i].examName + "</td>";

                //tr.append(td)
                //     // let td1 = document.createElement('td')
                //     // td1.innerHTML = data.b[i].name;
                //     // tr.append(td1)
                $("#tbdy").append(tr)

                i++;
                count++;
            }
        },
        error: function(error) {}
    })
}

function logout() {
    localStorage.removeItem("token")
    location.replace("../../index.html")
}
let flag = 0;

function studentDetails(a) {

    console.log(a.id)
    $.ajax("http://localhost:3000/performance/students", {
        type: 'GET',
        dataType: 'JSON',
        headers: {
            'examId': a.id,
            'token': localStorage.getItem('token')
        },
        success: function(data) {
            console.log(data)
            let i = 0;

            // console.log(data[0].candidateId)
            if (flag == 0) {
                while (i < data.b.length) {
                    let tr = document.createElement('tr')
                    tr.innerHTML = "<td>" + data.a[i].name + "</td>" + "<td>" + data.b[i].testCode + "</td>" + "<td>" + data.b[i].totalScore + "</td>" + "<td>" + data.b[i].answers.length + "</td>" + "<td>" + data.a[i]._id + "</td>" + "<td>" + data.b[i].candidateId + "</td>";

                    $("#tcan").append(tr)
                    flag = 1;
                    i++;
                }
            }

            // console.log(data[0].testCode)
            // console.log(data[0].answers.length)
            // console.log(data[0].totalScore)


        },
        error: function(error) {
            console.log('error')
        }
    })
}