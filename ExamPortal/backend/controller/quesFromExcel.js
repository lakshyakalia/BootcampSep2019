var { questionDetail } = require('../Models/question')
const excelToJson = require('convert-excel-to-json');
// const result = excelToJson({
//     sourceFile: 'questions.xlsx'
// });
// console.log(typeof(result))
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
