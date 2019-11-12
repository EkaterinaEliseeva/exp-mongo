const {User} = require('../conn');

module.exports = async r => {
    const {login, password, newpassword} = r.body;
    if (login && password && newpassword) {
        const x = await User.updateOne({login, password }, { password: newpassword });
        if (x.nModified < 1) return r.res.end('no such user');
        r.res.json(x);
    } else if (login && password) {
        r.res.send('New password cannot be empty!');
    } else if (login) {
        r.res.send('Password cannot be empty!');
    } else {
        r.res.send('Login cannot be empty!');
    }

};
// curl -X PUT -H "Content-Type: application/json" -d '{"login":"value1","password":"value2","newpassword":"abc"}' http://localhost:3000
