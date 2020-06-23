const fs=require('fs');
const chalk=require('chalk');


const addNote= (title,body) => {
    const notes=loadNotes();
    const duplicateNote=notes.find((note) => note.title===title)

    debugger
    
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.red.bgGreen("New note added"));
    }else{
        console.log(chalk.green.bgRed("Title already exist!"))
    }
    
}

const removeNote =(title) => {
    // console.log(title);
    const notes=loadNotes();
    const noteToKeep=notes.filter((note) => note.title!==title)

    if(noteToKeep.length<notes.length){ 
        const log=console.log
        log(chalk.red.bgGreen("Note Removed"))
        saveNotes(noteToKeep)
    }else{
        const log=console.log
        log(chalk.green.bgRed("No Note Found!"))
    }
    
}

const listNotes= ()=>{
    const notes=loadNotes();
    console.log(chalk.inverse("Your Note"));

    notes.forEach((note) =>{
        console.log(note.title);
    })

}


const readNotes= (title) =>{
    const notes=loadNotes();
    const readToNote=notes.find((note) => note.title===title);

    if(readToNote){
        console.log(chalk.inverse(readToNote.title));
        console.log(readToNote.body)
    }else{
        console.log(chalk.red.inverse("Note not found"));
    } 

}


const saveNotes= (notes)=> {
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=() => {
    try{
        const dataBuffer=fs.readFileSync('notes.json');
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return []
    }
}

module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes

}