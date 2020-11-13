// api router will mount other routers
module.exports = (app) => {
    app.get('/', (req, res) => { res.send('Welcome to Node JS Sequelize App') });
    app.use('/api/users', require('./user/user.routes'));
}