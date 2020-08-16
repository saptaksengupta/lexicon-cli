const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const utils = require('./utils');

const TEMPLATE_PATH = `${__dirname}/templates`;

module.exports = {
    getCurrentDirBase: () => {
        return path.basename(process.cwd());
    },

    directoryExist: (filePath) => {
        return fs.existsSync(filePath)
    },
    getTemplateFolerPath: () => {
        return TEMPLATE_PATH;
    },
    getTemplatePathByLang: (lang) => {
        return `${TEMPLATE_PATH}/${utils.supportedLanguages[lang]}/template.${utils.getExtByLanguage(utils, lang)}`;
    },
    getTemplateBasedOnLang: (context, lang) => {
        const readFilePath = context.getTemplatePathByLang(lang);
        // get stats about the current file
        const stats = fs.statSync(readFilePath);
        if (stats.isFile()) {
            return fs.readFileSync(readFilePath, 'utf8');
        }
        return null;
    },

    createFile: (context, fileName, language) => {
        const filePath = `${utils.getDefaultPathByLang(utils, language)}/${fileName}.${utils.getExtByLanguage(utils, language)}`;
        context.getTemplateBasedOnLang(context, language).then(resp => {
            fse.outputFile(filePath, resp)
            .then(resp => console.log('Congratulations! Your file has beed saved 👍'))
            .catch(err => console.log(err))
        }).catch(error => {
            console.log(error);
        })
    }
}