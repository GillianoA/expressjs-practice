const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Users List')
})

router.get('/new', (req, res) => {
    res.send("User New Form")
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router.get('/:id', (req, res) => {
    if (req.user == null) {
        res.status(404)
        res.send('Not Found')
        return
    }
    res.send(`Get User With ID ${req.params.id} and name ${req.user.name}`)
})

router.put('/:id', (req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
})

const users = [{ name: 'Kyle' }, { name: 'Sally' }]

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router