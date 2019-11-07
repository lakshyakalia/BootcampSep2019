var { questionDetail } = require('../Models/question')
const excelToJson = require('convert-excel-to-json');

const quesFromExcel = async (req, res) => {
    let path = req.file.filename
    const result = excelToJson({
        sourceFile: path,
        columnToKey: {
            A: 'questionText',
            B: 'option1',
            C: 'option2',
            D: 'option3',
            E: 'option4',
            F: 'answer',
            G: 'weightage'

        }

    })
   
    try {
        var arr = result.Sheet2;
        console.log(arr);
        questionDetail.insertMany(arr, (err, docs) => {
            if(err){
                console.log(['ERROR'],err);
            }
            else{
                console.log('[DOCS]', docs)
                res.send({ msg: 'saved' });
            }
        })
    } catch (err) {
        console.log(err)
    }
    // console.log(arr)
}
// console.log(result.Sheet2)

// var obj = new Object()
// for ( i = 1 ; i < result.Sheet2.length; i++ ){
//     obj.questionText = result.Sheet2[i].A
//     obj.options = new Object()
//     obj.options.option1 =result.Sheet2[i].B
//     obj.options.option2=result.Sheet2[i].C
//     obj.options.option3=result.Sheet2[i].D
//     obj.options.option4=result.Sheet2[i].E
//     obj.answer=result.Sheet2[i].F  
//     obj.weightage=result.Sheet2[i].G
//     console.log(obj)
// }
// });



module.exports = {
    quesFromExcel
}