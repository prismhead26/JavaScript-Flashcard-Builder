
module.exports = { 
    stringifyData: (data) => {
        return JSON.stringify(data);
    },
    json: function(obj) {
        return JSON.stringify(obj);
    },
    newDate: function() {
        return new Date().toLocaleDateString('en-US');
    },
}
