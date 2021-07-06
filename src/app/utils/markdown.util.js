const headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/;
const titleRegExp = /# (.*)[\r\n]/;
const descriptionRegExp = /<p class="description">(.*)<\/p>[\r\n]/;
const headerKeyValueRegExp = /(.*): (.*)/g;
const emptyRegExp = /^\s*$/;

export function getMarkdownHeaders(markdown) {
    let header = markdown.match(headerRegExp);

    if (!header) return { components: [] };

    header = header[1];

    let regexMatches;
    const headers = {};

    // eslint-disable-next-line no-cond-assign
    while ((regexMatches = headerKeyValueRegExp.exec(header)) !== null) headers[regexMatches[1]] = regexMatches[2];

    if (headers.components) {
        headers.components = headers.components
            .split(',')
            .map(x => x.trim())
            .sort();
    }
    else headers.components = [];

    return headers;
}

export const demoRegexp = /^"demo": "(.*)"/;

export function getMarkdownContents(markdown) {
    return markdown
        .replace(headerRegExp, '') // Remove header information
        .split(/^{{\s*("type":[^}]*)\s*}}$/gm) // Split markdown into an array, separating demos
        .filter(content => !emptyRegExp.test(content)); // Remove empty lines
}

export function getMarkdownTitle(markdown) {
    const matches = markdown.match(titleRegExp);

    if (!matches || !matches[1]) throw new Error('Missing title in the page');

    return matches[1];
}

export function getMarkdownDescription(markdown) {
    const matches = markdown.match(descriptionRegExp);

    if (!matches || !matches[1]) throw new Error('Missing description in the page');

    return matches[1];
}

const parseString = string => {
    try {
        return JSON.parse(string);
    } catch (error) {
        return null;
    }
}

export const parseMarkdownFileReference = text => {
    const object = {};

    text = text.split(',');

    text.forEach(item => {
        item = item.trim().split(':').filter(Boolean).map(i => i.trim()).map(i => {
            const parsed = parseString(i);

            if (parsed) return parsed;
            else return i.slice(0, i.length - 1);
        });

        object[item[0]] = item[1];
    });

    return object;
};
