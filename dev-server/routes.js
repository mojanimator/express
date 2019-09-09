// import taskRoutes from './api/task/tasks-routes'
// import authRoutes from './api/auth/auth-routes'
// import userRoutes from './api/user/user-routes'

const taskRoutes = require('./api/task/tasks-routes');
const authRoutes = require('./api/auth/auth-routes');
const userRoutes = require('./api/user/user-routes');

module.exports = function registerRoutes(app) {
    app.use('/api', taskRoutes);
    app.use('/api', authRoutes);
    app.use('/api', userRoutes);
};