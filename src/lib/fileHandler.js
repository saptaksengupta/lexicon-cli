const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const utils = require('./utils');

const TEMPLATE_PATH = `src/templates`;

module.exports = {
    getCurrentDirBase: () => {
        return path.basename(process.cwd());
    },

    directoryExist: (filePath) => {
        return fs.existsSync(filePath)
    },

    getTemplateBasedOnLang: (lang) => {
        const readFilePath = `${TEMPLATE_PATH}/${utils.supportedLanguages[lang]}/template.${utils.getExtByLanguage(utils, lang)}`;
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
        fse.outputFile(filePath, context.getTemplateBasedOnLang(language))
            .then(resp => console.log('file saved'))
            .catch(err => console.log(err))
    }
}