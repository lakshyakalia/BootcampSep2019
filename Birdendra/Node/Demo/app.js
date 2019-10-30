const yargs = require('yargs');


console.log(process.argv);
console.log(yargs.argv);

yargs.command({
    command:'add',
    describe:'add a new note',
    handler:function(){
        console.log('adding a note');
    }
})
yargs.command({
    command:'remove',
    describe:'remove note',
    handler:function(){
        console.log('removing a note');
    }
})