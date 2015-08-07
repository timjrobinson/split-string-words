module.exports = function(string, delimiter) {
    var wordDelimiter = delimiter || "\\w";
    var word = new RegExp('"(?:\\"|[^"])+"|' + wordDelimiter + '+', "g");
    var outerQuote = /^\"|\"$/g;
    return string.match(word)
        .map(function(word) {
            // Remove quotes from start and end of quoted strings matched above
            return word.replace(outerQuote, "");
        });
};
