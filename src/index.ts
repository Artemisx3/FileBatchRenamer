import * as readline from 'readline'
import * as fs from 'node:fs';
import { rename } from 'node:fs';
import * as path from 'path';



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout});

function menu() {
    console.log("1. Rename files in certain directory to")
    console.log("2. Exit")
}

function handleChoiceMenu ()  {
    rl.question("Enter your choice: ", (choice) => {
    switch(choice){ 
        case '1':
        console.clear()
        rl.question("Enter the directory: ", (directory) => {
        renameFiles(directory)
        })
        break;
        case '2':
        process.exit();
        break;
    }  
    })
    
}

let i: number = -1
async function renameFiles(directory: string) {
const files = fs.readdir(directory, (err, files) => {
    if (err) throw err;
    console.log('\n')
    console.log('There are a total of ' + files.length + ' pictures in this directory\n')
    rl.question('Enter the name of the files: \n', (name) => {
    files.forEach(file => { 
        i++
        //this is the old path to the file we are renaming
        let picture = directory + '/' + file 
        //this is the new path where that file will be, the i is used to make each file unique and so it doesn't overwrite the old one
        let newname = directory + '/' + name + '-' + i + '.png'
        if (path.extname(file) === ".png"){
            console.log(`renamed ${files[i]} to -> ${name}-${i}.png`);
        rename(picture, newname, (err) =>    
        {if (err) throw err; })
        } 
        else if (path.extname(file) !== ".png"){
            console.log(`Skipped ${files[i]} because it is not a png!`);
        }
        
        
});
})
})
console.log("\nPress Enter to go back to main menu")
rl.on('line', (input) => {
  if (input.trim() === '') {
    main();
  }
});
}

function main() {
    console.clear();
    menu();
    handleChoiceMenu();
}

main()