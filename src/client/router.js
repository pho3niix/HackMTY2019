import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import notf from './components/NotFound.vue';
import Trivia from './components/Trivia.vue';
import Login from './views/Login.vue';
import NewTrivia from './views/NewTrivia.vue';
import Registry from './views/Registry.vue';
import mesa from './views/mesa.vue';

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
            path: '/trivia',
            name: 'trivia',
            component: Trivia,
            meta: {
                title: 'Trivia'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: 'Login'
            }
        },
        {
            path: '/newTrivia',
            name: 'newTrivia',
            component: NewTrivia,
            meta: {
                title: 'NewTrivia'
            }
        },
        {
            path: '/registry',
            name: 'registry',
            component: Registry,
            meta: {
                title: 'Registry'
            }
        },
        {
            path: '/mesa',
            name: 'mesa',
            component: mesa,
            meta: {
                title: 'MESA'
            }
        }
    ]
});