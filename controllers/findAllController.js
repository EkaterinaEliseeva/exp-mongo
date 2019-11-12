const {User} = require('../conn');

module.exports = async r => {
    const result = await User.find();
    result ? r.res.send(result) : r.res.send('Do not exist');
};
