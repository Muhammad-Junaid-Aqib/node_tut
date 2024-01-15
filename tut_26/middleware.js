const reqFilter = (req, res, next) => {
// module.exports = (req, res, next) => {
    if (!req.query.age) {
        res.send('Age is required')
    } else if (req.query.age < 18) {
        res.send('You must be at least')
    } else {
        next();
    }
}

module.exports = reqFilter
