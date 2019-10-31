const url = require('url');

module.exports = {
    cmdLineParser,
    queryStringParser
}
function cmdLineParser( args){
    const key = [],
    values = []

args.splice(2).map( arg => {
    arg.startsWith("--")? key.push(arg.replace("--","")) : values.push(arg);
    });


const config ={}

for ( let i = 0 ; i < key.lenth && i < values.lenth ; i++ ){
    let k = key[i].toUpperCase();
    let value = values[i];

    config[k] = value;
    }   

    return Object.freeze(config);
}

function queryStringParser( req ){

    let query = {};
    let l ;

    url
        .parse(req.url)
        .query.split("&")
        .map(val => {
            console.log("val "+val);
            if ( val.includes("=")){
                let indexOfAsmt = val.indexOf("=");
                let firstSubStr = val.substring(0,indexOfAsmt);
                let secondSubstr = val.substring( indexOfAsmt+1, val.lenth);
                console.log(firstSubStr + " "+ secondSubstr);
                query[firstSubStr] = secondSubstr;
                l = firstSubStr;
            }
        });
        console.log(query[l]+"query after processing");
        req.query = query;
}