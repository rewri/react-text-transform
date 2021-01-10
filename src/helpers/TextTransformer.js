function normalize(text) {
    if (!text)
        return '';

    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function reverse(text) {
    if (!text)
        return '';

    return [...normalize(text)].reverse().join("");
}

function toNumeric(text) {
    if (!text)
        return '';

    let numericText = normalize(text).toUpperCase();
    numericText = numericText.replace(/O/g, 0);
    numericText = numericText.replace(/L/g, 1);
    numericText = numericText.replace(/E/g, 3);
    numericText = numericText.replace(/A/g, 4);
    numericText = numericText.replace(/S/g, 5);
    numericText = numericText.replace(/T/g, 7);
    return numericText;
}

function toCSV(text) {

    if (!text)
        return '';

    return normalize(text).split(' ').map(item => `"${item}"`).join(';');
}

function toSlug(text) {

    if (!text)
        return '';

    return normalize(text).toLowerCase().split(' ').join('-');
}

function onlyVowels(text) {
    if (!text)
        return '';

    return [...normalize(text)].filter(char => /^[aeiou ]/i.test(char)).join('');
}

function onlyConsonants(text) {
    if (!text)
        return '';

    return [...normalize(text)].filter(char => /^[^aeiou]+$/i.test(char)).join('');
}

function toVar(text) {

    if (!text)
        return '';

    return normalize(text).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase());

}

export { reverse, toNumeric, toCSV, toSlug, onlyVowels, onlyConsonants, toVar};
