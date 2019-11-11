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
        }

    })
   // console.log(result)
          let i;  
    try {
         var arr = result.Sheet2 
        for(i = 0;i<arr.length;i++){
            arr[i].examCode = req.body.examCode

        }
        console.log(result)
        // questionDetail.insertMany(arr,(err, docs) => {
            questionDetail.insertMany(result.Sheet2,(err, docs) => {
            if(err){
                // console.log(['ERROR'],err);
                res.status(404).send({msg: 'File uploading failed'})
            }
            else{
                // console.log('[DOCS]', docs)
                res.status(200).send({ msg: 'Data from excel file saved' });
            }
        })
    } catch (err) {
        console.log(err)
    }
    
}




module.exports = {
    quesFromExcel
}