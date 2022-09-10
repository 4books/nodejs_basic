function expect(result) {
    return {
        tobe: function(expeced){
            if (result !== expeced) {
                throw new Error(`${result} is not equla to ${expeced}`);
            }
        }
    }
}

module.exports = expect;
