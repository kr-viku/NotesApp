const fs=require('fs');

// // fs.writeFileSync('notes.txt', 'this was created by node js');

// fs.appendFileSync('notes.txt','I am accepting the challenge and append the new content in notes.txt file.')


const notes=require('./notes.js')

// const msg=getNotes()
// console.log(msg)

// const chalk=require('chalk')

// const log=console.log
// log(chalk.red.bold.bgGreen('Hello'))

// const comand=process.argv[2];
// if(comand==="add"){
//     console.log("Adding a note");
// }
// else if(comand==="remove"){
//     console.log("Removing a note");
// }

const yargs=require("yargs");
const { argv } = require("yargs");
yargs.command({
    command: "add",
    describe: "Add a note",
    builder: {
        title:{
            description:"Note Title",
            demandOption: true,
            type:"string"
        },
        body:{
            description:"Note",
            demandOption: true,
            type:"string"
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
        // console.log("Title: "+argv.title);
        // console.log("Note: "+argv.body);
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder:{
        title:{
            description: "Note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: "list",
    describe:"Placeholder for a list of notes",
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command: "read",
    describe: "Read",
    builder:{
        title:{
            describe:"Placeholder for a list of note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
})

yargs.parse();


// console.log(yargs.argv);