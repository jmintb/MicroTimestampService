module.exports = function(app) {
    app.get('/:time', function (req, res) {
        res.json((parseDate(req)))        
    })

    function parseDate(req) {
        var date = new Date((req.params.time));
        
        //If the date is Invalid then it means the format is a unix timestamp.
        if (date.toDateString() === 'Invalid Date') {
           date = new Date(Number(req.params.time)*1000)
        }

        return {
            unix: (date.getTime()/1000),
            natural: date.toDateString()
        }
    }
}