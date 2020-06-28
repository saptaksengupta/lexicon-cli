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
            const contents = fs.readFileSync(readFilePath, 'utf8');
            return contents;
        }
        return null;
    },

    createFile: (context, fileName, language) => {
        const filePath = `${utils.getDefaultPathByLang(utils, language)}/${fileName}.${utils.getExtByLanguage(utils, language)}`;
        fse.outputFile(filePath, context.getTemplateBasedOnLang(context, language))
            .then(resp => console.log('Congratulations! Your file has beed saved 👍'))
            .catch(err => console.log(err))
    }
}