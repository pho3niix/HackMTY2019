import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import notf from './components/notFound.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/NotFound',
            component: notf,
            meta: {
                title: '404 Not Found Error'
            }
        },
        {
            path: '*',
            redirect: '/NotFound'
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                title: 'About'
            }
        }
    ]
});