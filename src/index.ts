import * as readline from 'readline'
import * as fs from 'node:fs';
import { rename } from 'node:fs';
import * as path from 'path';
let pc = require('picocolors')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log(pc.cyan("1. Rename files in certain directory to"))
    console.log(pc.red("2. Exit"))}

function handleChoiceMenu ()  {
    rl.question(pc.cyan("Enter your choice: "), (choice) => {
        switch(choice){ 
        case '1':
        console.clear()
        rl.question(pc.cyan("Enter the directory: "), (directory) => {
        renameFiles(directory)
        })
        break;
        case '2':
        process.exit();
        }
    })
}

async function renameFiles(directory: string) {
const files = fs.readdirSync(directory)
files.sort((a,b) => a.localeCompare(b,undefined, {numeric: true}));
    console.log('\n')
    console.log(pc.cyan('There are a total of ' + files.length + ' files in this directory\n'))
    rl.question(pc.cyan("Enter the extension name of the files you'd like to change(e.g. jpg, png, etc.): \n"), (ext) => {
        rl.question('Enter the new name for the files: \n', (name) => {
            let i = 0
            files.forEach((file) => { 
                let fileName = path.join(directory, file)
                let  newName = path.join(directory, `${name}-${i}.${ext.toLowerCase()}`)
                if (path.extname(file) === '.' + ext.toLowerCase()) {
                    console.log(pc.green(`Renamed ${file} to -> ${name}-${i}.${ext.toLowerCase()}`));
                    rename(fileName, newName, (err) => {
                        if (err) throw err;
                    });
                    i++
                    } 
                    else {
                    console.log(pc.red(`Skipped ${file} because it is not a .${ext}`));
                    }
            });
            console.log(pc.cyan("\nPress Enter to go back to main menu"))
            rl.once('line', (input) => {
                if (input.trim() === '') {
                main();
                }
            });
        });
    });
}

function main() {
    console.clear();
    menu();
    handleChoiceMenu();
}

main()