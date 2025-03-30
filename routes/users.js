const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('Users List')
})

router.get('/new', (req, res) => {
    res.render('users/new', { firstname: 'Gilliano' })
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ name: req.body.firstname })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('Error')
        res.render('users/new', { firstname: req.body.firstname })
    }
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