function makeUsersArray() {
    return [
        {
            id: 1,
            date_created: '2029-01-22T16:28:32.615Z',
            fullname: 'Betty Boop',
            username: 'betty.boop@gmail.com',
            password: 'secret',
            nickname: 'Betty'
        },
        {
            id: 2,
            date_created: '2100-05-22T16:28:32.615Z',
            fullname: 'Fred Flinstone',
            username: 'fredflinstone@yahoo.com',
            password: 'secret',
            nickname: 'Freddie'
        }
    ]
}

module.exports = {
    makeUsersArray
}