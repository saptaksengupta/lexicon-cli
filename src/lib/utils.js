module.exports = {
    supportedLanguages: {
        'python': 'python',
        'nodejs': 'nodejs',
        'java': 'java',
        'golang': 'golang'
    },
    langProps: {
        'python': { path: 'src/python', extention: 'py' },
        'nodejs': { path: 'src/nodejs', extention: 'nodejs' },
        'java': { path: 'src/java', extention: 'java' }
    },
    getDefaultPathByLang: (context, lang) => {
        return context.langProps[lang].path;
    },
    getExtByLanguage: (context, lang) => {
        return context.langProps[lang].extention;
    }
}