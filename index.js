module.exports = function(string) {
    if (!string) return [];
    
    return string.match(/\w+|"(?:\\"|[^"])+"/g)
        .map(function(word) { return word.replace(/^\"|\"$/g, ""); });  // Remove quotes from start and end of quoted strings matched above
};