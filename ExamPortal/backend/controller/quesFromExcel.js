var { questionDetail } = require('../Models/question')
const excelToJson = require('convert-excel-to-json');

const quesFromExcel = async (req, res) => {
    let path = req.file.filename
    console.log("path is " +path)
    const result = excelToJson({
        sourceFile: 'upload/'+path,
        columnToKey: {
            A: 'questionText',
            B: 'option1',
            C: 'option2',
            D: 'option3',
            E: 'option4',
            F: 'answer',
            G: 'weightage',
            H: 'questionImage',
            // E: 'examCode'
        }

    })
   
    try {
        var arr = result.Sheet2;
        //questionDetail.insert('examCode',FormData.examCode)
        //const status = await examDetail.find({ examCode: req.body.examCode })
        console.log("data from excel file is" +arr);
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
    
}




module.exports = {
    quesFromExcel
}