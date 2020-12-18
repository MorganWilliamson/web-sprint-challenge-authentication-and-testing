const db = require('../../data/dbConfig');

module.exports = {
    getAll, 
    getBy,
    getById, 
    insert
};

function getAll() {
    return db('users').select('id', 'username');
}

function getBy(filter) {
    return db('users').where(filter);
}


function getById(id) {
    return db('users').select('id', 'username')
        .where({id}).first();
}

function insert (user) {
    const [id] = db('users').insert(user, 'id');
    return db('users').where({id}).first();
}