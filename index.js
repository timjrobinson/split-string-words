module.exports = function(string) {
    if (!string) return [];
    var match = string.match(/"(?:\\"|[^"])+"|[^\s]+/g);
    if(!match) return [];
    return match
        .map(function(word) { return word.replace(/^\"|\"$/g, ""); });  // Remove quotes from start and end of quoted strings matched above
};
