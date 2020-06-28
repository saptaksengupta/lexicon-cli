module.exports = {
    supportedLanguages: {
        'python': 'python',
        'javascript': 'javascript',
        'java': 'java',
        'golang': 'golang'
    },
    langProps: {
        'python': { path: 'src/python', extention: 'py' },
        'javascript': { path: 'src/node', extention: 'js' },
        'java': { path: 'src/java', extention: 'java' }
    },
    getDefaultPathByLang: (context, lang) => {
        return context.langProps[lang].path;
    },
    getExtByLanguage: (context, lang) => {
        return context.langProps[lang].extention;
    }
}