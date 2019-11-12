const {User} = require('../conn');

module.exports = async r => {
    const {login, password} = r.body;
    if (login && password) {
        const x = await User.deleteOne({login, password});
        if (x.n === 0) {
            r.res.send('Nothing to delete!')
        }
        await r.res.json(`User login:${login} successfully delete`);
    } else if (login) {
        r.res.send('Password cannot be empty!');
    } else {
        r.res.send('Login cannot be empty!');
    }
}


// curl -d '{"login":"a", "password":"b"}' -H "Content-Type: application/json" -X DELETE http://localhost:3000
