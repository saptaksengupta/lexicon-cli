const inquirer = require('inquirer');
const fileHandler = require('./fileHandler');
const utils = require('./utils');
const questions = [
    {
        type: 'list',
        name: 'language',
        message: 'What lanuage do you prefer?',
        choices: ['Python', 'Javascript'],
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
                    fileHandler.createFile(fileHandler, answers.fileName, utils.supportedLanguages.python)
                } 

            })
            .catch(err => console.log(err));
    }
}