import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateTask from './views/Tasks/CreateTask.vue';
import EditTask from './views/Tasks/EditTask.vue';
import SearchTask from './views/Tasks/SearchTask.vue';
import Login from './views/Auth/Login.vue';
import Register from './views/Auth/Register.vue';

Vue.use(Router);

let isLoggedIn = false;

let routes = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        }, {
            path: '/tasks',
            name: 'tasks.search',
            component: SearchTask,
            beforeEnter: (to, from, next) => {
                if (isLoggedIn) {
                    next();
                } else {
                    next('/login');
                }
            }
        }, {
            path: '/tasks/create',
            name: 'tasks.create',
            component: CreateTask,
            beforeEnter: (to, from, next) => {
                if (isLoggedIn) {
                    next();
                } else {
                    next('/login');
                }
            }
        }, {
            path: '/tasks/edit/:id',
            name: 'tasks.edit',
            component: EditTask,
            beforeEnter: (to, from, next) => {
                if (isLoggedIn) {
                    next();
                } else {
                    next('/login');
                }
            }
        }, {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: (to, from, next) => {
                if (!isLoggedIn) {
                    next();
                } else {
                    next('/');
                }
            }
        }, {
            path: '/register',
            name: 'register',
            component: Register,
            beforeEnter: (to, from, next) => {
                if (!isLoggedIn) {
                    next();
                } else {
                    next('/');
                }
            }
        }, {
            path: '*',
            redirect: '/',

        },
    ],
    linkActiveClass: 'active',

});
export default routes;