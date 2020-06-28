#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const inq = require('./lib/inquirer');
const files = require('./lib/fileHandler');

clear();

const renderBanner = () => {
    console.log(
        chalk.yellow(
            figlet.textSync('Lexicon', { horizontalLayout: 'full' })
        )
    );
}

const askQuestion = () => {
    inq.askQuestion();
}

const init = () => {
    renderBanner()
    askQuestion()
}

init()
