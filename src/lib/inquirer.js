const fs = require('fs');
const inquirer = require('inquirer');
const fileHandler = require('./fileHandler');
const utils = require('./utils');

const CHOICES = fs.readdirSync(fileHandler.getTemplateFolerPath());
const questions = [
    {
        type: 'list',
        name: 'language',
        message: 'What lanuage do you prefer?',
        choices: CHOICES,
        filter: function (val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'fileName',
        message: "What's your file name? "
    }
]

module.exports = {
    askQuestion: () => {
        inquirer.prompt(questions)
            .then((answers) => {
                if (answers.fileName) {
                    fileHandler.createFile(fileHandler, answers.fileName, utils.supportedLanguages[answers.language])
                } 
            })
            .catch(err => console.log(err));
    }
}