module.exports = {
    text : (req, res) => {
        res.status(200).send('ini text biasa')
    },
    testParams : (req, res) => {
        console.log('params : ', req.params)
        res.status(200).send(req.params)
    },
    testQuery : (req, res) => {
        console.log('query : ', req.query)
        res.status(200).send(req.query)
    },
    handleBody : (req, res) => {
        console.log('body : ', req.body)
        res.status(200).send(req.body)
    }
}