const {User} = require('../conn');

module.exports = async r => {
    const {login, password} = r.body;
    if (login && password) {
        const x  = await User.findOne({login, password});
        if (x) return r.res.send('User already exists!');
        const newUser = new User( {login, password} );
        r.res.status(201).json( await newUser.save() );
    } else if (login) {
        r.res.send('Password cannot be empty!');
    } else {
        r.res.send('Login cannot be empty!');
    }

};
// curl -d '{"login":"a", "password":"b"}' -H "Content-Type: application/json" -X POST http://localhost:3000
